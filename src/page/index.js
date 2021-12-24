import React, { useState } from "react";
import AboutMe from "../components/AboutMe";
import EduExperience from "../components/EduExperience";
import Showcase from "../components/Showcase";
import css from "./style.module.css";

function App() {
  const [btnType, setBtnType] = useState("edu");

  const btnHandler = (el) => {
    setBtnType(el.target.value);
  };

  return (
    console.log(btnType),
    (
      <div>
        <div className={css.Container}></div>
        <Showcase />
        <AboutMe />
        <EduExperience handler={btnHandler} type={btnType} />
      </div>
    )
  );
}

export default App;
