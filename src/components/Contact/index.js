import React, { useState } from "react";
import css from "./style.module.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`I will contact you soon. `);
    console.log(email + " " + subject);
    setEmail("Email ... ");
    setSubject("Typing ...");
  };

  return (
    <form onSubmit={handleSubmit} className={css.Container}>
      <div className={css.Info}>
        <h2>Contact me</h2>
        <label>Email:</label>
        <br />
        <input
          placeholder="Email ... "
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Subject:</label>
        <br />
        <textarea
          placeholder="Typing ..."
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input type="submit" value="Send" />
      </div>
      <div className={css.Social}></div>
    </form>
  );
};

export default Contact;
