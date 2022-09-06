import React, { useContext, useState } from "react";
import { multiStepContext } from "./StepContext";
import projectDetails from "../css/projectDetails.css";
function ProjectDetails() {
  const { setCurrentStep, prjt, setPrjt } = useContext(multiStepContext);
  let [doe_disable, setTick] = useState(false);

  const tickChange = () => {
    setTick(!doe_disable);
    setPrjt({ ...prjt, prjt_doe: "Present" });
  };
  return (
    <div className="outer-div4">
      <div className="project">
        <div className="prjt-content">
          <div>
            <h3 style={{ color: "rgb(255, 0, 81)" }}>Project Details</h3>
          </div>
          <div className="inputs">
            <div className="prjtNameIp">
              <label>Project Name</label>
              <input
                type="text"
                id="prjt-name"
                placeholder="Project Name"
                value={prjt["prjt_name"]}
                onChange={(e) =>
                  setPrjt({ ...prjt, prjt_name: e.target.value })
                }
              />
            </div>
            <div className="compNmIp">
              <label>Company Name</label>
              <input
                type="text"
                id="comp-nm"
                placeholder="Company Name"
                value={prjt["comp_nm"]}
                onChange={(e) => setPrjt({ ...prjt, comp_nm: e.target.value })}
              />
            </div>

            <div className="dosIp">
              <label>Date of Start</label>
              <input
                type="date"
                id="dos"
                placeholder="Date of Start"
                value={prjt["prjt_dos"]}
                onChange={(e) => setPrjt({ ...prjt, prjt_dos: e.target.value })}
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
                <label>Date of End</label>
                <input
                  type="date"
                  id="doe"
                  disabled
                  placeholder="Date of End"
                />
              </div>
            ) : (
              <div className="doeIp">
                <label>Date of End</label>
                <input
                  type="date"
                  id="doe"
                  placeholder="Date of End"
                  value={prjt["prjt_doe"]}
                  onChange={(e) =>
                    setPrjt({ ...prjt, prjt_doe: e.target.value })
                  }
                />
              </div>
            )}
          </div>
          <div className="desc4">
            <div>
              <label>Code URL</label>
              <input
                type="url"
                id="code"
                placeholder="Code URL"
                value={prjt["prjt_code"]}
                onChange={(e) =>
                  setPrjt({ ...prjt, prjt_code: e.target.value })
                }
              />
            </div>

            <div>
              <label>Hosted Link</label>
              <input
                type="url"
                id="host-link"
                placeholder="Hosted Link"
                value={prjt["prjt_host"]}
                onChange={(e) =>
                  setPrjt({ ...prjt, prjt_host: e.target.value })
                }
              />
            </div>
            <div className="aboutPrjtIp">
              <label>Description</label>
              <textarea
                id="prjt-desc"
                placeholder="About Your Project"
                value={prjt["prjt_desc"]}
                onChange={(e) =>
                  setPrjt({ ...prjt, prjt_desc: e.target.value })
                }
              ></textarea>
            </div>
          </div>
        </div>
        {/* <button>Add Another</button> */}
        <div>
          <div className="buttons4">
            <button id="back" onClick={() => setCurrentStep(3)}>
              Back
            </button>
            <button id="next" onClick={() => setCurrentStep(5)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
