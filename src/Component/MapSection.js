import React from "react";

const MapSection = () => {
  return (
    <section id="map" className="map-area">
      <div className="map-container">
        <div className="map">
          <iframe
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.9461467718625!2d75.70138441068201!3d17.64104939537855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc42d112fcdb6d5%3A0x76cfca83ae3791dd!2sMayur%20furniture%20and%20electronics!5e1!3m2!1sen!2sin!4v1737041773306!5m2!1sen!2sin"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title="Google Map"
          ></iframe>
        </div>
        <div className="map-bg">
          <img
            src="https://c7.alamy.com/comp/KTEXRC/a-furniture-store-interior-lanzarote-canary-islands-spain-KTEXRC.jpg"
            alt="Map Background"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
