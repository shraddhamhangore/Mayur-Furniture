import React, { useState } from "react";
import "./about.css";
import Temple2 from "../Assets/Temple2.jpg";
import Cupboard from "../Assets/Cupboard.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const About = () => {
  const [showMore, setShowMore] = useState(false); // State to toggle the hidden portion

  const handleLearnMore = () => {
    setShowMore((prevState) => !prevState); // Toggle the visibility
  };

  return (
    <section id="about" className="about-area pt-80 pb-130">
      <div className="container">
        {/* Section Title */}
        <h1 className="about-welcome">About Us</h1>
        <div className="row align-items-center">
          {/* Left Side: Images */}
          <div className="col-lg-6">
            <div className="about-image mt-50 d-flex flex-wrap justify-content-between">
              {/* First Image */}
              <div className="single-image">
                {/* <img
                  src="https://bonito.in/wp-content/uploads/2024/02/feature-2.jpg"
                  alt="About Us"
                  className="rounded "
                /> */}
                <img src={Temple2} alt="About Us" className="rounded " />
              </div>
              {/* Second Image */}
              <div className="single-image">
                {/* <img
                  src="https://images-cdn.ubuy.co.in/65666b338f138310c12993a5-mainstays-10-x-10-easy-assembly-outdoor.jpg"
                  alt="About Us"
                  className="rounded-img"
                /> */}
                <img src={Cupboard} alt="About Us" className="rounded-img" />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="col-lg-6 d-flex align-items-center">
            <div className="about-content">
              {/* Title */}
              <h3 className="about-title">Reasons to Choose Us</h3>
              {/* Description */}
              <p>
                Welcome to Mayur Furniture, your trusted destination for premium
                furniture and home décor solutions in Kamti, Solapur. Since our
                inception, we have been dedicated to offering our customers an
                extensive range of high-quality, stylish, and durable furniture
                designed to elevate your living and working spaces.
              </p>
              <p>
                At Mayur Furniture, we believe that furniture is more than just
                functionality; it’s about crafting spaces that reflect your
                personality and style. Our curated collection includes modern
                and traditional designs, ensuring that we meet the diverse
                tastes and needs of our valued customers.
              </p>
              {/* Learn More Button */}
              <button
                className="main-btn mt-25"
                onClick={handleLearnMore}
                style={{ cursor: "pointer" }}
              >
                {showMore ? "Show Less" : "Learn More"}
              </button>
              {/* Hidden Portion */}
              {showMore && (
                <div className="hidden-content mt-20">
                  <p>
                    Our dedication to quality, affordable pricing, and
                    exceptional customer service has made us a household name in
                    the furniture industry. From cozy sofas and elegant dining
                    tables to functional office furniture and decorative
                    accents, we’ve got everything you need to transform your
                    space.
                  </p>
                  <p>
                    Visit us today and let us help you create a home or
                    workspace that you’ll love for years to come.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

