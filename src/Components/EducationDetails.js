import React, { useContext } from "react";
import educationDetails from "../css/educationDetails.css";
import { multiStepContext } from "./StepContext";

function EducationDetails() {
  const { setCurrentStep, edu, setEdu } = useContext(multiStepContext);

  return (
    <div className="outer-div2">
      <div className="education">
        <div>
          <h3 style={{ color: "rgb(255, 0, 81)" }}>Education Details</h3>
        </div>
        <div className="inputs">
          <div className="univIp">
            <label>University / College</label>
            <input
              type="text"
              id="univ-name"
              placeholder="University / College Name"
              value={edu["univ_clg"]}
              onChange={(e) => setEdu({ ...edu, univ_clg: e.target.value })}
            />
          </div>
          <div className="locIp">
            <label>Current Location</label>
            <input
              type="text"
              id="loc"
              placeholder="Current Location"
              value={edu["curr_loc"]}
              onChange={(e) => setEdu({ ...edu, curr_loc: e.target.value })}
            />
          </div>
          <div className="qualIp">
            <label>Highest Qualification</label>
            <input
              type="text"
              id="qual"
              placeholder="Highest Qualification"
              value={edu["qualification"]}
              onChange={(e) =>
                setEdu({ ...edu, qualification: e.target.value })
              }
            />
          </div>
          <div className="specIp">
            <label>Specialization</label>
            <input
              type="text"
              id="spec"
              placeholder="Specialization"
              value={edu["specialization"]}
              onChange={(e) =>
                setEdu({ ...edu, specialization: e.target.value })
              }
            />
          </div>
          <div className="cgpaIp">
            <label>CGPA / Percentage</label>
            <input
              type="text"
              id="cgpa"
              placeholder="CGPA / Percentage"
              value={edu["percentage"]}
              onChange={(e) => setEdu({ ...edu, percentage: e.target.value })}
            />
          </div>
          <div className="yopIp">
            <label>Passout Year</label>
            <input
              type="text"
              id="yop"
              placeholder="Passout Year"
              value={edu["yop"]}
              onChange={(e) => setEdu({ ...edu, yop: e.target.value })}
            />
          </div>
        </div>
        <div className="buttons2">
          <button id="back" onClick={() => setCurrentStep(1)}>
            Back
          </button>
          <button id="next" onClick={() => setCurrentStep(3)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default EducationDetails;
