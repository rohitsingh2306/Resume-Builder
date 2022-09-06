import React, { useContext, useState } from "react";
import experienceDetails from "../css/experienceDetails.css";
import { multiStepContext } from "./StepContext";

function ExperienceDetails() {
  const { setCurrentStep, exp, setExp } = useContext(multiStepContext);
  let [doe_disable, setTick] = useState(false);

  const tickChange = () => {
    setTick(!doe_disable);
    setExp({ ...exp, comp_doe: "Present" });
  };

  return (
    <div className="outer-div3">
      <div className="experience">
        <div className="exp-content">
          <div>
            <h3 style={{ color: "rgb(255, 0, 81)" }}>Experience Details</h3>
          </div>
          <div className="inputs">
            <div className="companyIp">
              <label>Company Name</label>
              <input
                type="text"
                id="comp-name"
                placeholder="Company Name"
                value={exp["comp_name"]}
                onChange={(e) => setExp({ ...exp, comp_name: e.target.value })}
              />
            </div>
            <div className="desIp">
              <label>Designation</label>
              <input
                type="text"
                id="des"
                placeholder="Designation"
                value={exp["designation"]}
                onChange={(e) =>
                  setExp({ ...exp, designation: e.target.value })
                }
              />
            </div>

            <div className="dojIp">
              <label>Date of Joinig</label>
              <input
                type="date"
                id="doj"
                placeholder="Date of Joining"
                value={exp["comp_doj"]}
                onChange={(e) => setExp({ ...exp, comp_doj: e.target.value })}
              />
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="check"
                  checked={doe_disable}
                  onChange={tickChange}
                />
                <label>Present</label>
              </div>
            </div>
            {doe_disable ? (
              <div className="doeIp">
                <label>Date of Ending</label>
                <input
                  type="date"
                  id="exp-doe"
                  placeholder="Date of Ending"
                  disabled
                />
              </div>
            ) : (
              <div className="doeIp">
                <label>Date of Ending</label>
                <input
                  type="date"
                  id="exp-doe"
                  placeholder="Date of Ending"
                  value={exp["comp_doe"]}
                  onChange={(e) => setExp({ ...exp, comp_doe: e.target.value })}
                />
              </div>
            )}
          </div>

          <div className="desc3">
            <div className="jobIp">
              <label>Job Type</label>
              <select>
                <option disabled>Select Job Type</option>
                <option>Intern</option>
                <option>Part Time</option>
                <option>Full Time</option>
              </select>
            </div>
            <div className="aboutJobIp">
              <label>Description</label>
              <textarea
                id="job-desc"
                placeholder="About Your Experience"
                value={exp["comp_description"]}
                onChange={(e) =>
                  setExp({ ...exp, comp_description: e.target.value })
                }
              ></textarea>
            </div>
          </div>
        </div>
        <div>
          <div className="buttons3">
            <button id="back" onClick={() => setCurrentStep(2)}>
              Back
            </button>
            <button id="next" onClick={() => setCurrentStep(4)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetails;
