import OTPInput, { ResendOTP } from "otp-input-react";
import React from "react";
import { Button } from "react-bootstrap";

export default function OTP() {
  const [OTP, setOTP] = React.useState("");
  const renderButton = (buttonProps) => {
    return (
      <Button className='resend-btn' {...buttonProps}>
        {buttonProps.remainingTime !== 0 ? `Please wait for ${buttonProps.remainingTime} sec` : "Resend"}
      </Button>
    );
  };
  return (
    <div className='otp-div'>
      <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure 
          className='otp-item'
      />
      <ResendOTP maxTime={60} onResendClick={() => console.log("Resend clicked")}
      renderButton={renderButton} 
       />
    </div>
  );
}