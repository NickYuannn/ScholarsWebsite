import React from "react";
import "./Cards.css";
import CardItems from "./CardItems";

function Cards() {
  return (
    <div className="cards">
      <h1>Check Out What I've Done</h1>
      <h3>In CPMS</h3>
      <div className="cards-container">

          <CardItems
            src="/assignments/mediaconnect12023.PNG"
            text="Media Connect 1"
            path="/media-connect-1"
          />

          <CardItems
            src="/assignments/mediaconnect22023.PNG"
            text="Media Connect 2"
            path="/media-connect-2"
          />

          <CardItems
            src="/assignments/springmediaconnect.PNG"
            text="Spring Media Connect"
            path="/spring-media-connect"
          />

          <CardItems
            src="/assignments/midsemesterpodcast.PNG"
            text="Mid Semester Podcast"
            path="/mid-semester-podcast"
          />
          <CardItems
            src="/assignments/3things.PNG"
            text="3 Things for Freshman to Know"
            path="/three-tips-for-freshman"
          />
      </div>
    </div>
  );
}

export default Cards;
