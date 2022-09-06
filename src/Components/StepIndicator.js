import React from "react";
import { Link } from "react-router-dom";
function StepIndicator() {
  const steps = [
    {
      path: "/details/personal",
    },
    {
      path: "/details/education",
    },
    {
      path: "/details/experience",
    },
    {
      path: "/details/projects",
    },
    {
      path: "/details/extra",
    },
  ];

  return (
    <div>
      {steps.map((step, index) => {
        return <Link to={step.path}>{index + 1}</Link>;
      })}
    </div>
  );
}

export default StepIndicator;
