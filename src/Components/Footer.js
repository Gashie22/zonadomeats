import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-scroll';


const Footer = () => {
  return (
    <div className="md:footer-wrapper">
    <div className="footer-section-one">
      <div className="footer-logo-container">
        <h2 className=" text-yellow-500 font-bold underline py-3 mb-2">FOLLOW US</h2>
      </div>
      <div className="footer-icons flex ">
        <BsTwitter size={30} className=" m-2 hover:cursor-pointer hover:scale-300 duration-500" />
        <FaFacebookF size={30} className="m-2 hover:cursor-pointer hover:scale-300 duration-500" />
      </div>
    </div>
    <div className="footer-section-two">
      <div className="footer-section-columns">
        <span>Call Us</span>
        <span className=" max-w-[50px] hover:border-b-2 border-yellow-500  ">Help</span>
        <span className=" max-w-[60px] hover:border-b-2 border-yellow-500">Market</span>
        <Link to="testimonial" smooth={true} duration={500}> <span className=" max-w-[90px] hover:border-b-2 border-yellow-500">Directions</span></Link>
        <Link to="work" smooth={true} duration={500}> <span className=" max-w-[80px] hover:border-b-2 border-yellow-500">Services</span></Link>
      </div>
      <div className="footer-section-columns">
        <span>263-7726-80868</span>
        <span>help@zonado.com</span>
      </div>
      <div className="footer-section-columns">
        <span className="hover:text-yellow-500">Terms & Conditions</span>
        <span className="hover:text-yellow-500">Privacy Policy</span>
      </div>
    </div>
  </div>
);
};

export default Footer;
