import React from "react";
import Logo from "./Logo.jpg";

function Header() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div id="logo">
          <h1>
            <img src={Logo} alt="Logo" />
          </h1>

          {/* <img
            src="https://ih1.redbubble.net/image.1978973649.2797/raf,360x360,075,t,fafafa:ca443f4786.jpg"
            className="circle-img"
          /> */}
        </div>
        {/* <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Our_products">Our Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <div className="contact">
                <a href="tel:+982224444" className="contact-number">
                  +98 222 4444
                </a>
              </div>
            </li>
          </ul>
        </nav> */}
        <nav className="nav">
          <ul>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/services">Our products</a>
            </li>

            <li>
              <a href="/Contact">Contact</a>
            </li>
            <li>
              <div className="contact">
                <a href="tel:+91 8888878709" className="contact-number">
                  +91 8888878709
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <img src={Logo} alt="Logo" id="mayur" />
          </h1>

          <h2 className="your-trusted">YOUR TRUSTED</h2>
          <h1>
            Experience
            {/*Experience Home Comfort Like Never Before  */}
            <span className="highlight"> Home Comfort </span>
            <span className="partner">Like Never Before</span>
            <span className="partner1">For Home or Office</span>
          </h1>
          <a href="#quote" className="cta-button">
            GET A FREE QUOTE
          </a>
        </div>
      </section>
    </div>
  );
}

export default Header;
