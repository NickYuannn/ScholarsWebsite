import React from "react";
import "./Hero.css";

function Hero(props) {
  return (
    <div className="hero-container">
      <img src={props.imgName} />
      <h1>Who Am I?</h1>
    </div>
  );
}

export default Hero;