import React, { useState, useContext } from "react";
import Form from "./Form";

export const multiStepContext = React.createContext();
function StepContext() {
  const [currentStep, setCurrentStep] = useState(0);
  const [personal, setPersonal] = useState([]);
  const [edu, setEdu] = useState([]);
  const [exp, setExp] = useState([]);
  const [prjt, setPrjt] = useState([]);
  const [extra, setExtra] = useState([]);

  const [skills, setSkills] = useState([]);
  const [langs, setLangs] = useState([]);

  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          personal,
          setPersonal,
          edu,
          setEdu,
          exp,
          setExp,
          prjt,
          setPrjt,
          extra,
          setExtra,
          skills,
          setSkills,
          langs,
          setLangs,
        }}
      >
        <Form />
      </multiStepContext.Provider>
    </div>
  );
}

export default StepContext;
