import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Assignments from "./Components/Pages/Assignments";
import Resume from "./Components/Pages/Resume";
import MediaConnect1 from "./Components/Pages/MediaConnect1";
import MediaConnect2 from "./Components/Pages/MediaConnect2";
import SpringMediaConnect from "./Components/Pages/SpringMediaConnect";
import MidSemesterPodcast from "./Components/Pages/MidSemesterPodcast";
import ThreeTipsForFreshman from "./Components/Pages/ThreeTipsForFreshman";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/assignments" exact Component={Assignments} />
          <Route path="/resume" exact Component={Resume} />
          <Route path="/media-connect-1" exact Component={MediaConnect1} />
          <Route path="/media-connect-2" exact Component={MediaConnect2} />
          <Route
            path="/spring-media-connect"
            exact
            Component={SpringMediaConnect}
          />
          <Route
            path="/mid-semester-podcast"
            exact
            Component={MidSemesterPodcast}
          />
          <Route
            path="/three-tips-for-freshman"
            exact
            Component={ThreeTipsForFreshman}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
