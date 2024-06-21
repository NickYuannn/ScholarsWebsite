import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Assignments from "./Components/Pages/Assignments";
import Resume from "./Components/Pages/Resume";

function App() {
  document.title = "Nick Yuan";

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/assignments" exact Component={Assignments} />
          <Route path="/resume" exact Component={Resume} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
