import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import CollegeOfOphtalmology from "./components/CollegeOfOphtalmology";
import Events from "./components/Events";
import Home from "./components/Home";
import ErrorPage from './components/Utilities/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pages/events",
    element: <Events />,
  },
  {
    path: "/admin/dashboard",
    element: <Admin />,
  },
  {
    path: "/pages/collegeofophtalmology",
    element: <CollegeOfOphtalmology />,
  },
]);

function App() {
  return (
    <div className="App">
    <React.StrictMode>
    <RouterProvider router={router} />

      </React.StrictMode>
    </div>
  );
}

export default App;
