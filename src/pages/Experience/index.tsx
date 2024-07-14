import Skills from "../../components/Skills";
import {
  h3Style,
  sectionContainerStyle,
  textStyle,
} from "../../constants/tailwind";

export default function Experience() {
  return (
    <div className={sectionContainerStyle}>
      <h3 className={h3Style}>Hi, I'm Max!</h3>
      <div className="my-6">
        <p className={textStyle}>I build stuff online.</p>
      </div>
      <Skills />
    </div>
  );
}
