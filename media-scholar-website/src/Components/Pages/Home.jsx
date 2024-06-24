import React from "react";
import Hero from "../Hero";
import "./Home.css";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <Hero text="Who Am I?" imgName="/LinkedInProfilePic.JPG"/>
      <div className="text-container">
        <h1> Hi, I am Nick Yuan</h1>
        <p>
          As of {new Date().getFullYear()}, I am a sophomore at the University
          of Maryland. I am a part of the Media, Self, and Society scholars
          program and part of the Computer, Mathematics, and Natural Sciences
          school studying <b>Computer Science</b>. I grew up in a chinese
          household, where chinese was the primary language. Growing up, I was
          always fasinated by technology, espesialy, programming so computer
          science felt almost natural for me to major in. To find out, more of
          my skills and projects regarding computer science, make sure to check
          out the resume tab! <br />
          <br />
          Asides from school, I enjoy playing basketball and playing video
          games. I like watching the NBA and playing games such as Minecraft and
          League of Legends. I also enjoy riding my bike around my local area
          and have being doing so for quite a while now.
          <br />
          <br />
          The primary purpose of this website is for my scholar program,
          however, you I saw this as a great oppurtunity to display my React JS
          skills I have adaptd and created this website myself. So navigate
          around and see the interesting tasks I have done.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;