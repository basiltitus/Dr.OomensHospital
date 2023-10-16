import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./BookingModal.css";
import OTP from "./OTP";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { child, get, ref, remove, set } from "firebase/database";
import { database } from "../firebase";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "./PDF";
import { Checkmark } from "react-checkmark";
import { DoctorList } from "./DoctorList";

export default function BookingModal(props) {
  const [screen, setScreen] = React.useState(0);
  const [details, setDetails] = React.useState({
    PatientName: "",
    Age: "",
    DoctorName: "",
    Purpose: "",
    Phone: "",
    BookingID: "",
    BookingDate: "",
  });
  const [minDate, setMinDate] = React.useState("");
  const [maxDate, setMaxDate] = React.useState("");
  const [blobURL, setBlobURL] = React.useState("");
  const [OTPval, setOTPval] = React.useState("");
  function handleClose() {
    if (screen != 3) {
      if (details.Phone.length == 10) {
        const d = new Date();
        set(
          ref(
            database,
            "Leads/" +
              d.getFullYear() +
              "/" +
              d.toLocaleString("default", { month: "short" }) +
              "/" +
              d.getDate() +
              "/" +
              details.Phone
          ),
          {
            Phone: details.Phone,
            Time:
              d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds(),
            Status: "OPEN",
          }
        );
      }
    }
    setScreen(0);
    setDetails({});
    props.handleClose();
  }
  useEffect(() => {
    setMinDate(
      new Date().toLocaleDateString("fr-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    );
    setMaxDate(
      new Date(
        new Date().getTime() + 5 * 24 * 60 * 60 * 1000
      ).toLocaleDateString("fr-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    );
  }, []);
  function bookingfn() {
    let BookingID = "";
    const db = database;
    let queryString = "";

    // if (details.DoctorName.includes("Oommen")) queryString = "BookingOommenID";
    // else 
    queryString = "BookingDocID";
    get(child(ref(db), queryString))
      .then((snapshot) => {
        BookingID = snapshot.val();
        console.log(BookingID);

        const d = new Date(details.BookingDate);
        var currentdate = new Date();
        var datetime =
          currentdate.getDate() +
          "/" +
          (currentdate.getMonth() + 1) +
          "/" +
          currentdate.getFullYear() +
          " @ " +
          currentdate.getHours() +
          ":" +
          currentdate.getMinutes() +
          ":" +
          currentdate.getSeconds();
        set(
          ref(
            db,
            "Bookings/" +
              d.getFullYear() +
              "/" +
              d.toLocaleString("default", { month: "short" }) +
              "/" +
              d.getDate() +
              "/" +
              BookingID
          ),
          {
            ...details,
            TimeStamp: datetime,
            BookingID: BookingID,
            Status: "OPEN",
          }
        );
        set(ref(db, queryString), +BookingID + 1);
        console.log(details);
        const f = new Date();
        remove(
          ref(
            database,
            "Leads/" +
              f.getFullYear() +
              "/" +
              f.toLocaleString("default", { month: "short" }) +
              "/" +
              f.getDate() +
              "/" +
              details.Phone
          )
        );
        setDetails({ ...details, BookingID: BookingID });
        setScreen(3);
        // setDetails({});
        // props.handleClose();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const MySwal = withReactContent(Swal);
  return (
    <>
      <Modal show={props.show} onHide={handleClose} id="bookingModal">
        <Modal.Header closeButton>
          <Modal.Title className="PrimaryColour">
            {screen == 0 && "Make your booking"}
            {screen == 1 && "Confirm OTP"}
            {screen == 2 && "Confirm details"}
            {screen == 3 && "Booking Confirmed"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="booking" class="section">
            <div class="section-center">
              <div class="container">
                <div class="row">
                  <div class="booking-form">
                    {screen == 0 && (
                      <>
                        {" "}
                        {/* <div class="form-header">
                          <h1>Make your booking</h1>
                        </div> */}
                        <form>
                          <div class="row">
                            <div class="col-md-8">
                              <div class="form-group">
                                {" "}
                                <input
                                  class="form-control"
                                  type="text"
                                  placeholder="Name"
                                  value={details.PatientName}
                                  required
                                  onChange={(e) => {
                                    setDetails({
                                      ...details,
                                      PatientName: e.target.value,
                                    });
                                  }}
                                />{" "}
                                <span class="form-label">Patient Name</span>{" "}
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="form-group">
                                {" "}
                                <input
                                  class="form-control"
                                  type="number"
                                  placeholder="Years"
                                  required
                                  min={1}
                                  max={100}
                                  maxLength={2}
                                  value={details.Age}
                                  onChange={(e) => {
                                    setDetails({
                                      ...details,
                                      Age: e.target.value,
                                    });
                                  }}
                                />{" "}
                                <span class="form-label">Age</span>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="form-group">
                                {" "}
                                <select
                                  class="form-control"
                                  required
                                  value={details.DoctorName}
                                  onChange={(e) => {
                                    setDetails({
                                      ...details,
                                      DoctorName: e.target.value,
                                    });
                                  }}
                                >
                                  <option value="" selected hidden disabled>
                                    Doctor Name
                                  </option>
                                  {DoctorList.map((item)=><option>{item.name},{item.position}</option>)}
                                </select>{" "}
                                <span class="select-arrow"></span>{" "}
                                <span class="form-label-select">
                                  Booking for
                                </span>{" "}
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                {" "}
                                <select
                                  class="form-control"
                                  required
                                  value={details.Purpose}
                                  onChange={(e) => {
                                    setDetails({
                                      ...details,
                                      Purpose: e.target.value,
                                    });
                                  }}
                                >
                                  <option value="" selected hidden>
                                    Purpose
                                  </option>
                                  <option>Surgery</option>
                                  <option>Consultation</option>
                                  <option>Follow-up</option>
                                </select>{" "}
                                <span class="select-arrow"></span>{" "}
                                <span class="form-label-select">
                                  Purpose of visit
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="form-group col-md-6">
                              {" "}
                              <input
                                class="form-control"
                                type="tel"
                                placeholder="Enter you Phone"
                                value={details.Phone}
                                minLength={10}
                                maxLength={10}
                                required
                                onChange={(e) => {
                                  setDetails({
                                    ...details,
                                    Phone: e.target.value,
                                  });
                                }}
                              />{" "}
                              <span class="form-label">Phone</span>{" "}
                            </div>
                            <div class="form-group col-md-6">
                              {" "}
                              <input
                                class="form-control PrimaryColour"
                                type="date"
                                placeholder="Booking Date"
                                value={details.BookingDate}
                                required
                                onChange={(e) => {
                                  setDetails({
                                    ...details,
                                    BookingDate: e.target.value,
                                  });
                                }}
                                min={minDate}
                                max={maxDate}
                              />{" "}
                              <span class="form-label">Booking Date</span>{" "}
                            </div>
                          </div>

                          <div class="form-btn">
                            {" "}
                            <button
                              class="submit-btn"
                              onClick={() => {
                                // if (props.isAdmin) {
                                  bookingfn();
                                  setScreen(3);
                                // } else setScreen(3);
                              }}
                            >Book Now
                              {/* {props.isAdmin ? "Book Now" : "Get OTP"} */}
                            </button>{" "}
                          </div>
                        </form>
                      </>
                    )}
                    {screen == 1 && (
                      <>
                        <OTP setOTP={setOTPval} OTP={OTPval} />
                        <div class="form-btn">
                          {" "}
                          <button
                            class="submit-btn"
                            onClick={() => {
                              if (OTPval.length != 4) {
                                Swal.fire("Please enter valid OTP");
                              } else setScreen(2);
                            }}
                          >
                            Confirm
                          </button>{" "}
                        </div>
                      </>
                    )}

                    {screen == 2 && (
                      <>
                        {" "}
                        <div class="row">
                          <div class="col-md-8">
                            <div class="form-group">
                              {" "}
                              <input
                                class="form-control"
                                disabled
                                type="text"
                                value={details.PatientName}
                                placeholder="Name"
                              />{" "}
                              <span class="form-label">Patient Name</span>{" "}
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              {" "}
                              <input
                                class="form-control"
                                disabled
                                type="number"
                                placeholder="Years"
                                value={details.Age}
                                required
                              />{" "}
                              <span class="form-label">Age</span>{" "}
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              {" "}
                              <select
                                class="form-control"
                                required
                                disabled
                                value={details.DoctorName}
                              >
                                <option value="" selected hidden>
                                  Doctor Name
                                </option>
                                {DoctorList.map((item)=><option>{item.name},{item.position}</option>)}
                              </select>{" "}
                              <span class="select-arrow"></span>{" "}
                              <span class="form-label-select">Booking for</span>{" "}
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              {" "}
                              <select
                                class="form-control"
                                required
                                disabled
                                value={details.Purpose}
                              >
                                <option value="" disabled selected hidden>
                                  Purpose
                                </option>
                                <option>Surgery</option>
                                <option>Consultation</option>
                                <option>Follow-up</option>
                              </select>{" "}
                              <span class="select-arrow"></span>{" "}
                              <span class="form-label">Purpose of visit</span>{" "}
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="form-group col-md-6">
                            {" "}
                            <input
                              class="form-control"
                              type="tel"
                              disabled
                              value={details.Phone}
                              placeholder="Enter you Phone"
                            />{" "}
                            <span class="form-label">Phone</span>{" "}
                          </div>
                          <div class="form-group col-md-6">
                            {" "}
                            <input
                              class="form-control PrimaryColour"
                              type="date"
                              value={details.BookingDate}
                              disabled
                            />{" "}
                            <span class="form-label-select">Booking Date</span>{" "}
                          </div>
                        </div>
                        <div class="form-btn">
                          {" "}
                          <button
                            class="submit-btn"
                            onClick={() => {
                              bookingfn();
                            }}
                          >
                            Confirm and make appointment
                          </button>{" "}
                        </div>
                      </>
                    )}
                    {screen == 3 && (
                      <>
                        <Checkmark size="96px" />
                        <h3
                          className="text-center"
                          style={{ padding: "1rem 0rem",height:'auto'}}
                        >
                          YOUR BOOKING IS SUCCESSFULL
                        </h3>
                        <div className="text-center confirm-deails">
                          <b>Booking ID: {details.BookingID}</b>
                          <br />
                          <b>Booking Date : {details.BookingDate}</b>
                          <br />
                          <b>Patient Name : {details.PatientName}</b>
                          <br />
                          <b>Doctor Name : {details.DoctorName} </b>
                          <br />
                          <b>Purpose : {details.Purpose}</b>
                        </div>

                        <div class="form-btn">
                          <PDFDownloadLink
                            document={<PDF details={details} />}
                            fileName={"Booking_" + details.BookingID + ".pdf"}
                          >
                            {({ blob, url, loading, error }) =>
                              loading ? (
                                "Loading document..."
                              ) : (
                                <button class="submit-btn" onClick={() => {}}>
                                  Print Reciept
                                </button>
                              )
                            }
                          </PDFDownloadLink>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
