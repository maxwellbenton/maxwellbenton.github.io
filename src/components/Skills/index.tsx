import { h3Style, textStyle } from "../../constants/tailwind";
export default function Skills() {
  return (
    <div className="my-6">
      <h3 className={h3Style}>Skills and Technologies</h3>
      <p className={textStyle}>
        Languages: JavaScript, TypeScript, Ruby, HTML, CSS
      </p>
      <p className={textStyle}>Frameworks/Libraries: React, Vue.js, Rails</p>
      <p className={textStyle}>Tools: Git, Webpack, Playwright, Jenkins</p>
      <p className={textStyle}>Methodologies: Agile, Scrum, CI/CD</p>
    </div>
  );
}
