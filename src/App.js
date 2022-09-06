import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";

import PersonalDetails from "./Components/PersonalDetails";
import Form from "./Components/Form";
import StepContext from "./Components/StepContext";
import Template4 from "./Components/Template4";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      {/* <Home /> */}
      <StepContext>
        <Form />
      </StepContext>

      {/* <Template4 /> */}
      {/* <PersonalDetails /> */}
    </div>
  );
}

export default App;
