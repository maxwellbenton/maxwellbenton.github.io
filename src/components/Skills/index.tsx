import { h3Style, textStyle } from "../../constants/tailwind";
export default function Skills() {
  return (
    <div className="my-6">
      <h3 className={h3Style}>Skills & Technologies</h3>
      <div className="mt-4 space-y-2">
        <p className={textStyle}>
          <strong>Languages:</strong> JavaScript, TypeScript, Ruby, HTML5, CSS3
        </p>
        <p className={textStyle}>
          <strong>Frontend:</strong> React, Vue.js, Tailwind CSS, Vite, Webpack
        </p>
        <p className={textStyle}>
          <strong>Backend & Tools:</strong> Ruby on Rails, Node.js, Git, Playwright, Jenkins, CI/CD
        </p>
        <p className={textStyle}>
          <strong>Methodologies:</strong> Agile Development, Scrum, Test-Driven Development
        </p>
      </div>
    </div>
  );
}
