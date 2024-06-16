import React from "react";
import "./Hero.css";

function Hero(props) {
  return (
    <div className="hero-container">
      <img className="hero-pic" src={props.imgName} />
      <h1>Who Am I?</h1>
    </div>
  );
}

export default Hero;
