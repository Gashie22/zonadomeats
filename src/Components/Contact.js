import React from "react";
import { useState } from 'react';



const Contact = () => {

  return (

    <div name='contact' className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <form action="">
        <div className="contact-form-container">
          <input type="text" placeholder="yourmail@gmail.com" />
          <button className="secondary-button">Submit</button>
        </div>
      </form>
     
    </div>
  );
};

export default Contact;
