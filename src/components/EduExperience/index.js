import React from "react";
import Btn from "../General/Btn";
import css from "./style.module.css";

const Education = (props) => {
  if (props.type === "edu") {
    return (
      <section className={css.Timeline}>
        <Btn handler={props.handler} />
        <ul>
          <li>
            <div>
              <h3>Master's degree </h3>
              <p>
                2014- , Computer software engineer, Mongolian University of
                Science and Technology, Ulaanbaatar /graduation work is
                incomplete/
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Bachelor's degree: </h3>
              <p>
                2008-2012, Computer hardware engineer, Mongolian University of
                Science and Technology, Orkhon.
              </p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
  if (props.type === "work") {
    return (
      <section className={css.Timeline}>
        <Btn handler={props.handler} />
        <ul>
          <li>
            <div>
              <h3>2017.08 - </h3>
              <p> Maternity leave / 4 year old daughter, 2 year old son /</p>
            </div>
          </li>
          <li>
            <div>
              <h3>2016 - 2017, </h3>
              <p>
                {" "}
                Registration Specialist, " Infosystems " /An organization that
                operates in the field of software in the field of information
                technology. /
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3> 2013 - 2014, </h3>
              <p>Copywriter, sales consultant, stationery store</p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
  if (props.type === "course") {
    return (
      <section className={css.Timeline}>
        <Btn handler={props.handler} />
        <ul>
          <li>
            <div>
              <h3> 2020-2020 </h3>
              <p>
                Python Data Structure Course, Univercity of Michigan on Coursera
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>2015-2016, </h3>
              <p> Finance and Accounting, Santis academy</p>
            </div>
          </li>
          <li>
            <div>
              <h3>2015-2016, </h3>
              <p> English, Santis academy</p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
};

export default Education;
