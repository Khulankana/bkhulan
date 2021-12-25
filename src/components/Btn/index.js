import React from "react";
import css from "./style.module.css";

const Btn = (props) => {
  return (
    <div>
      <button onClick={props.handler} value="edu" className={css.Btn}>
        Education
      </button>
      <span style={{ color: "white" }}>*</span>
      <span style={{ color: "white" }}>*</span>
      <button onClick={props.handler} value="work" className={css.Btn}>
        Work experience
      </button>
      <span style={{ color: "white" }}>*</span>
      <span style={{ color: "white" }}>*</span>
      <button onClick={props.handler} value="course" className={css.Btn}>
        Course
      </button>
    </div>
  );
};

export default Btn;
