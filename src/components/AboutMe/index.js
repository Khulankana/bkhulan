import React from "react";
import css from "./style.module.css";

const AboutMe = () => {
  return (
    <section className={css.Container}>
      <div className={css.SectionA}>
        <h2>About myself</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className={css.SectionB}>
        <h4>JAVASCRIPT: 70%</h4>
        <div className={css.Progress}>
          <div style={{ width: "70%" }}></div>
        </div>
        <h4>HTML & CSS: 75%</h4>
        <div className={css.Progress}>
          <div style={{ width: "75%" }}></div>
        </div>
        <h4>React: 65% </h4>
        <div className={css.Progress}>
          <div style={{ width: "65%" }}></div>
        </div>
        <h4>VS Code & Shell prompt & Git: 80% </h4>
        <div className={css.Progress}>
          <div style={{ width: "80%" }}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
