import { h3Style, sectionContainerStyle, textStyle } from "../../constants/tailwind";

export default function Experience() {
  return (
    <div className={sectionContainerStyle}>
      <h3 className={h3Style}>Hi, I'm Max!</h3>
      <div className="my-6">
        <p className={textStyle}>
          I am a senior front-end software engineer. I build stuff
          online and I can write about building stuff. I also like to garden.
        </p>
      </div>

      <div className="my-6">
        <h3 className={h3Style}>Skills and Technologies</h3>
        <p className={textStyle}>
          Languages: JavaScript, TypeScript, Ruby, HTML, CSS
        </p>
        <p className={textStyle}>
          Frameworks/Libraries: React, Vue.js, Rails
        </p>
        <p className={textStyle}>
          Tools: Git, Webpack, Playwright, Jenkins
        </p>
        <p className={textStyle}>
          Methodologies: Agile, Scrum, CI/CD
        </p>
      </div>
    </div>
  );
}
