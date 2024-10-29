import { BsWindowDock } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useState, useEffect } from "react";
import "./index.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { baseUrl, documentUrl } from "../config";
import DocumentInformation from "../Popups/document";
import { GoDotFill } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
const DriverProfile = () => {
  const [userData, setUserData] = useState({});
  const [updatedUserData, setUpdatedUserData] = useState({});
  const [editDataContent, setEditDataContent] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [document, setDocument] = useState("");
  const [openDocumentInformation, setOpenDocumentInformation] = useState(false);
  const [documentVerificationData, setDocumentVerificationData] = useState({});
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isDocumentVerified, setIsDocumentVerified] = useState(false)

  const token = Cookies.get("jwtToken");
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.id;
  useEffect(() => {
    axios
      .get(`${baseUrl}user-data/${userId}`)
      .then((res) => {
        setUserData(res.data);
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
        console.log(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  const handleChangeData = (e) => {
    setUpdatedUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSaveData = () => {
    setEditDataContent("");
    axios
      .put(`${baseUrl}update-user-data/${userId}`, updatedUserData)
      .then((res) => {
        console.log(res.data);
        setUpdatedUserData({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="driver-profile-container">
        <div className="driver-profile-section">
          <img
            className="driver-profile-image"
            src={
              userData.photo
                ? `${documentUrl}${userData.photo}`
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s"
            }
            onClick={() => {
              setOpenDocumentInformation((prevState) => !prevState);
              setDocumentType("photo");
              setDocument(`${documentUrl}${userData.photo}`);
            }}
          />
          <h1 style={{ alignSelf: "center" }} className="driver-profile-name">
            {userData.first_name} {userData.last_name}
          </h1>
          <div className="driver-profile-id-container">
            <p className="id-value">Id</p>
            <p className="id-value">49JSDFIA9O38</p>
          </div>
          <div className="driver-profile-icons-container">
            <button className="driver-profile-icon-button" type="button">
              <BsWindowDock className="driver-profile-icon" />
              documents
            </button>
            <button className="driver-profile-icon-button" type="button">
              <BsWindowDock className="driver-profile-icon" />
              documents
            </button>
            <button className="driver-profile-icon-button" type="button">
              <BsWindowDock className="driver-profile-icon" />
              documents
            </button>
            <button className="driver-profile-icon-button" type="button">
              <BsWindowDock className="driver-profile-icon" />
              documents
            </button>
            <button className="driver-profile-icon-button" type="button">
              <BsWindowDock className="driver-profile-icon" />
              documents
            </button>
            <button className="driver-profile-icon-button" type="button">
              <BsWindowDock className="driver-profile-icon" />
              documents
            </button>
            <button className="driver-profile-icon-button" type="button">
              <BsWindowDock className="driver-profile-icon" />
              documents
            </button>
            <button className="driver-profile-icon-button" type="button">
              <BsWindowDock className="driver-profile-icon" />
              documents
            </button>
            <button className="driver-profile-icon-button" type="button">
              <BsWindowDock className="driver-profile-icon" />
              documents
            </button>
            <button className="driver-profile-icon-button" type="button">
              <BsWindowDock className="driver-profile-icon" />
              documents
            </button>
          </div>
          <div className="driver-profile-lisence-details-container">
            <img
              className="driver-profile-car-image"
              src="https://spaces-cdn.clipsafari.com/vftopz4247i0pebsyuozw8s6xco6"
            />
          </div>
        </div>
        <div className="driver-profile-section">
          <div className="driver-profile-name-status-container">
            <h1 className="driver-profile-name">Personal Details</h1>
            <div>
              {!documentVerificationData.verified_all && (
                <p
                  onClick={() => setOpenDropdown((prevState) => !prevState)}
                  className="driver-pending-status"
                >
                  {" "}
                  <GoDotFill className="pending-dot-icon" />
                  Pending...
                </p>
              )}
              {openDropdown && (
                <div className="profile-dropdown">
                  <p className="profile-dropdown-content">
                    Please Upload and check Your{" "}
                    <span className="profile-dropdown-span">
                    {!documentVerificationData.adhar_verify && "Adhar, "}
                    {!documentVerificationData.photo_verify && "Photo, "}
                    {!documentVerificationData.driving_verify && "Driving Licence, "}
                    {!documentVerificationData.certificate_verify && "Marks Certificate, "}
                    {!documentVerificationData.pan_verify && "PAN Card, "} </span> 
                    Then use your services
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="driver-profile-section-2">
            <div className="driver-profile-section-1">
              <label className="driver-profile-label">First Name</label>
              <div className="driver-profile-name-container">
                {editDataContent === "FirstName" ? (
                  <input
                    className="driver-profile-label-input"
                    onChange={handleChangeData}
                    name="first_name"
                    value={userData.first_name}
                    type="text"
                  />
                ) : (
                  <p className="driver-profile-label-name">
                    {userData.first_name}
                  </p>
                )}
                {editDataContent === "FirstName" ? (
                  <TiTick
                    className="driver-profile-edit-icon"
                    onClick={handleSaveData}
                  />
                ) : (
                  <MdEdit
                    className="driver-profile-edit-icon"
                    onClick={() => setEditDataContent("FirstName")}
                  />
                )}
              </div>
              <label className="driver-profile-label">Last Name</label>
              <div className="driver-profile-name-container">
                {editDataContent === "LastName" ? (
                  <input
                    className="driver-profile-label-input"
                    onChange={handleChangeData}
                    name="last_name"
                    value={userData.last_name}
                    type="text"
                  />
                ) : (
                  <p className="driver-profile-label-name">
                    {userData.last_name}
                  </p>
                )}
                {editDataContent === "LastName" ? (
                  <TiTick
                    className="driver-profile-edit-icon"
                    onClick={handleSaveData}
                  />
                ) : (
                  <MdEdit
                    className="driver-profile-edit-icon"
                    onClick={() => setEditDataContent("LastName")}
                  />
                )}
              </div>
              <label className="driver-profile-label">Phone No</label>
              <div className="driver-profile-name-container">
                {editDataContent === "PhoneNo" ? (
                  <input
                    className="driver-profile-label-input"
                    onChange={handleChangeData}
                    name="phone_number"
                    value={userData.phone_number}
                    type="text"
                  />
                ) : (
                  <p className="driver-profile-label-name">
                    {userData.phone_number}
                  </p>
                )}
                {editDataContent === "PhoneNo" ? (
                  <TiTick
                    className="driver-profile-edit-icon"
                    onClick={handleSaveData}
                  />
                ) : (
                  <MdEdit
                    className="driver-profile-edit-icon"
                    onClick={() => setEditDataContent("PhoneNo")}
                  />
                )}
              </div>
              <label className="driver-profile-label">Email</label>
              <div className="driver-profile-name-container">
                {editDataContent === "Email" ? (
                  <input
                    className="driver-profile-label-input"
                    onChange={handleChangeData}
                    name="email"
                    value={userData.email}
                    type="text"
                  />
                ) : (
                  <p className="driver-profile-label-name">{userData.email}</p>
                )}
                {editDataContent === "Email" ? (
                  <TiTick
                    className="driver-profile-edit-icon"
                    onClick={handleSaveData}
                  />
                ) : (
                  <MdEdit
                    className="driver-profile-edit-icon"
                    onClick={() => setEditDataContent("Email")}
                  />
                )}
              </div>
              <label className="driver-profile-label">Date Of Birth</label>
              <div className="driver-profile-name-container">
                {editDataContent === "DOB" ? (
                  <input
                    className="driver-profile-label-input"
                    onChange={handleChangeData}
                    name="dob"
                    value={userData.dob}
                    type="date"
                  />
                ) : (
                  <p className="driver-profile-label-name">{new Date(userData.dob).toLocaleDateString('en-GB')}</p>
                )}
                {editDataContent === "DOB" ? (
                  <TiTick
                    className="driver-profile-edit-icon"
                    onClick={handleSaveData}
                  />
                ) : (
                  <MdEdit
                    className="driver-profile-edit-icon"
                    onClick={() => setEditDataContent("DOB")}
                  />
                )}
              </div>
              <label className="driver-profile-label">Driving Experence</label>
              <div className="driver-profile-name-container">
                {editDataContent === "Experence" ? (
                  <input
                    className="driver-profile-label-input"
                    onChange={handleChangeData}
                    name="driving_experince"
                    value={userData.driving_experince}
                    type="text"
                  />
                ) : (
                  <p className="driver-profile-label-name">
                    {userData.driving_experince}
                  </p>
                )}
                {editDataContent === "Experence" ? (
                  <TiTick
                    className="driver-profile-edit-icon"
                    onClick={handleSaveData}
                  />
                ) : (
                  <MdEdit
                    className="driver-profile-edit-icon"
                    onClick={() => setEditDataContent("Experence")}
                  />
                )}
              </div>
            </div>
            <div className="driver-profile-section-1">
              <label className="driver-profile-label">Location</label>
              <div className="driver-profile-name-container">
                {editDataContent === "Location" ? (
                  <input
                    className="driver-profile-label-input"
                    onChange={handleChangeData}
                    name="location"
                    value={userData.location}
                    type="text"
                  />
                ) : (
                  <p className="driver-profile-label-name">
                    {userData.location}
                  </p>
                )}
                {editDataContent === "Location" ? (
                  <TiTick
                    className="driver-profile-edit-icon"
                    onClick={handleSaveData}
                  />
                ) : (
                  <MdEdit
                    className="driver-profile-edit-icon"
                    onClick={() => setEditDataContent("Location")}
                  />
                )}
              </div>
              <label className="driver-profile-label">Emergency Phone No</label>
              <div className="driver-profile-name-container">
                {editDataContent === "EPhoneNo" ? (
                  <input
                    className="driver-profile-label-input"
                    onChange={handleChangeData}
                    name="emergency_number"
                    value={userData.emergency_number}
                    type="text"
                  />
                ) : (
                  <p className="driver-profile-label-name">
                    {userData.emergency_number}
                  </p>
                )}
                {editDataContent === "EPhoneNo" ? (
                  <TiTick
                    className="driver-profile-edit-icon"
                    onClick={handleSaveData}
                  />
                ) : (
                  <MdEdit
                    className="driver-profile-edit-icon"
                    onClick={() => setEditDataContent("EPhoneNo")}
                  />
                )}
              </div>
              <label className="driver-profile-label">Password</label>
              <div className="driver-profile-name-container">
                {editDataContent === "Password" ? (
                  <input
                    className="driver-profile-label-input"
                    onChange={handleChangeData}
                    name="password"
                    value={userData.password}
                    type="password"
                  />
                ) : (
                  <p className="driver-profile-label-name">**********</p>
                )}
                {editDataContent === "Password" ? (
                  <TiTick
                    className="driver-profile-edit-icon"
                    onClick={handleSaveData}
                  />
                ) : (
                  <MdEdit
                    className="driver-profile-edit-icon"
                    onClick={() => setEditDataContent("Password")}
                  />
                )}
              </div>
              <div className="driver-profile-document-container">
                <h1 className="driver-profile-documents-name">
                  Document Details
                </h1>
                <div className="driver-profile-docs-container">
                  <div className="driver-profile-doc-container">
                    <div className="driver-profile-doc-nav-container">
                      <p className="driver-profile-doc-nav-descreption">
                        Adhar-Card
                      </p>
                      {documentVerificationData.adhar_verify ? (
                        <IoIosCheckmarkCircle className="verified-doc" />
                      ) : (
                        <p className="driver-profile-doc-nav-descreption">:</p>
                      )}
                    </div>
                    <img
                      onClick={() => {
                        setOpenDocumentInformation((prevState) => !prevState);
                        setDocumentType("adhar");
                        setDocument(`${documentUrl}${userData.adhar}`);
                        setIsDocumentVerified(documentVerificationData.adhar_verify)
                      }}
                      className="driver-profile-doc-image"
                      src={
                        userData.adhar
                          ? `${documentUrl}${userData.adhar}`
                          : "https://cdn-icons-png.flaticon.com/512/888/888108.png"
                      }
                      alt="document-image"
                    />
                  </div>
                  <div className="driver-profile-doc-container">
                    <div className="driver-profile-doc-nav-container">
                      <p className="driver-profile-doc-nav-descreption">
                        Driving-Licence
                      </p>
                      {documentVerificationData.driving_verify ? (
                        <IoIosCheckmarkCircle className="verified-doc" />
                      ) : (
                        <p className="driver-profile-doc-nav-descreption">:</p>
                      )}
                    </div>
                    <img
                      onClick={() => {
                        setOpenDocumentInformation((prevState) => !prevState);
                        setDocumentType("driving_licence");
                        setDocument(
                          `${documentUrl}${userData.driving_licence}`
                        );
                        setIsDocumentVerified(documentVerificationData.driving_verify)
                      }}
                      className="driver-profile-doc-image"
                      src={
                        userData.driving_licence
                          ? `${documentUrl}${userData.driving_licence}`
                          : "https://cdn-icons-png.flaticon.com/512/888/888108.png"
                      }
                      alt="document-image"
                    />
                  </div>
                  <div className="driver-profile-doc-container">
                    <div className="driver-profile-doc-nav-container">
                      <p className="driver-profile-doc-nav-descreption">
                        PAN-Card
                      </p>
                      {documentVerificationData.pan_verify ? (
                        <IoIosCheckmarkCircle className="verified-doc" />
                      ) : (
                        <p className="driver-profile-doc-nav-descreption">:</p>
                      )}
                    </div>
                    <img
                      onClick={() => {
                        setOpenDocumentInformation((prevState) => !prevState);
                        setDocumentType("pan");
                        setDocument(`${documentUrl}${userData.pan}`);
                        setIsDocumentVerified(documentVerificationData.pan_verify)
                      }}
                      className="driver-profile-doc-image"
                      src={
                        userData.pan
                          ? `${documentUrl}${userData.pan}`
                          : "https://cdn-icons-png.flaticon.com/512/888/888108.png"
                      }
                      alt="document-image"
                    />
                  </div>
                  <div className="driver-profile-doc-container">
                    <div className="driver-profile-doc-nav-container">
                      <p className="driver-profile-doc-nav-descreption">
                        Certificate
                      </p>
                      {documentVerificationData.certificate_verify ? (
                        <IoIosCheckmarkCircle className="verified-doc" />
                      ) : (
                        <p className="driver-profile-doc-nav-descreption">:</p>
                      )}
                    </div>
                    <img
                      onClick={() => {
                        setOpenDocumentInformation((prevState) => !prevState);
                        setDocumentType("marks_certificate");
                        setDocument(
                          `${documentUrl}${userData.marks_certificate}`
                        );
                        setIsDocumentVerified(documentVerificationData.certificate_verify)
                      }}
                      className="driver-profile-doc-image"
                      src={
                        userData.marks_certificate
                          ? `${documentUrl}${userData.marks_certificate}`
                          : "https://cdn-icons-png.flaticon.com/512/888/888108.png"
                      }
                      alt="document-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="driver-profile-buttons-container">
          <button className="driver-profile-details-button-1">Submit</button>
          <button className="driver-profile-details-button-2">Save</button>
          <button className="driver-profile-details-button-3">Clear</button>
        </div> */}
        </div>
      </div>
      <DocumentInformation
        setOpenDocumentInformation={setOpenDocumentInformation}
        openDocumentInformation={openDocumentInformation}
        userId={userId}
        documentType={documentType}
        document={document}
        isDocumentVerified={isDocumentVerified}
      />
    </>
  );
};

export default DriverProfile;
