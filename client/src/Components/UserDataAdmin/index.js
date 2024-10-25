import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../config";
import "./index.css";
import AllDocumentsInformation from "../Popups/allDocuments";

const UserDataAdmin = () => {
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState();
  const [openDocumentInformation, setOpenDocumentInformation] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}driver-data`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClickAccept = (userId) => {
    axios
      .put(`${baseUrl}accept-documents/${userId}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <div className="settings-container">
      <h1 className="settings-title">Drivers Data:</h1>
      <div className="settings-features-cards">
        {userData.map((eachUser, index) => (
          <div className="settings-feature-card" key={index}>
            <p
              className="settings-feature-name"
              style={{ marginBottom: "16px" }}
            >
              {eachUser.first_name} {eachUser.last_name}
            </p>
            <p className="profile-descreption">
              {eachUser.first_name} {eachUser.last_name}{" "}
              {eachUser.isDriver ? "is a driver" : "is not a driver"} with{" "}
              {eachUser.driving_experience} years of experience. They live at {eachUser.address},
              located in {eachUser.location}. Their date of birth is {eachUser.dob}. You can
              contact them at {eachUser.phone_number} or via email at {eachUser.email}. In case of
              an emergency, please contact {eachUser.emergency_number}. They are
              currently {eachUser.marital_status}. Their driving licence number is{" "}
              {eachUser.licence_number}.
            </p>
            <div>
              <button
                style={{ backgroundColor: "grey" }}
                className="documents-button"
                onClick={() => {
                    setUserId(eachUser.id)
                    setOpenDocumentInformation(true)
                }}
              >
                Documents
              </button>
              <button
                onClick={() => handleClickAccept(eachUser.id)}
                className="documents-button"
              >
                Accept
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <AllDocumentsInformation 
    setOpenDocumentInformation={setOpenDocumentInformation}
    openDocumentInformation={openDocumentInformation}
    userId={userId}
    document={document}
  />
  </>
  );
};

export default UserDataAdmin;
