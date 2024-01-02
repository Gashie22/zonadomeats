import React from "react";
import ProfilePic from "../Assets/maps.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div name='testimonial' className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Where Can You Find Us</h1>
        <p className="primary-text">
          We're located in Goromonzi 
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p className=" text-5xl">
          45 KM Away from Harare.
          Turnoff right from Mutangadura
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
