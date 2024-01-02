import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Restuarants",
      text: "We Can Supply Our Products to Restuarants, Hotels and Coperates Businesses at a Very Affordable Price.",
    },
    {
      image: ChooseMeals,
      title: "Order",
      text: "You Can Order And Pay Online Any Desired Produce Instantly ",
    },
    {
      image: DeliveryMeals,
      title: "Deliveries",
      text: "We can Deliver all Around Zimbabwe Wherever You Are",
    },
  ];
  return (
    <div name='work' className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Our Services</h1>
        <p className="primary-tex
        t">
          We Provide Quality Meat and Vegetables all across Zimbabwe.
          Distance is not a Barrier
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
