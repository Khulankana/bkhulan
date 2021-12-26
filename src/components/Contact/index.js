import React, { useState } from "react";
import css from "./style.module.css";
import axios from "axios";
import { useModal } from "react-hooks-use-modal";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const info = {
      email: email,
      message: message,
    };
    if (email !== " " && message !== " ") {
      axios
        .post(
          "https://my-website-b25da-default-rtdb.firebaseio.com/contact.json",
          info
        )
        .then((response) => console.log("amjiltai hadgallaa"));
    }

    setEmail("");
    setMessage("");
  };

  return (
    <div>
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
          <label>Message:</label>
          <br />
          <textarea
            placeholder="Typing ..."
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          <input type="submit" value="Send" onClick={open} />
        </div>
        <div className={css.Social}></div>
      </form>
      <Modal>
        <div>
          <h3> I will contact you soon.</h3>
          <button
            style={{
              padding: "0.2rem",
              width: "2.5rem",
              margin: "1rem",
              marginLeft: "5rem",
            }}
            onClick={close}
          >
            Ok
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
