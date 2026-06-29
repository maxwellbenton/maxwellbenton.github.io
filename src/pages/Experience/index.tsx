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
        <p className={textStyle}>
          I'm a front-end engineer and technical lead with 7 years of experience building
          scalable, high-traffic web applications in fintech. I've led cross-functional
          engineering teams, architected systems processing more than $10 billion in
          transactions annually, and enjoy mentoring engineers while solving complex
          problems with clean, efficient code.
        </p>
      </div>
      <Skills />
    </div>
  );
}
