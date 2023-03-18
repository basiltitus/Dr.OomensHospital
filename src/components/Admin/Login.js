import React from "react";
import { Container } from "react-bootstrap";
import "./Login.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Login(props) {
  const MySwal = withReactContent(Swal);
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  function loginFn() {
    if (userName == "admin" && password == "admin") {
      props.AuthenticationSuccessfull();
    } else {
      MySwal.fire({
        title: <strong>Invalid Credentials!</strong>,
        html: <i>This is a restricted entry area!</i>,
        icon: "error",
      });
    }
  }
  return (
    <Container fluid className="loginDiv">
      <div class="container-login">
        <div class="wrap-login">
            <span class="login-form-title">Admin Login</span>
            <img
              class="avatar"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
              alt=""
              align="center"
            />

            <div class="wrap-input100">
              <input
                class="input100"
                type="text"
                name="txtUsuario"
                placeholder="Username"
                onChange={(e)=>{setUserName(e.target.value)}}
              />
              <span class="focus-efecto"></span>
            </div>
            <div class="wrap-input100">
              <input
                class="input100"
                type="password"
                name="txtPassword"
                placeholder="Password"
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              <span class="focus-efecto"></span>
            </div>
            <div class="container-login-form-btn">
              <div class="wrap-login-form-btn">
                <div class="login-form-bgbtn"></div>
                <button type="submit" name="btnEntrar" onClick={loginFn} class="login-form-btn">
                  Log In
                </button>
              </div>
            </div>
        </div>
      </div>
    </Container>
  );
}
