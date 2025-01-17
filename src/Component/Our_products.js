import React, { useState, useEffect } from "react";
import Beds from "../Assets/Beds.jpg";
import Modern_bedroom from "../Assets/Modern_bedroom.jpg"; 
import Sofa from "../Assets/Sofa.jpg";
import Freez from "../Assets/Freez.jpg";
import Sofa2 from "../Assets/Sofa2.jpg";
import Chair from "../Assets/Chair.jpg";
import Sofa3 from "../Assets/Sofa3.jpg";
import Temple from "../Assets/Temple.jpg";
import Temple2 from "../Assets/Temple2.jpg";


// src\Assets\Freez.jpg
const Our_products = () => {
  const projects = [
    { id: 1, img: Beds, alt: "Modern Bedroom" },
    // { id: 2, img: Freez, alt: "Cooler" },
    // { id: 3, img: Modern_bedroom, alt: "Living Room with Sofa" },
    { id: 4, img: Sofa, alt: "Child’s Room" },
    // { id: 5, img: Almari, alt: "Fireplace and Cozy Interior" },
    { id: 6, img: Sofa2, alt: "Child’s Room" },
    { id: 6, img: Sofa3, alt: "Child’s Room" },
    // { id: 6, img: Temple, alt: "Child’s Room" },
    // { id: 6, img: Temple2, alt: "Child’s Room" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="App">
      <h2 className="section-title">FEATURED WORKS</h2>
      <h1 className="section-heading">PRODUCTS YOU MAY LOVE</h1>
      <div className="projects-gallery">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${index === activeIndex ? "active" : ""}`}
          >
            <img
              src={project.img}
              alt={project.alt}
              className="project-image"
            />
          </div>
        ))}
      </div>

      <div className="carousel-indicators">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Our_products;
