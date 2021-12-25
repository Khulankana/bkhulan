import React, { useState } from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import EduExperience from "../components/EduExperience";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import css from "./style.module.css";

function App() {
  const [btnType, setBtnType] = useState("work");

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
        <Contact />
        <Footer />
      </div>
    )
  );
}

export default App;
