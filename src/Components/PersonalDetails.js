import React, { useContext } from "react";
import personalDetails from "../css/personalDetails.css";
import { multiStepContext } from "./StepContext";
function PersonalDetails() {
  const { setCurrentStep, personal, setPersonal } =
    useContext(multiStepContext);

  return (
    <div className="outer-div1">
      <div className="personal">
        <div>
          <h3 style={{ color: "rgb(255, 0, 81)" }}>Personal Details</h3>
        </div>
        <div className="inputs">
          <div className="nameIp">
            <label>Full Name</label>
            <input
              type="text"
              required
              id="full-name"
              placeholder="Full Name"
              value={personal["full_name"]}
              onChange={(e) =>
                setPersonal({ ...personal, full_name: e.target.value })
              }
            />
          </div>
          <div className="emailIp">
            <label>Email</label>
            <input
              type="email"
              required
              id="email"
              placeholder="Email"
              value={personal["email"]}
              onChange={(e) =>
                setPersonal({ ...personal, email: e.target.value })
              }
            />
          </div>
          <div className="phoneIp">
            <label>Phone Number</label>
            <input
              type="phone"
              required
              id="phone-no"
              placeholder="Phone Number"
              value={personal["phone_no"]}
              onChange={(e) =>
                setPersonal({ ...personal, phone_no: e.target.value })
              }
            />
          </div>
          <div className="dobIp">
            <label>Date of Birth</label>
            <input
              type="date"
              required
              id="dob"
              placeholder="Date of Birth"
              value={personal["dob"]}
              onChange={(e) =>
                setPersonal({ ...personal, dob: e.target.value })
              }
            />
          </div>
        </div>
        <div className="desc">
          <div className="imgIp">
            <label>Profile Picture URL</label>
            <input
              type="url"
              required
              placeholder="LinkedIn, GitHub Profile URL"
              value={personal["profile_url"]}
              onChange={(e) =>
                setPersonal({ ...personal, profile_url: e.target.value })
              }
            />
          </div>
          <div className="aboutIp">
            <label>Describe about yourself</label>
            <textarea
              required
              placeholder="About Yourself"
              defaultValue={personal["about"]}
              onChange={(e) =>
                setPersonal({ ...personal, about: e.target.value })
              }
            ></textarea>
          </div>
        </div>
        <div className="buttons1">
          <div></div>
          <input
            type="submit"
            id="next"
            value="Next"
            onClick={() => setCurrentStep(2)}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
