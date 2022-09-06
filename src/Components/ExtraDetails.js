import React, { useState, useContext } from "react";
import { multiStepContext } from "./StepContext";
import extraDetails from "../css/extraDetails.css";

function ExtraDetails() {
  const {
    setCurrentStep,
    extra,
    setExtra,
    skills,
    setSkills,
    langs,
    setLangs,
  } = useContext(multiStepContext);

  /* skills */

  const [ans, setAns] = useState("");
  const [lists, setLists] = useState();
  const changeHandler = (e) => {
    const addedSkill = {
      id: Math.floor(Math.random() * 10000),
      text: e.target.value,
    };
    setAns(e.target.value);
    setLists(addedSkill);
  };
  const changeClick = () => {
    if (ans !== "") {
      const addedSkill = {
        id: null,
        text: "",
      };
      setAns("");
      setLists(addedSkill);
      setSkills((prev) => [...prev, lists]);
    }
  };
  const deleteList = (id) => {
    const newSkills = skills.filter((skill) => skill.id !== id);
    setSkills(newSkills);
  };
  /* languages */
  const [ans1, setAns1] = useState("");
  const [lists1, setLists1] = useState();

  const changeHandler1 = (e) => {
    const addedLang = {
      id: Math.floor(Math.random() * 10000),
      text: e.target.value,
    };
    setAns1(e.target.value);
    setLists1(addedLang);
  };
  const changeClick1 = () => {
    if (ans1 !== "") {
      setLangs((prev) => [...prev, lists1]);

      const addedLang = {
        id: null,
        text: "",
      };
      setAns1("");
      setLists1(addedLang);
    }
  };
  const deleteList1 = (id) => {
    const newLangs = langs.filter((lang) => lang.id !== id);
    setLangs(newLangs);
  };
  return (
    <div className="outer-div5">
      <div className="extra">
        <div>
          <h3 style={{ color: "rgb(255, 0, 81)" }}>Extra Details</h3>
        </div>
        <div className="desc5">
          <div className="skillIp">
            <label>Skills</label>
            <div className="input-skill">
              <div className="add-skill">
                <input
                  type="text"
                  id="skills"
                  placeholder="Skill"
                  value={ans}
                  onChange={changeHandler}
                />
                <button onClick={changeClick} className="add-btn">
                  Add
                </button>
              </div>
              <ul className="lists">
                {skills.map((skill) => (
                  <li className="item" key={skill.id}>
                    {skill.text}
                    <button
                      className="del-btn"
                      onClick={() => deleteList(skill.id)}
                    >
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="achievementIp">
            <label>Achievements</label>
            <textarea
              id="achievement-desc"
              placeholder="Achievement"
              value={extra["achievements"]}
              onChange={(e) =>
                setExtra({ ...extra, achievements: e.target.value })
              }
            ></textarea>
          </div>
          <div className="skillIp">
            <label>Languages</label>
            <div className="input-skill">
              <div className="add-skill">
                <input
                  type="text"
                  id="language"
                  placeholder="Language"
                  value={ans1}
                  onChange={changeHandler1}
                />
                <button onClick={changeClick1} className="add-btn">
                  Add
                </button>
              </div>
              <ul className="lists">
                {langs.map((lang) => (
                  <li className="item" key={lang.id}>
                    {lang.text}
                    <button
                      className="del-btn"
                      onClick={() => deleteList1(lang.id)}
                    >
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="linkedinIp">
            <label>LinkedIn Profile</label>
            <input
              type="url"
              id="linkedin"
              placeholder="LinkedIn URL"
              value={extra["linkedin"]}
              onChange={(e) => setExtra({ ...extra, linkedin: e.target.value })}
            />
          </div>
          <div className="githubIp">
            <label>GitHub Profile</label>
            <input
              type="url"
              id="github"
              placeholder="GitHub URL"
              value={extra["github"]}
              onChange={(e) => setExtra({ ...extra, github: e.target.value })}
            />
          </div>
          <div className="codechefIp">
            <label>CodeChef Profile</label>
            <input
              type="url"
              id="codechef"
              placeholder="CodeChef URL"
              value={extra["codechef"]}
              onChange={(e) => setExtra({ ...extra, codechef: e.target.value })}
            />
          </div>
          <div className="codeforcesIp">
            <label>CodeForces Profile</label>
            <input
              type="url"
              id="cf"
              placeholder="CodeForces URL"
              value={extra["cf"]}
              onChange={(e) => setExtra({ ...extra, cf: e.target.value })}
            />
          </div>
          <div className="leetcodeIp">
            <label>Leetcode Profile</label>
            <input
              type="url"
              id="leetcode"
              placeholder="Leetcode URL"
              value={extra["leetcode"]}
              onChange={(e) => setExtra({ ...extra, leetcode: e.target.value })}
            />
          </div>
        </div>
        <div className="buttons5">
          <button id="back" onClick={() => setCurrentStep(4)}>
            Back
          </button>
          <button id="next" onClick={() => setCurrentStep(6)}>
            Submit
          </button>
        </div>
      </div>
      {/* <button>Add Another</button> */}
    </div>
  );
}

export default ExtraDetails;
