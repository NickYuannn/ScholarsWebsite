import React from "react";
import Footer from "../Footer";
import AssignmentVideos from "../AssignmentVideos";

function MidSemesterPodcast() {
  return (
    <div>
      <AssignmentVideos
        header="Mid Semester Podcast"
        url="/assignments/CPMS Podcast.mp4"
      />
      <Footer />
    </div>
  );
}

export default MidSemesterPodcast;
