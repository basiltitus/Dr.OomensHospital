import { onValue, ref, remove, update } from "firebase/database";
import { collection, getDocs, setDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { Button, Col, Container, Nav, Row,ButtonGroup } from "react-bootstrap";
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
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { bookingEmptySrc } from "../../Constants";
import Swal from "sweetalert2";
import AppointmentBtn from "../Utilities/AppointmentBtn";
import { DoctorList } from "../Home/DoctorList";
const parse = require("html-react-parser");

export default function BookingPage() {
  const [dates, setDates] = React.useState([]);
  const [bookings, setBookings] = React.useState([]);
  const [filteredBooking, setFilteredBooking] = React.useState([]);
  const [leads,setLeads]=React.useState([]);
  const [dateDropdown, setDateDropDown] = React.useState("");
  const [selectedDoc, setSelectedDoc] = React.useState("All");
  const [selectedPurpose, setSelectedPurpose] = React.useState("All");
  const [selectedDate, setSelectedDate] = React.useState(dayjs(new Date()));
  const  [tabbedData,setTabbedData]=React.useState('OPEN');
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
      dataField: "Phone",
      text: "Mobile Number",
      sort: true,
      filter: textFilter(),
    },
    {
        dataField: "TimeStamp",
        text: "TimeStamp",
        sort: true,
        hidden:true
      },
      {
        dataField: "Status",
        text: "Status",
        sort: true,
        hidden:true
      },
      {
        dataField: "Age",
        text: "Age",
        sort: true,
        hidden:true
      },
      {
        dataField: "follow",
        text: "Follow",
        formatter: linkFollow,
        sort: true
        , headerStyle: (colum, colIndex) => {
            return { width: '8vw', textAlign: 'center' };
          }
      }
  ];
  const leadsColumns=[
    {
        dataField: "Phone",
        text: "Phone Number",
        sort: true
      },
      {
        dataField: "Time",
        text: "Time",
        sort: true,
      },
      {
        dataField: "Action",
        text: "Action",
        formatter: leadFollow
        , headerStyle: (colum, colIndex) => {
            return { width: '8vw', textAlign: 'center' };
          }
      }
  ]
  function  leadFollow (cell, row, rowIndex, formatExtraData){
    return (
      <>
      <Button
      variant="danger"
      onClick={() => {
        deleteRow(row);
      }}
      disabled={row.Status!='OPEN'}
    >
      <i class="fa-regular fa-circle-xmark"></i>
    </Button>
    </>
    );
  };
  function  linkFollow (cell, row, rowIndex, formatExtraData){
    return (
      <><Button
      variant="success"
        onClick={() => {
          terminate(row);
        }}
        disabled={row.Status!='OPEN'}
      >
        <i class="fa-regular fa-circle-check"></i>
      </Button>{" "}
      <Button
      variant="danger"
      onClick={() => {
        cancel(row);
      }}
      disabled={row.Status!='OPEN'}
    >
      <i class="fa-regular fa-circle-xmark"></i>
    </Button>
    </>
    );
  };
   function deleteRow(row){
    
        const d = new Date();
        console.log(row);
        remove(
          ref(
            database,
            "Leads/" +
              d.getFullYear() +
              "/" +
              d.toLocaleString("default", { month: "short" }) +
              "/" +
              d.getDate() +
              "/" +
              row.Phone
          )
        ).then(() => {
         
        })
  }
  function terminate(row){
    if(row.Status=='OPEN')
    {
    Swal.fire({
      title: "Complete Booking",
      showDenyButton: true,
      confirmButtonText: "Complete",
      denyButtonText: `Cancel`,
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
          Swal.fire("Saved!", "Booking has been completed", "success");
        });
      } else if (result.isDenied) {
        // Swal.fire("Changes are not saved", "", "info");
      }
    });}
  }
  function cancel(row){
    if(row.Status=='OPEN')
    {
    Swal.fire({
      title: "Cancel Booking",
      showDenyButton: true,
      confirmButtonText: "Cancel",
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
            Status: "CANCELLED",
          }
        ).then(() => {
          // Data saved successfully!
          // filterData(filteredBooking,selectedDoc,setSelectedPurpose,0)
          Swal.fire("Saved!", "Booking has been terminated", "success");
        });
      } else if (result.isDenied) {
        // Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
   terminate(row);
    }}
  }
  const expandRow = {
    onlyOneExpanding: true,

    renderer: row => (
      <div>
        <b>Booking Details</b>
        <Row>
            <Col>
                Booking ID : {row.BookingID}
            </Col>
            <Col>
                PatientName : {row.PatientName}
            </Col>
            <Col>Age : {row.Age} </Col>
            <Col>Doctor Name : {row.DoctorName}</Col>
            </Row><Row>
            <Col>Purpose : {row.Purpose}</Col>
            <Col>Phone : {row.Phone}</Col>
            <Col>Booked on : {row.TimeStamp}</Col>
            <Col>Status : {row.Status}</Col>
        </Row>
      </div>
    )
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
        filterData(Object.values(data), selectedDoc , selectedPurpose, 1);
      } else {
        setBookings([]);
        setFilteredBooking([]);
      }
    });
    const leadRef = ref(
        db,
        "Leads/" +
          currentD.getFullYear() +
          "/" +
          currentD.toLocaleString("default", { month: "short" }) +
          "/" +
          currentD.getDate()
      );
      onValue(leadRef, (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
          console.log(Object.values(data));
          setLeads(Object.values(data));
        } else {
          setLeads([]);
        }
      });
  }
  function filterData(data, doc, purpose, init) {
    data.sort((a, b) => {
      return b.Status - a.Status;
    });
    if (init) {
      setSelectedDoc("All")
      setSelectedPurpose('All')
      setFilteredBooking(data);}
    else {
      setFilteredBooking(data);
      console.log(doc + " " + purpose);
      console.log(data)
      console.log(bookings)
      if (doc == "All" && purpose == "All") setFilteredBooking(bookings);
      else if (doc != "All" && purpose == "All")
        setFilteredBooking(bookings.filter((el) => el.DoctorName.includes(doc)));
      else if (doc == "All" && purpose != "All")
        setFilteredBooking(bookings.filter((el) => el.Purpose == purpose));
      else
        setFilteredBooking(
          bookings.filter((el) => el.Purpose == purpose && el.DoctorNameincludes(doc))
        );
        console.log(filteredBooking)

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
        <Col className="col-md-3 col-sm-6">
          <CustomSelect
            title="Doctor"
            options={['All',...DoctorList.map(item=>item.name)]}
            // {["All", doctor1Name, doctor2Name]}
            onChange={(val) => {
              setSelectedDoc(val);
              filterData(filteredBooking, val, selectedPurpose, 0);
            }}
            value={selectedDoc}
          />
        </Col>
        <Col  className="col-md-3 col-sm-6">
          <CustomSelect
            title="Purpose"
            options={["All", "Surgery", "Consultation", "Follow-up"]}
            onChange={(val) => {
              setSelectedPurpose(val);
              filterData(filteredBooking, selectedDoc, val, 0);
            }}
            value={selectedPurpose}
          />
        </Col>
        <Col className="col-md-2 col-sm-6 pt-4">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Booking Date"
              //   defaultValue={}
              onChange={onDateChange}
              value={selectedDate}
            />
          </LocalizationProvider>
        </Col>
        <Col className="col-md-2 col-sm-6 pt-4 text-center">
        <ButtonGroup size="lg">
        {/* <DropdownButton as={ButtonGroup} title="Doctor Actions" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1">Mark all bookings Complete</Dropdown.Item>
        <Dropdown.Item eventKey="2">Mark all bookings Cancel</Dropdown.Item>
        <Dropdown.Item eventKey="3">Stop upcoming Booking</Dropdown.Item>
      </DropdownButton>
      <DropdownButton as={ButtonGroup} title="Date Actions" id="bg-nested-dropdown">
      <Dropdown.Item eventKey="1">Mark all bookings Complete</Dropdown.Item>
        <Dropdown.Item eventKey="2">Mark all bookings Cancel</Dropdown.Item>
        <Dropdown.Item eventKey="3">Stop upcoming Booking</Dropdown.Item>
      </DropdownButton> */}
          <AppointmentBtn  isAdmin={true}/>
    </ButtonGroup>
        </Col>
      </Row>
      <Nav variant="tabs"  className='tabbed-nav'
       onSelect={(event, eventKey) => setTabbedData(event)}>
      <Nav.Item>
        <Nav.Link eventKey="OPEN" >Open</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="CLOSED">Completed</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="CANCELLED">Cancelled</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="LEADS">Leads</Nav.Link>
      </Nav.Item>
    </Nav>
      <>
        { tabbedData == 'OPEN'&& (filteredBooking.filter((el)=>el.Status=='OPEN').length==0?
        <>
        <Row>
            <Col className="text-right">
              <img src={bookingEmptySrc} className="emptyImg" />
            </Col>
            <Col className="text-left">
              <h1 className="emptyText">No Bookings </h1>
            </Col>
          </Row>
        </>: 
        <div className="scrollable">
        <BootstrapTable
          keyField="BookingID"
          data={filteredBooking.filter((el)=>el.Status=='OPEN')}
          noDataIndication={() => {
            <h1>empty</h1>;
          }}
          striped
          hover
          condensed
          columns={columns}
          filter={filterFactory()}
        //   rowEvents={this.rowEvents}
          expandRow={ expandRow }
        /> </div>)
        } 
        { tabbedData=='CLOSED'&&
        (filteredBooking.filter((el)=>el.Status=='CLOSED').length==0?
        <>
        <Row>
            <Col className="text-right">
              <img src={bookingEmptySrc} className="emptyImg" />
            </Col>
            <Col className="text-left">
              <h1 className="emptyText">No Bookings</h1>
            </Col>
          </Row>
        </>:
        <div className="scrollable">
        <BootstrapTable
          keyField="BookingID"
          data={filteredBooking.filter((el)=>el.Status=='CLOSED')}
          noDataIndication={() => {
            <h1>empty</h1>;
          }}
          striped
          hover
          condensed
          columns={columns}
          expandRow={ expandRow }
          filter={filterFactory()}
        //   rowEvents={rowEvents}
        /></div>)
        }
        { tabbedData=='CANCELLED'&&
        (filteredBooking.filter((el)=>el.Status=='CANCELLED').length==0?
        <>
        <Row>
            <Col className="text-right">
              <img src={bookingEmptySrc} className="emptyImg" />
            </Col>
            <Col className="text-left">
              <h1 className="emptyText">No Bookings</h1>
            </Col>
          </Row>
        </>:
        <div className="scrollable">
        <BootstrapTable
          keyField="BookingID"
          data={filteredBooking.filter((el)=>el.Status=='CANCELLED')}
          noDataIndication={() => {
            <h1>empty</h1>;
          }}
          striped
          hover
          condensed
          columns={columns}
          expandRow={ expandRow }
          filter={filterFactory()}
        //   rowEvents={rowEvents}
        /></div>)
        }
        { tabbedData=='LEADS'&&
        (leads.filter((el)=>el.Status=='OPEN').length==0?
        <>
          <Row>
            <Col className="text-right">
              <img src={bookingEmptySrc} className="emptyImg" />
            </Col>
            <Col className="text-left">
              <h1 className="emptyText">No leads for the selected date </h1>
            </Col>
          </Row>
        </>:
        <div className="scrollable">
        <BootstrapTable
          keyField="Phone"
          data={leads.filter((el)=>el.Status=='OPEN')}
          striped
          hover
          condensed
          columns={leadsColumns}
          filter={filterFactory()}
        />
        </div>)
        }
        </>
        
    </>
  );
}
