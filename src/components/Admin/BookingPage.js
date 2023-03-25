import { onValue, ref, update } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { database } from "../firebase";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./BookingPage.css";
import CustomSelect from "./CustomSelect";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { doctor2Name, doctor1Name } from "../../Constants";
// import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import filterFactory, {
  textFilter,
  selectFilter,
} from "react-bootstrap-table2-filter";
import DoctorCard from "../Home/DoctorCard";
import { bookingEmptySrc } from "../../Constants";
import Swal from "sweetalert2";
import AppointmentBtn from "../Utilities/AppointmentBtn";
const parse = require("html-react-parser");

export default function BookingPage() {
  const [dates, setDates] = React.useState([]);
  const [bookings, setBookings] = React.useState([]);
  const [filteredBooking, setFilteredBooking] = React.useState([]);
  const [dateDropdown, setDateDropDown] = React.useState("");
  const [selectedDoc, setSelectedDoc] = React.useState("All");
  const [selectedPurpose, setSelectedPurpose] = React.useState("All");
  const [selectedDate, setSelectedDate] = React.useState(dayjs(new Date()));
  const docSelectOptions = {
    0: doctor1Name,
    1: doctor2Name,
  };
  const purposeSelectOptions = {
    0: "Surgery",
    1: "Consultation",
    2: "Follow-up",
  };
  const columns = [
    {
      dataField: "BookingID",
      text: "B.ID",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "PatientName",
      text: "Name",
      sort: true,
      filter: textFilter(),
      title: (cell, row, rowIndex, colIndex) =>
        `This booking is made by ${row.TimeStamp}`,
    },
    {
      dataField: "DoctorName",
      text: "Doctor",
      sort: true,
    },
    {
      dataField: "Purpose",
      text: "Purpose",
      sort: true,
    },
    {
      dataField: "Status",
      text: "Status",
      sort: true,
    },
  ];
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(`clicked on row with index: ${rowIndex}`);
      Swal.fire({
        title: "Terminate Booking",
        showDenyButton: true,
        confirmButtonText: "Terminate",
        denyButtonText: `No`,
        html:
          "Booking ID : <b>" +
          row.BookingID +
          "</b><br/>" +
          "Patient Name : <b>" +
          row.PatientName +
          "</b><br/>" +
          "Doctor Name : <b>" +
          row.DoctorName +
          "</b><br/>",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          const d = new Date(row.BookingDate);
          console.log(d);
          update(
            ref(
              database,
              "Bookings/" +
                d.getFullYear() +
                "/" +
                d.toLocaleString("default", { month: "short" }) +
                "/" +
                d.getDate() +
                "/" +
                row.BookingID
            ),
            {
              Status: "CLOSED",
            }
          ).then(() => {
            // Data saved successfully!
            // filterData(filteredBooking,selectedDoc,setSelectedPurpose,0)
            Swal.fire("Saved!", "Booking has been terminated", "success");
          });
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    },
  };

  function fetchDB(currentD) {
    const db = database;
    const bookingRef = ref(
      db,
      "Bookings/" +
        currentD.getFullYear() +
        "/" +
        currentD.toLocaleString("default", { month: "short" }) +
        "/" +
        currentD.getDate()
    );
    onValue(bookingRef, (snapshot) => {
      const data = snapshot.val();
      if (data != null) {
        console.log(Object.values(data));
        setBookings(Object.values(data));
        filterData(Object.values(data), "All", "All", 1);
      } else {
        setBookings([]);
        setFilteredBooking([]);
      }
    });
  }
  function filterData(data, doc, purpose, init) {
    data.sort((a, b) => {
      return b.Status - a.Status;
    });
    if (init) setFilteredBooking(data);
    else {
      setFilteredBooking(data);
      console.log(data);
      console.log(doc + " " + purpose);
      if (doc == "All" && purpose == "All") setFilteredBooking(bookings);
      else if (doc != "All" && purpose == "All")
        setFilteredBooking(bookings.filter((el) => el.DoctorName == doc));
      else if (doc == "All" && purpose != "All")
        setFilteredBooking(bookings.filter((el) => el.Purpose == purpose));
      else
        setFilteredBooking(
          bookings.filter((el) => el.Purpose == purpose && el.DoctorName == doc)
        );
    }
  }
  useEffect(() => {
    const currentD = new Date();
    fetchDB(currentD);
  }, []);
  function onDateChange(newDate) {
    console.log(newDate.toDate());
    fetchDB(newDate.toDate());
    setSelectedDate(newDate);
  }
  return (
    <>
      <Row>
        <Col md={3}>
          <CustomSelect
            title="Doctor"
            options={["All", doctor1Name, doctor2Name]}
            onChange={(val) => {
              setSelectedDoc(val);
              filterData(filteredBooking, val, selectedPurpose, 0);
            }}
            value={selectedDoc}
          />
        </Col>
        <Col md={3}>
          <CustomSelect
            title="Purpose"
            options={["All", "Surgery", "Consultation", "Follow-up"]}
            onChange={(val) => {
              setSelectedPurpose(val);
              filterData(filteredBooking, selectedDoc, val, 0);
            }}
            value={selectedDoc}
          />
        </Col>
        <Col md={2} />
        <Col md={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Booking Date"
              //   defaultValue={}
              onChange={onDateChange}
              value={selectedDate}
            />
          </LocalizationProvider>
        </Col>
        <Col md={2}>
          <AppointmentBtn />
        </Col>
      </Row>
      <br/>
      {filteredBooking.length == 0 ? (
        <>
          <Row>
            <Col className="text-right">
              <img src={bookingEmptySrc} className="emptyImg" />
            </Col>
            <Col className="text-left emptyText">
              <h1>No Bookings </h1>
            </Col>
          </Row>
        </>
      ) : (
        <BootstrapTable
          keyField="BookingID"
          data={filteredBooking}
          noDataIndication={() => {
            <h1>empty</h1>;
          }}
          striped
          hover
          condensed
          columns={columns}
          filter={filterFactory()}
          rowEvents={rowEvents}
          
        />
      )}
    </>
  );
}
