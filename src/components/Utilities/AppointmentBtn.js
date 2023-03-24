import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import BookingModal from "../Home/BookingModal";

function AppointmentBtn() {
  const MySwal = withReactContent(Swal);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (<>
    <Button
      className="appointmentBtn fw500"
      onClick={() =>{handleShow();}

        // MySwal.fire({
        //   title: <strong>Good job!</strong>,
        //   html: <i>Booking will open shortly!</i>,
        //   icon: "success",
        // })
      }
    >
      Book Now
    </Button>
    <BookingModal show={show} handleClose={handleClose}/>
    </>
  );
}

export default AppointmentBtn;
