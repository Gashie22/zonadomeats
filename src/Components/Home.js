import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import RawMeat from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div name='home' className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Suppliers of Quality Meat 
          </h1>
          <p className="primary-text">
            Your go to Place for premium top Quality Meat 
            At Affordable Prices
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className=" about-section-image-container md:m-4">
        <img  className="" src={RawMeat} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
