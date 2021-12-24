import React from "react";
import css from "./style.module.css";

const Btn = (props) => {
  return (
    <div>
      <button onClick={props.handler} value="edu" className={css.Btn}>
        Education
      </button>
      <button onClick={props.handler} value="exp" className={css.Btn}>
        Experience
      </button>
    </div>
  );
};

export default Btn;
