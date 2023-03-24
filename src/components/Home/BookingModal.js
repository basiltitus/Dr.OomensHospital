import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./BookingModal.css";
import OTP from "./OTP";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { child, get, ref, set } from "firebase/database";
import { database } from "../firebase";

export default function BookingModal(props) {
  const [screen, setScreen] = React.useState(0);
  const [details, setDetails] = React.useState({
    PatientName: "",
    Age: 0,
    DoctorName: "",
    Purpose: "",
    Phone: "",
    BookingID: "",
    BookingDate: "",
  });
  const [minDate, setMinDate] = React.useState("");
  const [maxDate, setMaxDate] = React.useState("");

  function handleClose() {
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
    
    if (details.DoctorName.includes("Oommen")) queryString = "BookingOommenID";
    else queryString = "BookingDocID";
    get(child(ref(db), queryString))
      .then((snapshot) => {
        BookingID = snapshot.val();
        console.log(BookingID);

        const d = new Date(details.BookingDate);
        const timestamp = Date.now();
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
            TimeStamp: timestamp,
            BookingID: BookingID,
            Status:'OPEN'
          }
        );
        set(ref(db, queryString), +BookingID + 1);
        console.log(details);
        setScreen(0);
        setDetails({});
        // props.handleClose();
        Swal.fire({
          title: 'Booking Confirmed',
          icon: 'success',
          confirmButtonText: 'Ok',
          html:
          'Your Booking for '+details.DoctorName+' on '+details.BookingDate+' is confirmed.<br/>'+
          'Booking ID : <b>'+BookingID+'</b><br/>'+
          'Patient Name : <b>'+details.PatientName+'</b><br/>'+
          'Doctor Name : <b>'+details.DoctorName+'</b><br/>'

        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            props.handleClose();
          }
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const MySwal = withReactContent(Swal);
  return (
    <>
      <Modal show={props.show} onHide={handleClose} id="bookingModal">
        <Modal.Body>
          <div id="booking" class="section">
            <div class="section-center">
              <div class="container">
                <div class="row">
                  <div class="booking-form">
                    {screen == 0 && (
                      <>
                        {" "}
                        <div class="form-header">
                          <h1>Make your booking</h1>
                        </div>
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
                                  <option value="" selected hidden>
                                    Doctor Name
                                  </option>
                                  <option>Dr. Oommen Varghese</option>
                                  <option>Dr. Arun Philip</option>
                                </select>{" "}
                                <span class="select-arrow"></span>{" "}
                                <span class="form-label">Booking for</span>{" "}
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
                                placeholder="Enter you Phone"
                                value={details.Phone}
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
                                setScreen(1);
                              }}
                            >
                              Get OTP
                            </button>{" "}
                          </div>
                        </form>
                      </>
                    )}
                    {screen == 1 && (
                      <>
                        <div class="form-header">
                          <h1>Confirm OTP</h1>
                        </div>
                        <OTP />
                        <div class="form-btn">
                          {" "}
                          <button
                            class="submit-btn"
                            onClick={() => {
                              setScreen(2);
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
                        <div class="form-header">
                          <h1>Confirm details</h1>
                        </div>
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
                                <option>Dr. Oommen Varghese</option>
                                <option>Dr. Arun Philip</option>
                              </select>{" "}
                              <span class="select-arrow"></span>{" "}
                              <span class="form-label">Booking for</span>{" "}
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
                                <option value="" selected hidden>
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
                            <span class="form-label">Booking Date</span>{" "}
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
