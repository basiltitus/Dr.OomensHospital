import React from "react";
import "./DownloadButton.css";
import { Button } from "@mui/material";
import { firebase } from "../firebase";
import {ArrowCircleDown} from '@mui/icons-material';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const DownloadButton = (props) => {
  const handleDownload = () => {
    // Initialize Firebase with your project's configuration

    const storage = getStorage();
    const fileRef = ref(storage, props.title + ".pdf");
    getDownloadURL(fileRef)
      .then((url) => {
        // Create a download link
        const link = document.createElement("a");
        link.href = url;
        link.download = props.title + ".pdf";
        link.target = "_blank";
        link.click();
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };

  return (
    <Button size="large" className="download-button" onClick={handleDownload} variant="contained" 
    startIcon={<ArrowCircleDown />}>
    Download {props.title}</Button>
    );
  };
    {/* <button className="download-button" onClick={handleDownload}>
      <span className="icon">&#8681;</span> Download<br/> {props.title}
    </button> */}

export default DownloadButton;
  