import React, { useContext } from "react";
import EducationDetails from "./EducationDetails";
import ExperienceDetails from "./ExperienceDetails";
import PersonalDetails from "./PersonalDetails";
import { multiStepContext } from "./StepContext";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import Home from "./Home";
import ProjectDetails from "./ProjectDetails";
import ExtraDetails from "./ExtraDetails";
import ChooseTemplate from "./ChooseTemplate";
import Template4 from "./Template4";

function Form() {
  const { currentStep, setCurrentStep } = useContext(multiStepContext);
  function showStep(currentStep) {
    switch (currentStep) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <EducationDetails />;
      case 3:
        return <ExperienceDetails />;
      case 4:
        return <ProjectDetails />;
      case 5:
        return <ExtraDetails />;
      default:
        return;
    }
  }
  return (
    <div className="form-details-page">
      <div className="center-stepper">
        {currentStep === 0 ? (
          <Home />
        ) : currentStep === 6 ? (
          <ChooseTemplate />
        ) : currentStep === 7 ? (
          <Template4 />
        ) : (
          <Stepper
            style={{ width: "60%", marginLeft: "20%" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step onClick={() => setCurrentStep(1)}>
              <StepLabel></StepLabel>
            </Step>
            <Step onClick={() => setCurrentStep(2)}>
              <StepLabel></StepLabel>
            </Step>
            <Step onClick={() => setCurrentStep(3)}>
              <StepLabel></StepLabel>
            </Step>
            <Step onClick={() => setCurrentStep(4)}>
              <StepLabel></StepLabel>
            </Step>
            <Step onClick={() => setCurrentStep(5)}>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        )}
      </div>
      {showStep(currentStep)}
    </div>
  );
}

export default Form;
