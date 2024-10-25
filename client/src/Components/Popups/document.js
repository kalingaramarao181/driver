import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import { baseUrl } from "../config";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./index.css";

const DocumentInformation = ({
  openDocumentInformation,
  setOpenDocumentInformation,
  userId,
  documentType,
  document,
  isDocumentVerified
}) => {
  const [roomData, setroomData] = useState(null);
  const [selectedFile, setSelectedFile] = useState();
  const [previewUrl, setPreviewUrl] = useState(null);
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Set the file in both states
    setSelectedFile(file);
    // Check if the file is an image for preview
    if (file && /\.(jpg|jpeg|png|gif)$/i.test(file.name)) {
      const fileUrl = URL.createObjectURL(file); // Create a URL for image preview
      setPreviewUrl(fileUrl); // Set preview URL
    } else {
      setPreviewUrl(null); // Clear preview if not an image
    }
  };

  const submitFile = () => {
    if (!selectedFile || !documentType) {
      alert("Please select a file and a document type.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("documentType", documentType);

    axios
      .put(`${baseUrl}upload-file/${userId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        window.location.reload(); 
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const roomDetails = () => {
    return (
      <label
        onChange={handleFileChange}
        htmlFor="documentFile"
        className="document-card"
      >
        <img
          className="document-demo-image"
          src={
            document
              ? document
              : previewUrl
              ? previewUrl
              : "https://cdn-icons-png.flaticon.com/512/7112/7112229.png"
          }
        />
        {!isDocumentVerified && <button
          onClick={submitFile}
          type="button"
          className="document-upload-button"
        >
          <FaCloudUploadAlt className="document-upload-icon" />
          Upload
        </button>}
        {!isDocumentVerified && <input
          id="documentFile"
          className="document-upload-file-input"
          type="file"
        />}
      </label>
    );
  };

  return (
    <>
      {openDocumentInformation && <div className="blur-background" />}

      <Popup
        open={openDocumentInformation}
        onClose={() => setOpenDocumentInformation(false)}
        closeOnDocumentClick
        contentStyle={{
          padding: "10px",
          borderRadius: "5px",
          boxShadow:
            "0 6px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          transition: "opacity 1s ease-in-out",
          backgroundColor: "white",
          scrollbarWidth: "none",
          width: "40%",
        }}
        className="popup-content"
      >
        <>{roomDetails()}</>
      </Popup>
    </>
  );
};

export default DocumentInformation;
