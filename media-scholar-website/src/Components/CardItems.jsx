import React from "react";
import "./CardItem.css";
import { Link } from "react-router-dom";

function CardItems(props) {
  return (
    <div className="card-item-container">
      <Link to={props.path} style={{ textDecoration: 'none' }}>
        <div className="card">
          <img
            className="card-image"
            src={props.src}
            alt="Profile Picture"
          ></img>
          <h2 className="card-title">{props.text}</h2>
        </div>
      </Link>
    </div>
  );
}

export default CardItems;
