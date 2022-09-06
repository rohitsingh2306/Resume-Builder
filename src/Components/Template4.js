import React, { useContext, useRef } from "react";
import template4 from "../css/template4.css";
import { multiStepContext } from "./StepContext";
import { useReactToPrint } from "react-to-print";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import codechef from "../images/codechef.png";
import leetcode from "../images/leetcode.png";
import codeforces from "../images/codeforces.png";
import code from "../images/code-solid.svg";
import link from "../images/link-solid.svg";

const Template4 = () => {
  const compRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => compRef.current,
    documentTitle: "Template4",
    onAfterPrint: () => alert("success"),
  });
  const { setCurrentStep, personal, edu, exp, prjt, skills, langs, extra } =
    useContext(multiStepContext);

  return (
    <div className="main-div4">
      <div className="resume4" ref={compRef}>
        <section className="left-section4">
          <section className="image4">
            <img
              src={personal.profile_url}
              alt="profile img"
              height="100%"
              width="100%"
            />
          </section>
          <section className="contact4">
            <h2>Contact</h2>
            <hr />
            <div className="details-left">
              <p>Phone : {personal.phone_no}</p>
              <p>Email : {personal.email}</p>
              <p>Address: {edu.curr_loc}</p>
            </div>
          </section>
          <section className="education4">
            <h2>Education</h2>
            <hr />
            <div className="details-left">
              <p>{edu.yop}</p>
              <p>{edu.qualification}</p>
              <p>{edu.univ_clg}</p>
            </div>
          </section>
          <section className="skills4">
            <h2>Skills</h2>
            <hr />
            <ul>
              {skills.map((skill) => (
                <li className="item" key={skill.id}>
                  {skill.text}
                </li>
              ))}
            </ul>
          </section>
          <section className="lang4">
            <h2>Languages</h2>
            <hr />
            <ul>
              {langs.map((lang) => (
                <li className="item" key={lang.id}>
                  {lang.text}
                </li>
              ))}
            </ul>
          </section>
        </section>
        <section className="right-section4">
          <section className="name4">
            <h1>{personal.full_name}</h1>
          </section>
          <section className="about4">
            <p>{personal.about}</p>
          </section>
          <section className="experience4">
            <h2>Experience</h2>
            <hr />
            <div className="exp-details4">
              <p>
                {exp.comp_doj} - {exp.comp_doe}
              </p>
              <p>
                <strong>{exp.designation}</strong> | {exp.comp_name}
              </p>
              <p>{exp.comp_description}</p>
            </div>
          </section>
          <section className="prjt4">
            <h2>Projects</h2>
            <hr />
            <div className="prjt-details4">
              <p>
                {prjt.prjt_dos} - {prjt.prjt_doe}
              </p>
              <p id="prjt-link4">
                <strong>{prjt.prjt_name}</strong> | {prjt.comp_nm}
                <div className="links">
                  <a
                    href={prjt.prjt_code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={code} alt="code link" />
                  </a>
                  <a
                    href={prjt.prjt_host}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={link} alt="hosted site link" />
                  </a>
                </div>
              </p>

              <p>{prjt.prjt_desc}</p>
            </div>
          </section>
          <section className="achievements4">
            <h2>Achievements</h2>
            <hr />
            <p>{extra.achievements}</p>
          </section>
          <section className="social4">
            <h2>Social Profiles</h2>
            <hr />
            <div>
              <FontAwesomeIcon icon={faLinkedin} />
              <a
                href={extra.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                LinkedIn
              </a>
            </div>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <a href={extra.github} target="_blank" rel="noopener noreferrer">
                {" "}
                GitHub
              </a>
            </div>
            <div>
              <img src={codechef} alt="codechef" />
              <a
                href={extra.codechef}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                CodeChef
              </a>
            </div>
            <div>
              <img src={codeforces} alt="codeforces" />
              <a
                href={extra.codeforces}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                CodeForces
              </a>
            </div>
            <div>
              <img src={leetcode} alt="leetcode" />
              <a
                href={extra.leetcode}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Leetcode
              </a>
            </div>
          </section>
        </section>
      </div>
      <div className="button4">
        <button id="back" onClick={() => setCurrentStep(6)}>
          Back
        </button>
        <button onClick={handlePrint}>Download</button>
      </div>
    </div>
  );
};

export default Template4;
