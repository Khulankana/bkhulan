import AboutMe from "../components/AboutMe";
import EduExperience from "../components/EduExperience";
import MainInfo from "../components/MainInfo";
import css from "./style.module.css";

function App() {
  const handler = (el) => {
    console.log(el.target.value);
  };

  return (
    <div>
      <div className={css.Container}></div>
      <MainInfo />
      <AboutMe />
      <EduExperience handler={handler} />
    </div>
  );
}

export default App;
