import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css"; // Import the updated CSS file
import { MdWidthFull } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";

const Carousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRyaXZpbmd8ZW58MHx8MHx8fDA%3D",
    "https://paytmblogcdn.paytm.com/wp-content/uploads/2023/11/Blog_Paytm_Driving-Licence-Test-Questions.jpg",
    "https://img.freepik.com/free-photo/man-driving-car-from-rear-view_1359-494.jpg",
  ];

  const captions = [
    {
      title: "Find Reliable Drivers Near You",
      description:
        "Book professional drivers for your trips, no matter the destination.",
      cta: "Get Started",
    },
    {
      title: "Schedule a Driver for Your Next Trip",
      description: "Plan ahead and schedule a driver for your upcoming travel.",
      cta: "Schedule Now",
    },
    {
      title: "Track Your Driver in Real-Time",
      description:
        "Know exactly where your driver is at all times with real-time tracking.",
      cta: "Track My Driver",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // Clear the interval on unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 1000); // Duration of transition
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setIsTransitioning(false);
    }, 1000); // Duration of transition
  };

  return (
    <>
      <div className="carousel">
        <div
          className={`carousel-inner ${isTransitioning ? "transition" : ""}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
              <div className="carousel-caption-content"></div>
              <div className="carousel-caption-content">
                <p className="carousel-sub-title">RIDE BOOKING SERVICE</p>
                <h1 className="carousel-title">{captions[index].title}</h1>
                <p className="carousel-descreption">
                  {captions[index].description}
                </p>
                <div>
                  <button className="cta-button-prev">Signup</button>
                  <button className="cta-button">{captions[index].cta}</button>
                </div>
              </div>
              {/* <div className="carousel-caption">
                <h2>Slide Title {index + 1}</h2>
                <p>This is some description for Slide {index + 1}.</p>
              </div> */}
            </div>
          ))}
        </div>
        <button className="previous-btn" onClick={prevSlide}>
          &lt;
        </button>
        <button className="nxt-button" onClick={nextSlide}>
          &gt;
        </button>
      </div>

      <marquee className="announcement" behavior="scroll" direction="left">
        Get 20% off on your first ride! Book Now!
      </marquee>

      <div className="feature-cards-1">
        <h2>Explore Our Services</h2>
        <div className="card-group-1">
          <div className="card-2">
            <img
              className="card-image"
              src="https://content.jdmagicbox.com/comp/goa/i3/0832px832.x832.231217204756.l5i3/catalogue/presley-tours-and-travels-santa-cruz-goa-driver-service-agents-gl0lnwu7rp.jpg"
              alt="feature-image"
            />
            <h3>Book a Driver</h3>
            <p>
              Easily search and book a driver in your vicinity, available 24/7.
            </p>
            <Link to="/services" className="card-button">
              Learn More
            </Link>
          </div>

          <div className="card-2">
            <img
              className="card-image"
              src="https://cdn.prod.website-files.com/637d6390b70424b49c14ff1e/646d537b0bf724485c772779_driver-tracking-HERO.webp"
              alt="feature-image"
            />
            <h3>Track Your Driver</h3>
            <p>
              Use our real-time tracking to follow your driver’s location on the
              map.
            </p>
            <Link to="/services" className="card-button">
              Learn More
            </Link>
          </div>

          <div className="card-2">
            <img
              className="card-image"
              src="https://cdn.prod.website-files.com/5f108ad27d6b51595a1f549a/6021218a7ef6777e149cfc0b_secure%20payment%20method%202.jpg"
              alt="feature-image"
            />
            <h3>Secure Payments</h3>
            <p>
              Pay securely through our app and get an estimated fare before
              booking.
            </p>
            <Link to="/services" className="card-button">
              Learn More
            </Link>
          </div>
        </div>
        <h1 className="more-features-title">More Features</h1>
        <marquee
          style={{ marginLeft: "20px", marginRight: "20px", border: "1px solid black" }}
          className="marque-features"
          behavior="scroll"
          direction="right"
        >
          <div className="marque-features">
            <div className="card-1">
              <img
                className="card-image"
                src="https://firmbee.com/wp-content/uploads/Miniatura-do-wpisu-4-scaled.jpg"
                alt="feature-image"
              />
              <h3>Flexible Scheduling</h3>
              <p>
                Plan your rides in advance by scheduling a driver for a later
                time. Whether it's for a trip to the airport or a special event,
                you can book a driver at your convenience.
              </p>
              <Link to="/services" className="card-button">
                Learn More
              </Link>
            </div>

            <div className="card-1">
              <img
                className="card-image"
                src="https://cdn.24c.in/prod/autopilot/web-assets/2024/06/28/9c335c2c-77b3-4b13-8d47-21daa12d3a07-expert_driver.webp"
                alt="feature-image"
              />
              <h3>Experienced and Verified Drivers</h3>
              <p>
                Our drivers are carefully selected, with background checks and
                driving tests to ensure safety and professionalism. You can view
                driver profiles, ratings, and reviews before making your
                booking.
              </p>
              <Link to="/services" className="card-button">
                Learn More
              </Link>
            </div>

            <div className="card-1">
              <img
                className="card-image"
                src="https://simplycontact.com/wp-content/uploads/2022/09/24_7-customer-support-1024x576.jpeg"
                alt="feature-image"
              />
              <h3>24/7 Customer Support</h3>
              <p>
                Need assistance with your booking? Our customer support team is
                available 24/7 to help you with any inquiries or issues,
                ensuring a smooth experience from start to finish.
              </p>
              <Link to="/services" className="card-button">
                Learn More
              </Link>
            </div>
            <div className="card-1">
              <img
                className="card-image"
                src="https://media.gettyimages.com/id/1154420286/photo/man-entering-ride-sharing-car.jpg?s=612x612&w=0&k=20&c=I2kHUNC_Tc0YEtzBgXhN2es_I-4FmGRLaFaQUkDytSM="
                alt="feature-image"
              />
              <h3>Multiple Ride Options</h3>
              <p>
                Choose from different vehicle types based on your needs—whether
                you need a regular car, luxury vehicle, or a van for a larger
                group, we have the right driver and vehicle for you.
              </p>
              <Link to="/services" className="card-button">
                Learn More
              </Link>
            </div>
            <div className="card-1">
              <img
                className="card-image"
                src="https://img.freepik.com/free-photo/safety-first-sign-tools-arrangement_23-2149919538.jpg"
                alt="feature-image"
              />
              <h3>Safety First</h3>
              <p>
                We prioritize safety with real-time driver monitoring and the
                option to share your ride status with friends or family. Every
                ride is insured, giving you peace of mind.
              </p>
              <Link to="/services" className="card-button">
                Learn More
              </Link>
            </div>
            <div className="card-1">
              <img
                className="card-image"
                src="https://media.licdn.com/dms/image/sync/v2/D4D27AQHflDDlDAp0EA/articleshare-shrink_800/articleshare-shrink_800/0/1711549187238?e=2147483647&v=beta&t=ytiG9TKHJ1UhqkTITMwa51bKXIVJ79HZqNZ3zZT-qyU"
                alt="feature-image"
              />
              <h3>Loyalty Program</h3>
              <p>
                Earn rewards with every ride you take. Redeem points for
                discounts on future bookings or exclusive offers tailored to
                frequent customers.
              </p>
              <Link to="/services" className="card-button">
                Learn More
              </Link>
            </div>
            <div className="card-1">
              <img
                className="card-image"
                src="https://webdesigncapital.com/wp-content/uploads/2022/08/About-Us-1024x517.png"
                alt="feature-image"
              />
              <h3>Transparent Pricing</h3>
              <p>
                With no hidden charges, our pricing is upfront and clear. Get a
                detailed fare breakdown before you confirm your booking, so
                there are no surprises.
              </p>
              <Link to="/services" className="card-button">
                Learn More
              </Link>
            </div>
            <div className="card-1">
              <img
                className="card-image"
                src="https://www.shutterstock.com/image-photo/integrated-document-solutions-online-system-260nw-2352136125.jpg"
                alt="feature-image"
              />
              <h3>Seamless Ride Management</h3>
              <p>
                Manage all your bookings in one place. From modifying existing
                rides to canceling bookings, our app provides a simple and
                intuitive experience to handle all your trips.
              </p>
              <Link to="/services" className="card-button">
                Learn More
              </Link>
            </div>
            <div className="card-1">
              <img
                className="card-image"
                src="https://cdn.dribbble.com/userupload/8560068/file/original-3132a8070d88cff78f643f9048acc66d.png?resize=400x0"
                alt="feature-image"
              />
              <h3>Ride History and Invoices</h3>
              <p>
                Keep track of all your rides with a complete ride history,
                including detailed invoices for easy expense management. Perfect
                for both personal and business trips.
              </p>
              <Link to="/services" className="card-button">
                Learn More
              </Link>
            </div>
            <div className="card-1">
              <img
                className="card-image"
                src="https://fluentsupport.com/wp-content/uploads/2022/10/Popular-communication-apps-for-customer-support-min.png"
                alt="feature-image"
              />
              <h3>In-App Communication</h3>
              <p>
                Easily contact your driver through the app for any last-minute
                instructions or updates. Stay connected without sharing personal
                contact information.
              </p>
              <Link to="/services" className="card-button">
                Learn More
              </Link>
            </div>
          </div>
        </marquee>
      </div>

      <div id="aboutSection" className="about-section">
        <div className="about-header">
          <h2 className="about-title">About RideReady</h2>
          <p className="about-description">
            RideReady is designed to connect customers in need of reliable
            drivers with professional drivers looking for job opportunities.
            Whether it's for a long trip or a quick drive, we ensure a seamless
            experience for both customers and drivers.
          </p>
        </div>

        <div className="mission-section">
          <h3 className="mission-title">Our Mission</h3>
          <p className="mission-description">
            Our goal is to provide a platform where customers can easily find
            trustworthy drivers, and drivers can manage their schedules and
            earnings effectively. Transparency, safety, and customer
            satisfaction are at the core of our mission.
          </p>
        </div>

        <div className="choose-us-section">
          <h3 className="choose-us-title">Why Choose RideReady?</h3>
          <ul className="features-list">
            <li className="feature-item">Real-time driver tracking</li>
            <li className="feature-item">Affordable and transparent pricing</li>
            <li className="feature-item">Safe and secure payment processing</li>
            <li className="feature-item">Reliable customer support</li>
          </ul>
        </div>

        <div className="how-it-works-section">
          <h3 className="how-it-works-title">How RideReady Works</h3>
          <div className="steps-container">
            <div className="step">
              <h4 className="step-title">Sign Up</h4>
              <p className="step-description">
                Customers and drivers can easily create an account on RideReady.
                Whether you need a driver for a specific journey or you're a
                driver looking for work, it only takes a few minutes to get
                started.
              </p>
            </div>
            <div className="step">
              <h4 className="step-title">Book a Driver</h4>
              <p className="step-description">
                Customers can enter their location and desired destination, and
                RideReady will match them with available drivers nearby. You can
                book instantly or schedule a ride for later.
              </p>
            </div>
            <div className="step">
              <h4 className="step-title">Track Your Ride</h4>
              <p className="step-description">
                Once the booking is confirmed, customers can track their
                driver's location in real-time, ensuring peace of mind while
                waiting.
              </p>
            </div>
            <div className="step">
              <h4 className="step-title">Pay Seamlessly</h4>
              <p className="step-description">
                We offer a range of secure payment options. From credit cards to
                mobile wallets, pay the way that suits you. You'll also get an
                upfront fare estimate before booking.
              </p>
            </div>
            <div className="step">
              <h4 className="step-title">Rate Your Experience</h4>
              <p className="step-description">
                After every ride, both customers and drivers have the option to
                leave feedback. This ensures high standards and encourages
                improvement on both sides.
              </p>
            </div>
          </div>
        </div>

        <div className="driver-promise-section">
          <h3 className="driver-promise-title">Our Promise to Drivers</h3>
          <p className="driver-promise-description">
            At RideReady, we’re not just helping customers — we’re empowering
            drivers too. Our platform is designed to help drivers manage their
            work effectively while providing flexibility and control over their
            schedules.
          </p>
          <ul className="driver-features-list">
            <li className="driver-feature-item">
              <h4 className="driver-feature-title">Flexible Scheduling</h4>
              <p className="driver-feature-description">
                Drivers can accept rides based on their availability, with the
                option to plan rides in advance or take jobs as they come.
              </p>
            </li>
            <li className="driver-feature-item">
              <h4 className="driver-feature-title">Transparent Earnings</h4>
              <p className="driver-feature-description">
                We believe in complete transparency. Drivers can see how much
                they'll earn from each ride before accepting the booking. We
                also provide tools to track earnings over time and manage
                payouts seamlessly.
              </p>
            </li>
            <li className="driver-feature-item">
              <h4 className="driver-feature-title">Driver Safety</h4>
              <p className="driver-feature-description">
                We prioritize the safety of our drivers by ensuring that all
                customers are verified and providing features like in-app GPS
                tracking and support in case of emergencies.
              </p>
            </li>
          </ul>
        </div>

        <div className="key-features-section">
          <h3 className="key-features-title">Key Features You’ll Love</h3>
          <ul className="key-features-list">
            <li className="key-feature-item">24/7 Availability</li>
            <li className="key-feature-item">Pre-booked or On-Demand rides</li>
            <li className="key-feature-item">Insurance Coverage</li>
            <li className="key-feature-item">Multi-language Support</li>
            <li className="key-feature-item">Customer-Driver Matchmaking</li>
          </ul>
        </div>

        <div className="testimonials-section">
          <h3 className="testimonials-title">Testimonials</h3>
          <div className="testimonial">
            <p className="testimonial-text">
              "RideReady made my daily commute so much easier! I can rely on
              them to get me where I need to be, and the drivers are always
              friendly and professional."
            </p>
            <span className="testimonial-author">
              — Emma R., RideReady Customer
            </span>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">
              "As a driver, RideReady gives me the flexibility I need to manage
              my time and earnings. The platform is transparent and easy to
              use."
            </p>
            <span className="testimonial-author">
              — John K., RideReady Driver
            </span>
          </div>
        </div>

        <div className="call-to-action-section">
          <h3 className="call-to-action-title">Get Started Today!</h3>
          <p className="call-to-action-description">
            Whether you’re a customer looking for a driver or a driver ready to
            hit the road, RideReady is the perfect solution. Join us today for a
            safe, reliable, and hassle-free ride experience!
          </p>
        </div>
      </div>

      <div className="announcement-container">
        <div className="offer-section">
          <h2>Special Offers</h2>
          <div className="offer-cards">
            <div className="offer-card">
              <h3>First Ride Free</h3>
              <p>Sign up today and enjoy your first ride on us!</p>
            </div>
            <div className="offer-card">
              <h3>Refer a Friend</h3>
              <p>
                Get $10 credit when you refer a friend and they complete their
                first ride.
              </p>
            </div>
            <div className="offer-card">
              <h3>Loyalty Program</h3>
              <p>
                Earn points with every ride and redeem them for discounts and
                exclusive rewards.
              </p>
            </div>
          </div>
        </div>

        <div className="testimonial-section">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p>
                "RideReady helped me find a driver for my car when I was stuck
                in the city. Amazing service!"
              </p>
              <span>- Sarah, New York</span>
            </div>
            <div className="testimonial-card">
              <p>
                "Booking a driver has never been easier! The app is seamless,
                and the drivers are top-notch."
              </p>
              <span>- John, Los Angeles</span>
            </div>
            <div className="testimonial-card">
              <p>
                "I use RideReady every time I travel. It’s reliable, and I
                always get the best drivers."
              </p>
              <span>- Emily, Chicago</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:"black", color: "white"}} className="page-footer">
        <p className="contact-us">Contact Us</p>
        <p className="contact-us">© {new Date().getFullYear()} All rights reserved to <a target="_blank" href="https://beedatatech.com">BeedataTech.com</a></p>
        <div>
        <a style={{color: "white"}} target="_blank" href="https://www.facebook.com/profile.php?id=61567807704128"><SlSocialFacebook className="social-icon" /></a>
        <SlSocialInstagram className="social-icon" />
        <a style={{color: "white"}} target="_blank" href="https://x.com/Rideready2024"><TiSocialTwitter className="social-icon" /></a>
        <a style={{color: "white"}} target="_blank" href="https://www.linkedin.com/in/rideready-beedata-98bb91334/"><TiSocialLinkedin className="social-icon" /></a>
          <SlSocialGoogle className="social-icon" />
        </div>
      </div>
    </>
  );
};

export default Carousel;
