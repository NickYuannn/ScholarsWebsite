import React from "react";
import ReactPlayer from "react-player";
import "./AssignmentVideos.css";

function AssignmentVideos(props) {
  return (
    <div className="assignment-vid-container">
      <h1>{props.header}</h1>
        <ReactPlayer url={props.url} controls />
    </div>
  );
}

export default AssignmentVideos;
