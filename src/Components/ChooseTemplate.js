import React, { useContext } from "react";
import chooseTemplate from "../css/chooseTemplate.css";
import resume1 from "../images/resume1.jpg";
import resume2 from "../images/resume2.jpg";
import resume3 from "../images/resume3.jpg";
import resume4 from "../images/resume4.jpg";
import { multiStepContext } from "./StepContext";

function ChooseTemplate() {
  const { setCurrentStep } = useContext(multiStepContext);

  return (
    <div className="outer-div6">
      <h2 style={{ color: "rgb(255, 0, 81)" }}>Choose a Template</h2>
      <div className="inner-div">
        <div className="box">
          <span style={{ "--i": 1 }}>
            <img
              className="template"
              src={resume1}
              alt="resume 1"
              onClick={() =>
                alert(
                  "This template is under construction. Choose other template"
                )
              }
            />
          </span>
          <span style={{ "--i": 2 }}>
            <img
              className="template"
              src={resume2}
              alt="resume 2"
              onClick={() =>
                alert(
                  "This template is under construction. Choose other template"
                )
              }
            />
          </span>
          <span style={{ "--i": 3 }}>
            <img
              className="template"
              src={resume3}
              alt="resume 3"
              onClick={() =>
                alert(
                  "This template is under construction. Choose other template"
                )
              }
            />
          </span>
          <span style={{ "--i": 4 }}>
            <img
              className="template"
              src={resume4}
              alt="resume 4"
              onClick={() => setCurrentStep(7)}
            />
          </span>
        </div>
      </div>
      <div className="chooseTemp">
        <button id="back" onClick={() => setCurrentStep(5)}>
          Back
        </button>
      </div>
    </div>
  );
}

export default ChooseTemplate;
