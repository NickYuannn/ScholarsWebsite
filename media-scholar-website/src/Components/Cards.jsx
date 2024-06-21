import React from "react";
import "./Cards.css";
import CardItems from "./CardItems";

function Cards() {
  return (
    <div className="cards">
      <h1>Check Out What I've Done</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <CardItems
            src="/assignments/mediaconnect12023.PNG"
            text="Media Connect 1"
            path="/media-connect-1"
          />

          <CardItems
            src="/assignments/mediaconnect22023.PNG"
            text="Media Connect 2"
            path="/media-connect-1"
          />

          <CardItems
            src="/assignments/springmediaconnect.PNG"
            text="Spring Media Connect"
            path="/spring-media-connect"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
