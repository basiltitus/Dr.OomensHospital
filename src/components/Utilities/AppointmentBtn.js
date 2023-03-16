import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function AppointmentBtn() {
  const MySwal = withReactContent(Swal);
  return (
    <Button
      className="appointmentBtn fw500"
      onClick={() =>
        MySwal.fire({
          title: <strong>Good job!</strong>,
          html: <i>Booking will open shortly!</i>,
          icon: "success",
        })
      }
    >
      Book Now
    </Button>
  );
}

export default AppointmentBtn;
