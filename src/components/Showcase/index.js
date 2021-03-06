import React from "react";
import css from "./style.module.css";
import Zurag from "./me.png";
import { FaPhone, FaEnvelope, FaHome } from "react-icons/fa";

const Showcase = () => {
  return (
    <div className={css.Wrapper}>
      <div className={css.Zurag}>
        {" "}
        <img src={Zurag} alt="My zurag" />
      </div>

      <div className={css.Info}>
        <div>
          Hello everybody, i am
          <div>
            <b className={css.Bigger}>Khulan Bat-Erdene</b>
          </div>{" "}
          <span className={css.Bolder}>
            {" "}
            <i style={{ fontSize: "1rem" }}> Front-end developer</i>
          </span>
        </div>
        <div className={css.ContactInfo}>
          <div>
            <FaPhone className={css.IcnStyle} /> +976 - 94759494
          </div>
          <div>
            <FaEnvelope className={css.IcnStyle} /> khulanka.ba@gmail.com
          </div>
          <div>
            <FaHome className={css.IcnStyle} /> Ulaanbaatar, Mongolia
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
