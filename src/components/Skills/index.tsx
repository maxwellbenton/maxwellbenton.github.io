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
          <strong>Front-End:</strong> React, Vue.js, Microfrontends, Tailwind CSS, Accessibility (WCAG), Vite, Webpack
        </p>
        <p className={textStyle}>
          <strong>Backend & Tools:</strong> Ruby on Rails, Node.js, REST APIs, Docker, AWS, Git, GitHub Copilot
        </p>
        <p className={textStyle}>
          <strong>Methodologies & Testing:</strong> Agile, Scrum, CI/CD (Jenkins), TDD, BDD, Jest, Vitest, Cypress, Playwright
        </p>
      </div>
    </div>
  );
}
