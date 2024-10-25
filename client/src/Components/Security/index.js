import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
import "./index.css";

const Security = () => {
  return (
    <>
      <section className ="security-banner-section">
        <div className="security-container">
          <div className="banner-content text-center">
            <div className="row animate-slide">
              <div className="col-lg-12">
                <div className="security-banner-title">
                  <h1 className="banner-heading1"><MdOutlineSecurity />Security</h1>
                  <p className="mb">Your Safety Our Priority</p>
                  <div>
                  <button className="cta-button-prev">Signup</button>
                  <button className="cta-button">Get Started</button>
                </div>
                </div>
                <img className="security-image" src="/images/security.avif"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="service-container">
          <div className="container">
            <div className="row service-item">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="service-box">
                  <div className="service-img">
                    <figure>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#FFFFFF"
                      >
                        <path d="M481-779q108 0 203.5 46T843-601q3 5 2.5 8t-3.5 6q-3 3-7.5 3t-8.5-5q-59-82-150.5-126T481-759q-103 0-193 44.5T138-589q-4 5-7.5 6t-7.5-1q-4-2-4-6.5t2-8.5q62-86 157-133t203-47Zm0 96q136 0 233.5 90T812-371q0 46-34 78t-82 32q-49 0-84-32t-35-78q0-39-28.5-65T481-462q-39 0-68 26t-29 65q0 104 63 173.5T604-100q6 2 7.5 5t.5 7q-1 5-4 7t-8 0q-103-26-169.5-103T364-371q0-47 34.5-79t82.5-32q48 0 82.5 32t34.5 79q0 38 29.5 64t68.5 26q38 0 66.5-26t28.5-64q0-123-91.5-206T481-660q-127 0-218.5 83T171-371q0 24 5.5 62.5T200-221q2 5 0 7.5t-5 4.5q-4 2-8.5 1t-6.5-6q-13-38-20.5-77.5T152-371q0-129 98-220.5T481-683Zm0-197q65 0 127.5 16T728-819q5 2 5.5 6t-1.5 7q-2 3-5.5 5t-8.5 0q-55-27-115-42.5T481-859q-62 0-121 14.5T247-801q-5 2-7.5.5T235-805q-2-2-2-6t3-6q57-31 119.5-47T481-880Zm0 298q92 0 158.5 61T706-371q0 5-2.5 7.5T696-361q-5 0-8-2.5t-3-7.5q0-81-60.5-136T481-562q-83 0-142.5 55T279-371q0 85 29.5 145T396-106q4 4 3.5 7.5T396-92q-2 2-6.5 3.5T381-92q-58-60-90.5-126T258-371q0-89 65.5-150T481-582Zm-1 200q5 0 7.5 3t2.5 8q0 81 59.5 133.5T687-185q8 0 19-1t24-3q5-1 8 1.5t4 5.5q1 4-.5 7t-6.5 4q-18 5-31.5 5.5t-16.5.5q-88 0-152.5-58.5T470-371q0-5 2.5-8t7.5-3Z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#FFFFFF"
                      >
                        <path d="M690.88-270q25.88 0 44-19T753-333.88q0-25.88-18.12-44t-44-18.12Q665-396 646-377.88q-19 18.12-19 44T646-289q19 19 44.88 19Zm-1.38 125q33.5 0 60.5-14t46-40q-26-14-51.96-21t-54-7q-28.04 0-54.54 7T584-199q19 26 45.5 40t60 14ZM480-80q-138-32-229-156.5T160-522v-239l320-120 320 120v270q-14-7-30-12.5t-30-7.5v-208l-260-96-260 96v197q0 76 24.5 140T307-269.5q38 48.5 84 80.5t89 46q6 12 18 27t20 23q-9 5-19 7.5T480-80Zm212.5 0Q615-80 560-135.5T505-267q0-78.43 54.99-133.72Q614.98-456 693-456q77 0 132.5 55.28Q881-345.43 881-267q0 76-55.5 131.5T692.5-80ZM480-479Z" />
                      </svg>
                    </figure>
                  </div>
                  <div className="service-title">
                    <h4 className="service-heading4">Rigorous Verification for Drivers and Passengers</h4>
                    <p className="service-para">
                      At RideReady, Our verification process is designed to
                      ensure that only qualified drivers and genuine passengers
                      use the platform.
                    </p>
                    <ul className="service-list">
                      <li className="service-list-item">
                        <strong>Driver Verification</strong>: We verify key
                        documents like driver’s licenses, vehicle registration,
                        insurance, and conduct background checks.
                      </li>
                      <li className="service-list-item">
                        <strong>Passenger Verification</strong>: Passengers must
                        provide valid identification, maintaining a trusted
                        environment for all users.
                      </li>
                    </ul>
                    <a href="pricing.html" className="service-link">
                      Read more <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-12">
                <div className="service-box">
                  <div className="service-img">
                    <figure>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#FFFFFF"
                      >
                        <path d="M540-420q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM220-280q-24.75 0-42.37-17.63Q160-315.25 160-340v-400q0-24.75 17.63-42.38Q195.25-800 220-800h640q24.75 0 42.38 17.62Q920-764.75 920-740v400q0 24.75-17.62 42.37Q884.75-280 860-280H220Zm100-60h440q0-42 29-71t71-29v-200q-42 0-71-29t-29-71H320q0 42-29 71t-71 29v200q42 0 71 29t29 71Zm480 180H100q-24.75 0-42.37-17.63Q40-195.25 40-220v-460h60v460h700v60ZM220-340v-400 400Z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#FFFFFF"
                      >
                        <path d="M429-360h102l-25-145q20-9 32-26.5t12-38.5q0-29-20.5-49.5T480-640q-29 0-49.5 20.5T410-570q0 21 12 38.5t32 26.5l-25 145Zm51 279q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z" />
                      </svg>
                    </figure>
                  </div>
                  <div className="service-title">
                    <h4 className="service-heading4">Safe and Secure Transactions</h4>
                    <p className="service-para">
                      Your payment information is always protected. We use the
                      latest encryption technologies and secure payment gateways
                      to ensure your transactions are safe.
                    </p>
                    <ul className="service-list">
                      <li className="service-list-item">
                        <strong>Encrypted Payment Methods</strong>: All
                        transactions are processed securely, keeping your
                        payment data safe.
                      </li>
                      <li className="service-list-item">
                        <strong>Refund & Dispute Policy</strong>: In case of
                        disputes, our support team is here to help resolve
                        issues quickly.
                      </li>
                    </ul>
                    <a href="pricing.html" class="service-link">
                      Read more <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className ="col-lg-4 col-md-4 col-12">
                <div className="service-box">
                  <div className="service-img">
                    <figure>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#FFFFFF"
                      >
                        <path d="M200-204v54q0 12.75-8.62 21.37Q182.75-120 170-120h-20q-12.75 0-21.37-8.63Q120-137.25 120-150v-324l85-256q3-14 15.4-22t27.6-8h127v-75h212v75h125q15.2 0 27.6 8 12.4 8 15.4 22l85 256v324q0 12.75-8.62 21.37Q822.75-120 810-120h-21q-12.75 0-21.37-8.63Q759-137.25 759-150v-54H200Zm3-330h554l-55-166H258l-55 166Zm-23 60v210-210Zm105.76 160q23.24 0 38.74-15.75Q340-345.5 340-368q0-23.33-15.75-39.67Q308.5-424 286-424q-23.33 0-39.67 16.26Q230-391.47 230-368.24q0 23.24 16.26 38.74 16.27 15.5 39.5 15.5ZM675-314q23.33 0 39.67-15.75Q731-345.5 731-368q0-23.33-16.26-39.67Q698.47-424 675.24-424q-23.24 0-38.74 16.26-15.5 16.27-15.5 39.5 0 23.24 15.75 38.74Q652.5-314 675-314Zm-495 50h600v-210H180v210Z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#FFFFFF"
                      >
                        <path d="M480-288q79 0 136-57t57-136q0-79-57-136t-136-57q-79 0-136 57t-57 136q0 79 57 136t136 57Zm74-92-99-91v-136h42v124l84 76-27 27ZM480-81q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z" />
                      </svg>
                    </figure>
                  </div>
                  <div className ="service-title">
                    <h4 className="service-heading4">Ensuring a Safe Ride Every Time</h4>
                    <p className="service-para">
                      RideReady integrates advanced safety features to ensure
                      peace of mind for both riders and drivers.
                    </p>
                    <ul className="service-list">
                      <li className="service-list-item">
                        <strong>Real-Time Ride Tracking</strong>: Share your
                        trip details with trusted contacts for added security.
                      </li>
                      <li className="service-list-item">
                        <strong>SOS Button</strong>: Emergency assistance is
                        available at your fingertips.
                      </li>
                      <li className="service-list-item">
                        <strong>Rating System</strong>: Drivers and passengers
                        rate each other, improving the community's safety.
                      </li>
                    </ul>
                    <a href="pricing.html" className ="service-link">
                      Read more <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className ="row service-item">
              <div className ="col-lg-4 col-md-4 col-12">
                <div className ="service-box">
                  <div className ="service-img">
                    <figure>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#FFFFFF"
                      >
                        <path d="M439-290h320v-19q0-42-42.5-68.5T599-404q-75 0-117.5 26.5T439-309v19Zm159.92-174q30.08 0 51.58-21.42t21.5-51.5q0-30.08-21.42-51.58t-51.5-21.5q-30.08 0-51.58 21.42t-21.5 51.5q0 30.08 21.42 51.58t51.5 21.5ZM140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h281l60 60h339q23 0 41.5 18.5T880-680v460q0 23-18.5 41.5T820-160H140Zm0-60h680v-460H456l-60-60H140v520Zm0 0v-520 520Z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#FFFFFF"
                      >
                        <path d="M450-284h60v-257h-60v257Zm30-323q14.45 0 24.23-9.78Q514-626.55 514-641t-9.77-24.22Q494.45-675 480-675q-14.45 0-24.23 9.78Q446-655.45 446-641t9.77 24.22Q465.55-607 480-607Zm0 526q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z" />
                      </svg>
                    </figure>
                  </div>
                  <div className="service-title">
                    <h4 className="service-heading4">Data Privacy & Confidentiality</h4>
                    <p className="service-para">
                      We take your privacy seriously and comply with the highest
                      global standards for data protection, including GDPR
                      compliance.
                    </p>
                    <ul className="service-list">
                      <li className="service-list-item">
                        <strong>Data Encryption</strong>: Your personal data is
                        encrypted and securely stored.
                      </li>
                      <li className="service-list-item">
                        <strong>Privacy Controls</strong>: You control what data
                        you share and with whom.
                      </li>
                    </ul>

                    <a href="pricing.html" className="service-link">
                      Read more <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-12">
                <div className="service-box">
                  <div className="service-img">
                    <figure>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#FFFFFF"
                      >
                        <path d="M120-120v-76l60-60v136h-60Zm165 0v-236l60-60v296h-60Zm165 0v-296l60 61v235h-60Zm165 0v-235l60-60v295h-60Zm165 0v-396l60-60v456h-60ZM120-356v-85l280-278 160 160 280-281v85L560-474 400-634 120-356Z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#FFFFFF"
                      >
                        <path d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z" />
                      </svg>
                    </figure>
                  </div>
                  <div className="service-title">
                    <h4 className="service-heading4">Continuous Monitoring & Updates</h4>
                    <p className="service-para">
                      Our platform is continuously monitored and updated to stay
                      ahead of potential security threats.
                    </p>
                    <ul className="service-list">
                      <li className="service-list-item">
                        <strong>Background Checks</strong>: Regular reviews
                        ensure drivers remain compliant with safety standards.
                      </li>
                      <li className="service-list-item">
                        <strong>Security Updates</strong>: Frequent updates keep
                        the app secure from potential vulnerabilities.
                      </li>
                    </ul>
                    <a href="pricing.html" className="service-link">
                      Read more <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-12">
                <div className="service-box">
                  <div className="service-img">
                    <figure>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#FFFFFF"
                      >
                        <path d="M475-140q5 0 11.5-2.5T497-149l337-338q13-13 19.5-29.67Q860-533.33 860-550q0-17-6.5-34T834-614L654-794q-13-13-30-19.5t-34-6.5q-16.67 0-33.33 6.5Q540-807 527-794l-18 18 81 82q13 14 23 32.5t10 40.5q0 38-29.5 67T526-525q-25 0-41.5-7.5t-30.19-21.34L381-627 200-446q-5 5-7 10.53-2 5.52-2 11.84 0 12.63 8.5 21.13 8.5 8.5 21.17 8.5 6.33 0 11.83-3t9.5-7l138-138 42 42-137 137q-5 5-7 11t-2 12q0 12 9 21t21 9q6 0 11.5-2.5t9.5-6.5l138-138 42 42-137 137q-4 4-6.5 10.33-2.5 6.34-2.5 12.67 0 12 9 21t21 9q6 0 11-2t10-7l138-138 42 42-138 138q-5 5-7 11t-2 11q0 14 8 22t22 8Zm.06 60Q442-80 416-104.5t-31-60.62Q351-170 328-193t-28-57q-34-5-56.5-28.5T216-335q-37-5-61-30t-24-60q0-17 6.72-34.05Q144.45-476.1 157-489l224-224 110 110q8 8 17.33 12.5 9.34 4.5 18.67 4.5 13 0 24.5-11.5t11.5-24.65q0-5.85-3.5-13.35T548-651L405-794q-13-13-30-19.5t-34-6.5q-16.67 0-33.33 6.5-16.67 6.5-29.61 19.36L126-642q-14 14-19.5 29.5t-6.5 35q-1 19.5 7.5 38T128-506l-43 43q-20-22-32.5-53T40-579q0-30 11.5-57.5T84-685l151-151q22-22 49.79-32.5 27.8-10.5 57-10.5 29.21 0 56.71 10.5T448-836l18 18 18-18q22-22 49.79-32.5 27.8-10.5 57-10.5 29.21 0 56.71 10.5T697-836l179 179q22 22 33 50.03 11 28.04 11 57 0 28.97-11 56.47T876-444L539-107q-13 13-29.53 20t-34.41 7ZM377-626Z" />
                      </svg>{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48px"
                        viewBox="0 -960 960 960"
                        width="48px"
                        fill="#FFFFFF"
                      >
                        <path d="M440.5-500Q378-500 334-544.06 290-588.13 290-650q0-63 44.06-106.5Q378.13-800 440-800q63 0 106.5 43.5t43.5 106q0 62.5-43.5 106.5t-106 44Zm-.5-60q38 0 64-26.44T530-650q0-38-26-64t-63.5-26q-37.5 0-64 26T350-650.5q0 37.5 26.44 64T440-560ZM898-20 758-160q-23 17-47.5 23.5t-50.07 6.5q-71.01 0-120.72-49.62Q490-229.24 490-300.12t49.62-120.38q49.62-49.5 120.5-49.5t120.38 49.71Q830-370.58 830-299.57q0 25.57-6.5 50.07T800-202L940-62l-42 42ZM660-190q47 0 78.5-31.5T770-300q0-47-31.5-78.5T660-410q-47 0-78.5 31.5T550-300q0 47 31.5 78.5T660-190Zm-540 30v-94q0-37 17.5-63t50.5-43q47-23 122.5-43.5T464-419q-8 13-15 28.5T438-360q-78-1-136 18.5T212-306q-14 8-23 21.5t-9 30.5v34h258q11 17 20 31.5t20 28.5H120Zm320-490Zm-2 430Z" />
                      </svg>
                    </figure>
                  </div>
                  <div className="service-title">
                    <h4 className="service-heading4"> Transparency & Accountability</h4>
                    <p className="service-para">
                      We believe in being transparent about how we keep the
                      platform safe and secure for everyone.
                    </p>
                    <ul className="service-list">
                      <li className="service-list-item">
                        <strong>Open Support Lines</strong>: Our support team is
                        available 24/7 for any concerns.
                      </li>
                      <li className="service-list-item">
                        <strong>Incident Reporting</strong>: Report suspicious
                        activity or concerns directly through the app.
                      </li>
                    </ul>{" "}
                    <a href="pricing.html" class="service-link">
                      Read more <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section3 */}
      <section>
        <div className ="service-section">
          <div className ="service-section1">
            <h5 className ="service-title-small">Our Services</h5>
            <h2 className ="service-title">What We Do</h2>

            <div class="service-tabs">
              <div class="service-tab">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48px"
                  viewBox="0 -960 960 960"
                  width="48px"
                  fill="#FFFFFF"
                >
                  <path d="M522-82v-60q45-6 87.5-23.5T689-212l41 44q-46 38-98 59T522-82Zm269-148-43-41q27-36 45-77.5t25-89.5h61q-8 60-30.5 112.5T791-230Zm27-292q-7-48-25-89t-45-78l43-41q38 50 58 99t30 109h-61ZM437-82Q284-99 182.5-212.5T81-480q0-154 101.5-267.5T437-878v60q-128 17-212 113t-84 225q0 129 84 225t212 113v60Zm253-666q-39-27-81.5-44.5T524-818v-60q54 8 107 29t99 57l-40 44ZM480-269q-60-51-113.5-110T313-516q0-71 48.5-121.5T480-688q70 0 118.5 50.5T647-516q0 78-53.5 137T480-269Zm0-209q19 0 32-13t13-32q0-17-13-31t-32-14q-19 0-32 14t-13 31q0 19 13 32t32 13Z" />
                </svg>
                <span> Live Tracking</span>
              </div>
              <div class="service-tab">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48px"
                  viewBox="0 -960 960 960"
                  width="48px"
                  fill="#FFFFFF"
                >
                  <path d="M450-197h60v-135h135v-60H510v-135h-60v135H315v60h135v135ZM220-80q-24.75 0-42.37-17.63Q160-115.25 160-140v-434q0-24.75 17.63-42.38Q195.25-634 220-634h70v-96q0-78.85 55.61-134.42Q401.21-920 480.11-920q78.89 0 134.39 55.58Q670-808.85 670-730v96h70q24.75 0 42.38 17.62Q800-598.75 800-574v434q0 24.75-17.62 42.37Q764.75-80 740-80H220Zm0-60h520v-434H220v434Zm130-494h260v-96q0-54.17-37.88-92.08-37.88-37.92-92-37.92T388-822.08q-38 37.91-38 92.08v96ZM220-140v-434 434Z" />
                </svg>
                <span> End to End Encryption</span>
              </div>
              <div className="service-tab">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48px"
                  viewBox="0 -960 960 960"
                  width="48px"
                  fill="#FFFFFF"
                >
                  <path d="M628-559q-12.75 0-21.37-8.63Q598-576.25 598-589v-143q0-12.75 8.63-21.38Q615.25-762 628-762h15v-39.33q0-32.45 22-55.56T719-880q32 0 54 23.11t22 55.56V-762h15q12.75 0 21.38 8.62Q840-744.75 840-732v143q0 12.75-8.62 21.37Q822.75-559 810-559H628Zm49-203h85v-39q0-19.13-12.5-32.06Q737-846 720-846t-30 12.94q-13 12.93-13 32.06v39Zm118 642q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.29 12.86-32.14Q145.71-840 165-840h140q14 0 24 10t14 25l26.93 125.64Q372-665 369.5-653.5t-10.73 19.73L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.15-15 13.15-4 25.85-2l119 26q15 4 25 16.04 10 12.05 10 26.96v135q0 19.29-12.86 32.14Q814.29-120 795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z" />
                </svg>
                <span>Call-to-Action Button</span>
              </div>
            </div>

            <div className="service-content">
              <div className="service-content-left">
                <h3>Delivering Quality Web Solutions</h3>
                <p>
                  We specialize in crafting custom web solutions tailored to
                  your business needs. From website development to deployment,
                  we ensure your online presence is powerful and effective.
                </p>
              </div>
              <div className="service-content-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="148px"
                  viewBox="0 -960 960 960"
                  width="148px"
                  fill="#FFFFFF"
                >
                  <path d="M480-80q-140-35-230-162.5T160-522v-238l320-120 320 120v238q0 152-90 279.5T480-80Zm0-62q106-35 175.5-128.5T737-480H480v-335l-260 97v196q0 12 .5 20.5T223-480h257v338Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>
          &copy; 2024 RideReady. All rights reserved. For security inquiries,
          contact us at{" "}
          <a href="mailto:support@rideready.com">support@rideready.com</a>.
        </p>
      </footer>
    </>
  );
};
export default Security;
