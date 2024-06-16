import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";

function App() {
  document.title = "Nick Yuan";

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
