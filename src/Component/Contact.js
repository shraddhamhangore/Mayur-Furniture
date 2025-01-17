import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [emailError, setEmailError] = useState(false);

  const handleEmailValidation = (e) => {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(email));
  };

  return (
    <div className="form-container">
      <form>
        <h2>Get in Touch</h2>
        <p>Contact Us</p>
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            className="text-input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="text-input"
            required
            onBlur={handleEmailValidation}
          />
          {emailError && (
            <span className="error-message">Valid email is required.</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Subject"
            className="text-input"
            required
          />
          <input
            type="text"
            placeholder="Phone"
            className="text-input"
            required
          />
        </div>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="send">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
