import React from "react";
import Education from "../Education";
import css from "./style.module.css";

const EduExperience = (props) => {
  return (
    <div className={css.Container}>
      <button onClick={props.handler} value="edu">
        Education
      </button>
      <button onClick={props.handler} value="exp">
        Experience
      </button>
      <Education />
    </div>
  );
};

export default EduExperience;
