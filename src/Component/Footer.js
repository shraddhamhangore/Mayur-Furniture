import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Contact Section */}
        <div className="footer-section logo-contact">
          <div className="logo">
            {/* <span className="logo-icon">
              <i className="fas fa-paint-roller"></i>
            </span> */}
            <h3 className="logo-text">Contacts</h3>
          </div>
          <ul className="contact-info">
            <li>
              <i className="fas fa-phone"></i> +91 8888878709
            </li>
            <li>
              <i className="fas fa-envelope"></i> mayurfurniture10@gmail.com
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> Kurul, road, near
              Bhosale super Market, Kamti Bk, Maharashtra 413253
            </li>
          </ul>
        </div>

        {/* Essential Links Section */}
        <div className="footer-section">
          <h4>Essential Links</h4>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#design">Product Design</a>
            </li>
            <li>
              <a href="#research">Research</a>
            </li>
            <li>
              <a href="#management">Office Management</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h4> Our Social Handles </h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            {/* <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a> */}
            {/* <a href="#" aria-label="Google">
              <i className="fab fa-google"></i>
            </a> */}
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div class="newsleter mt-20">
            <input type="email" placeholder="info@contact.com" />
            <button>
              <i class="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
