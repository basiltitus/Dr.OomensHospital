import { useRouteError } from "react-router-dom";
import AppBar from "./AppBar";
import Footer from "./Footer";
import Topbar from "./Topbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
    <Topbar/>
    <AppBar/>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Footer/>
    </div>
  );
}