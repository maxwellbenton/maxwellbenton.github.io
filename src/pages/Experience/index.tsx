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
          I'm a passionate front-end engineer who specializes in building scalable, 
          user-focused web applications. I enjoy solving complex problems with clean, 
          efficient code and creating seamless digital experiences.
        </p>
      </div>
      <Skills />
    </div>
  );
}
