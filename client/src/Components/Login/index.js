import { useState } from "react";
import { useDeviceType } from "../Functions/deviceConverter";
import { IoLogoFacebook } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareGooglePlus } from "react-icons/fa6";
import axios from "axios";
import Cookies from "js-cookie"
import { baseUrl } from "../config";
import "./index.css";

const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [driverDetails, setDriverDetails] = useState({});
  const [loginDetails, setLoginDetails] = useState({});


  const [step, setStep] = useState(0); // Step state to track the current page
  const { isTablet, isDesktop } = useDeviceType();

  const handleNextClick = () => {
    if (step < 2) {
      setStep((prevStep) => prevStep + 1);
      setIsActive(true); // Ensure isActive is true when moving to the signup section
    }
  };

  console.log(step);
  

  const handlePreviousClick = () => {
    if (step > 0) {
      setStep((prevStep) => {
        return prevStep - 1;
      });
      setIsNext(false);
    }
  };

  const handleSubmitDriverDetails = (e) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}signup-driver`, driverDetails)
      .then((res) => {
        alert("User Successfully created");
        window.history.replaceState({}, document.title, "/login");
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 400) {
            alert("User already exists with this email or phone number");
          } else if (err.response.status === 500) {
            alert("Internal Server Error. Please try again later.");
          } else {
            alert(`Error: ${err.response.data.error || "An error occurred"}`);
          }
        } else if (err.request) {
          alert(
            "No response from server. Please check your network connection."
          );
        } else {
          alert("Error in request setup: " + err.message);
        }
        console.log(err);
      });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    axios.post(`${baseUrl}login`, loginDetails)  // Sending data directly instead of {data}
      .then((res) => {
        Cookies.set("jwtToken", res.data.token, { expires: 30 });
        localStorage.setItem('senderData', JSON.stringify(res.data.user))
        window.location.reload()
        window.history.replaceState({}, document.title, "/login");
      })
      .catch((err) => {
        // Improved error handling
        console.error('Login Error:', err.response ? err.response.data : err.message);
        alert(err.response ? err.response.data.error : err.message);
      });
  }

  const handleChangeDriverDetails = (event) => {
    setDriverDetails({
      ...driverDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeLoginDetails = (event) => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleKeepSigninButton = () => {
      setIsActive(false)
  }

  const signupSecondPage = () => {
    return (
      <div
        className="form-container sign-up"
        style={{
          width: isDesktop || isTablet ? "50%" : "100%",
          transform: step === 2 ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.6s ease-in-out",
        }}
      >
        <form
          onSubmit={handleSubmitDriverDetails}
          className="sn-form-container"
        >
          <h1 className="signup-heading">Personal Details</h1>
          <input
            name="emergencyNumber"
            onChange={handleChangeDriverDetails}
            type="phone"
            placeholder="Emergency Number"
          />
          <select onChange={handleChangeDriverDetails} name="maritalStatus">
            <option value="maritalStatus">---Marital status---</option>
            <option value="Married">Married</option>
            <option value="Single">Single</option>
          </select>
          <select onChange={handleChangeDriverDetails} name="gender">
            <option value="Gender">---Select Gender---</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            onChange={handleChangeDriverDetails}
            name="dob"
            type="date"
            placeholder="Date of Birth"
          />
          <input
            onChange={handleChangeDriverDetails}
            name="location"
            type="text"
            placeholder="Location"
          />
          <textarea
            onChange={handleChangeDriverDetails}
            name="address"
            type="text"
            rows={4}
            cols={20}
            placeholder="Address"
          />
          <div className="signin-button-container">
            <button
              type="button"
              onClick={handlePreviousClick}
              className="previous-button"
            >
              Previous
            </button>
            <button type="submit" className="next-button">
              SignUp
            </button>
          </div>
          {!isDesktop && !isTablet && (
            <button
              type="button"
              onClick={() => {
                setIsActive(false);
                setStep(0); // Go to the "Sign In" page
              }}
              className="keep-signup-button"
            >
              {" "}
              Keep Sign In{" "}
            </button>
          )}
        </form>
      </div>
    );
  };

  const signupFirstPage = () => {
    return (
      <div
        className="form-container sign-up"
        style={{
          width: isDesktop || isTablet ? "50%" : "100%",
          transform:
            step === 1
              ? "translateX(0)"
              : step > 1
              ? "translateX(-100%)"
              : "translateX(100%)",
          transition: "transform 0.6s ease-in-out",
        }}
      >
        <form className="sn-form-container">
          <h1 className="signup-heading">Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <FaSquareGooglePlus className="brands" />
            </a>
            <a href="#" className="icon">
              <IoLogoFacebook className="brands" />{" "}
            </a>
            <a href="#" className="icon">
              <FaGithubSquare className="brands" />{" "}
            </a>
            <a href="#" className="icon">
              <IoLogoLinkedin className="brands" />{" "}
            </a>
          </div>
          <span>or use your email for registration</span>
          <input
            onChange={handleChangeDriverDetails}
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={handleChangeDriverDetails}
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          <input
            onChange={handleChangeDriverDetails}
            name="phoneNumber"
            type="phone"
            placeholder="Phone Number"
          />
          <input
            onChange={handleChangeDriverDetails}
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={handleChangeDriverDetails}
            name="password"
            type="password"
            placeholder="Password"
          />

          <button
            type="button"
            className="next-button"
            onClick={handleNextClick}
          >
            Next
          </button>

          {!isDesktop && !isTablet && (
            <button
              type="button"
              onClick={handleKeepSigninButton}
              className="keep-signup-button"
            >
              Keep Sign In
            </button>
          )}
        </form>
      </div>
    );
  };

  const signinPage = () => {
    return (
      <div
        className="form-container sign-in"
        style={{
          width: isDesktop || isTablet ? "50%" : "100%",
          transform: step === 0 ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <form onSubmit={handleSubmitLogin} className="sn-form-container">
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <FaSquareGooglePlus className="brands" />
            </a>
            <a href="#" className="icon">
              <IoLogoFacebook className="brands" />
            </a>
            <a href="#" className="icon">
              <FaGithubSquare className="brands" />
            </a>
            <a href="#" className="icon">
              <IoLogoLinkedin className="brands" />
            </a>
          </div>
          <span>or use your email password</span>
          <input onChange={handleChangeLoginDetails} name="email" type="email" placeholder="Email" />
          <input onChange={handleChangeLoginDetails} name="password" type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button type="submit" className="signin-button">Sign In</button>
          {!isDesktop && !isTablet && (
            <button
              type="button"
              onClick={() => {
                setIsActive(true);
                setStep(1); // Go to the "Create Account" page
              }}
              className="keep-signup-button"
            >
              Keep Sign Up
            </button>
          )}
        </form>
      </div>
    );
  };

  return (
    <div className="signin-main-container">
      <div
        className={`signin-container ${isActive && "active"}`}
        id="container"
      >
        {signupSecondPage()}
        {signupFirstPage()}
        {signinPage()}

        {(isDesktop || isTablet) && (
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <img
                  className="security-image"
                  src="https://cdn-icons-png.flaticon.com/512/9767/9767164.png"
                  alt="Security"
                />
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button
                  className="hidden signin-button"
                  onClick={() => setIsActive(false)}
                  id="login"
                >
                  {" "}
                  Sign In{" "}
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <img
                  className="security-image"
                  alt="Security2"
                  src="https://cdn-icons-png.flaticon.com/512/9767/9767164.png"
                />
                <h1>Hello, Friend!</h1>
                <p>
                  Register with your personal details to use all of site
                  features
                </p>
                <button
                  className="hidden signin-button"
                  onClick={() => setIsActive(true)}
                  id="register"
                >
                  {" "}
                  Sign Up{" "}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Login;
