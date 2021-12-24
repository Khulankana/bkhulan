import React from "react";
import Btn from "../Btn";
import css from "./style.module.css";

const Education = (props) => {
  if (props.type === "edu") {
    return (
      <section className={css.Timeline}>
        <Btn handler={props.handler} />
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
  } else {
    return (
      <section className={css.Timeline}>
        <Btn handler={props.handler} />
        <ul>
          <li>
            <div>
              <h3>2017.08 - </h3>
              <p> Жирэмсний амралт / охин 4 нас, хүү 2 нас /</p>
            </div>
          </li>
          <li>
            <div>
              <h3>2016 - 2017, </h3>
              <p>
                {" "}
                Бүртгэлийн мэргэжилтэн, “Инфосистемс” ХХК / Мэдээллийн
                технологийн салбарт програм хангамжийн чиглэлээр үйл ажиллагаа
                явуулдаг байгууллага /
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3> 2013 - 2014, </h3>
              <p>Эх бэлтгэгч, худалдааны зөвлөх, Бичиг хэргийн дэлгүүрт</p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
};

export default Education;
