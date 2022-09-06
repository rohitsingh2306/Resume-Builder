import React, { useContext } from "react";
import resume3 from "../images/resume3.jpg";
import home from "../css/home.css";
import { multiStepContext } from "./StepContext";
import Form from "./Form";

function Home() {
  const { setCurrentStep } = useContext(multiStepContext);
  return (
    <div className="container">
      <div className="left-section">
        <p>
          <h1>Welcome to IsRoDesigns!!</h1>
          Here we are not dealing with rockets but we have something better for
          you which can land you a job in real ISRO (kidding).
          <br />
          Go ahead and build your perfect resume with our amazing templates
          (taken from google images obviously).
          <br />
          Apart from jokes, wishing you All the very best for your future and
          Get your
          <span> Dream Job</span> in your Dream Company.
          <h1>How it works?</h1>
          <ol>
            <li>Fill in the details</li>
            <li>Pick a template</li>
            <li>Download your Resume</li>
          </ol>
        </p>
      </div>
      <div className="right-section">
        <img className="resume-img" src={resume3} alt="resume3" />
        <div className="footer">
          <p>Create Your resume</p>
          <button onClick={() => setCurrentStep(1)}>Go</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
