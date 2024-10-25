import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
import { baseUrl, documentUrl } from "../config";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import "./index.css";

const AllDocumentsInformation = ({
  openDocumentInformation,
  setOpenDocumentInformation,
  userId,
}) => {
  const [selectedFile, setSelectedFile] = useState();
  const [previewUrl, setPreviewUrl] = useState({});
  const [userData, setUserData] = useState(null);
  const [documentVerificationData, setDocumentVerificationData] = useState({})

useEffect(() => {
    axios
      .get(`${baseUrl}user-data/${userId}`)
      .then((res) => {
        setUserData(res.data);
        setPreviewUrl({photo:`${documentUrl}${res.data.photo}`, adhar:`${documentUrl}${res.data.adhar}`, pan:`${documentUrl}${res.data.pan}`, marks_certificate:`${documentUrl}${res.data.marks_certificate}`, driving_licence:`${documentUrl}${res.data.driving_licence}`})
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  useEffect(() => {
    axios
      .get(`${baseUrl}document-verification-data/${userId}`)
      .then((res) => {
        setDocumentVerificationData(res.data);        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);


  const handleClickVerify = (userId, verificationData) => {
    axios.put(`${baseUrl}/document-verification/${userId}`, verificationData)
      .then(res => {
        console.log("Success:", res.data);
        setDocumentVerificationData({...documentVerificationData, ...verificationData})
      })
      .catch(err => {
        console.error("Error:", err);
      });
  };

  const roomDetails = () => {
    return (
      <label
        htmlFor="documentFile"
        className="document-card"
      >
        <div className="documents-images-container">
            <div className="document-image-container">
            {documentVerificationData.photo_verify === 1 && <IoIosCheckmarkCircle className="verified" />}
        <img
          className="document-image"
          src={
             previewUrl
              ? previewUrl.photo
              : "https://cdn-icons-png.flaticon.com/512/7112/7112229.png"
          }
        />
        <div className="verification-button-container">
        <a href={`${previewUrl.photo}`} target="_blank"><button className="verification-button">Show Photo</button></a>
            <button className="verification-button">Write Review</button>
            {!documentVerificationData.photo_verify && <button onClick={() => handleClickVerify(userData.id, {photo_verify:true})} className="verification-button">Verify</button>}
        </div>
        </div>
        <div className="document-image-container">
        {documentVerificationData.adhar_verify === 1 && <IoIosCheckmarkCircle className="verified" />}
        <img
          className="document-image"
          src={
             previewUrl
              ? previewUrl.adhar
              : "https://cdn-icons-png.flaticon.com/512/7112/7112229.png"
          }
        />
        <div className="verification-button-container">
        <a href={`${previewUrl.adhar}`} target="_blank"><button className="verification-button">Show Adhar</button></a>
            <button className="verification-button">Write Review</button>
            {!documentVerificationData.adhar_verify  && <button onClick={() => handleClickVerify(userData.id, {adhar_verify:true})} className="verification-button">Verify</button>}
        </div>
        </div>
        <div className="document-image-container">
        {documentVerificationData.pan_verify === 1 && <IoIosCheckmarkCircle className="verified" />}
        <img
          className="document-image"
          src={
             previewUrl
              ? previewUrl.pan
              : "https://cdn-icons-png.flaticon.com/512/7112/7112229.png"
          }
        />
        <div className="verification-button-container">
            <a href={`${previewUrl.pan}`} target="_blank"><button className="verification-button">Show PAN</button></a>
            <button className="verification-button">Write Review</button>
            {!documentVerificationData.pan_verify && <button onClick={() => handleClickVerify(userData.id, {pan_verify:true})} className="verification-button">Verify</button>}
        </div>
        </div>

        <div className="document-image-container">
        {documentVerificationData.certificate_verify === 1 && <IoIosCheckmarkCircle className="verified" />}
        <img
          className="document-image"
          src={
             previewUrl
              ? previewUrl.marks_certificate
              : "https://cdn-icons-png.flaticon.com/512/7112/7112229.png"
          }
        />
        <div className="verification-button-container">
        <a href={`${previewUrl.marks_certificate}`} target="_blank"><button className="verification-button">Show Certificate</button></a>
            <button className="verification-button">Write Review</button>
            {!documentVerificationData.certificate_verify && <button onClick={() => handleClickVerify(userData.id, {certificate_verify:true})} className="verification-button">Verify</button>}
        </div>
        </div>
        <div className="document-image-container">
        {documentVerificationData.driving_verify === 1 && <IoIosCheckmarkCircle className="verified" />}
        <img
          className="document-image"
          src={
             previewUrl
              ? previewUrl.driving_licence
              : "https://cdn-icons-png.flaticon.com/512/7112/7112229.png"
          }
        />
        <div className="verification-button-container">
        <a href={`${previewUrl.driving_licence}`} target="_blank"><button className="verification-button">Show Licence</button></a>
            <button className="verification-button">Write Review</button>
            {!documentVerificationData.driving_verify && <button onClick={() => handleClickVerify(userData.id, {driving_verify:true})} className="verification-button">Verify</button>}
        </div>
        </div>
        </div>
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
          width: "60%",
        }}
        className="popup-content"
      >
        <>{roomDetails()}</>
      </Popup>
    </>
  );
};

export default AllDocumentsInformation;
