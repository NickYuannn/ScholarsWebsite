import React from "react";
import Footer from "../Footer";
import AssignmentVideos from "../AssignmentVideos";
import ReactPlayer from "react-player";

function ThreeTipsForFreshman() {
  return (
    <div>
      <AssignmentVideos
        header="3 Tips For Incoming Freshman"
        url="/assignments/3tipsvideo.mp4"
      />
      <Footer />
    </div>
  );
}

export default ThreeTipsForFreshman;
