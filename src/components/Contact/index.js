import React from "react";
import css from "./style.module.css";

const Contact = () => {
  return (
    <div className={css.Container}>
      <div className={css.Info}>
        <h2>Contact me</h2>
        <label for="fname">Email:</label>
        <br />
        <input type="email" placeholder="Email"></input>
        <br />
        <label for="fname">Subject:</label> <br />
        <textarea placeholder="Typing..."></textarea> <br />
        <br />
        <button>Send</button>
      </div>
      <div className={css.Social}></div>
    </div>
  );
};

export default Contact;
