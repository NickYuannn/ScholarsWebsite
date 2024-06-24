import React, { useState } from "react";
import "./AssignmentPages.css";

function AssignmentPages(props) {
  const [images, setImages] = useState(props.imgs);

  return (
    <div className="assignment-container">
      <h1> {props.head} </h1>
      <div className="images-container">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <div className="text-container">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default AssignmentPages;
