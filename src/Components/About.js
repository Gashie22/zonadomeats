import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div name='about' className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          We Also Supply Fresh Vegetables
        </h1>
        <p className="primary-text">
          We have a Wide Range of Vegitables Fresh 
        </p>
        <p className="primary-text">
          Carrots Onions Tomatoes and many Varieties
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">See More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
