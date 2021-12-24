import React from "react";
import css from "./style.module.css";

const Education = () => {
  return (
    <section className={css.Timeline}>
      <ul>
        <li>
          <div>
            <h3>Мастерын зэрэг: </h3>
            <p>
              2014- , Компьютер програм хангамжийн инженер, МХТС Улаанбаатар /
              төгсөлтийн ажил дутуу /
            </p>
          </div>
        </li>
        <li>
          <div>
            <h3>Бакалаврын зэрэг: </h3>
            <p>
              2008-2012, Компьютер техник хангамжийн инженер, Ш.Отгонбилэг-н
              нэрэмжит технологийн их сургууль, Орхон.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Education;
