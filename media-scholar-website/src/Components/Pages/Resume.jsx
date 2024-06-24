import React from "react";
import Footer from "../Footer";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <h2>Nick Yuan</h2>
      <p> nk.yuan2005@gmail.com▪ GitHub▪Rockville, Maryland▪LinkedIn </p>
      <hr />
      <h2>
        <u>Education</u>
      </h2>
      <h4>
        <b>University of Maryland, College Park </b>
      </h4>
      <p>Maryland, College Park</p>

      <p>College Park Scholar: Media, Self, Society</p>
      <p>Major: Computer Science</p>
      <p>Expected Graduation Date: December, 2026</p>
      <p>
        <b>Relevant Coursework: </b>
      </p>
      <ul>
        <li>Object-Oriented Programming I and II </li>
        <li>Linear Algebra, Discrete Structures, Calculus I and II</li>
      </ul>
      <hr />
      <h2>
        <u>Projects</u>
      </h2>

      <p>
        <b>Media Scholar Personal Website</b> <i>- React Program</i>
      </p>
      <ul>
        <li>
          Converted personal website made from google sites and recreated with
          react to showcase assignments and information about my personal life
        </li>
        <li>
          Designed a user interface made for easy navigation and is aethesically
          pleasing
        </li>
      </ul>
      <p>
        <b>Skincare Routine Maker</b> <i>- JavaFX Program</i>
      </p>
      <ul>
        <li>
          Addressed an issue that my client had and discussed how an app could
          reduce their inconveniences
        </li>
        <li>
          Designed a Java program that allows multiple users to create unique
          accounts that help organize skincare products, routines, schedules,
          and desired items, and track their skin progress{" "}
        </li>
        <li>
          Engaged in multiple meetings with my client to make sure the app was
          designed to function the way the client requested
        </li>
      </ul>
      <p>
        <b>Password Maker</b> <i>- JavaFX Program</i>
      </p>
      <ul id="ul1">
        <li>
          Created a JavaFX program that creates a password based on the user’s
          requirements
        </li>
        <li>
          Addressed the issue of making passwords for different websites and
          programs
        </li>
        <li>
          Implemented error catching if the user incorrectly inputs values or
          requirements that are not possible to meet
        </li>
      </ul>
      <p>
        <b>Tic Tac Toe</b> <i>- JavaFX Program</i>
      </p>
      <ul id="ul1">
        <li>
          Designed the Tic Tac Toe game that recaps the moves for the user
        </li>
        <li>Allows the user to play against the computer or another player </li>
        <li>Enables replayability for the user with convenient UI</li>
      </ul>
      <hr />
      <h2> Technical Skills</h2>
      <p>
        <u>Programming Languages</u>
      </p>
      <ul>
        <li>Java</li>
        <li>HTML/CSS</li>
        <li>JSX (Exposure) </li>
      </ul>
      <p>
        <u>Skills</u>
      </p>
      <ul>
        <li>App Development</li>
        <li>Web Development</li>
      </ul>
      <p>
        <u>Tools</u>
      </p>
      <ul>
        <li>React/Vite</li>
        <li>Eclipse</li>
        <li>IntelliJ</li>
        <li>VSCode</li>
        <li>Matlab</li>
        <li>Scene Builder</li>
      </ul>

      <Footer />
    </div>
  );
}

export default Resume;
