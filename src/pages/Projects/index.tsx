import performance from "../../assets/performance.png";
import playwright from "../../assets/playwright.png";
import webApp from "../../assets/web-app.png";
import acceptance from "../../assets/acceptance.png";
import postMessage from "../../assets/post-message.png";
import {
  cardStyle,
  cardStyleAlt,
  imageStyle,
  boldTextStyle,
  sectionContainerStyle,
  textWrapperStyle,
  textWrapperStyleAlt,
  h3Style,
} from "../../constants/tailwind";

export default function Projects() {
  return (
    <div className={sectionContainerStyle}>
      <h3 className={h3Style}>Recent Work</h3>
      <p className="text-lg text-left mt-4">
        Here are some projects I've delivered that demonstrate my technical
        skills and problem-solving approach:
      </p>
      <div className={cardStyle}>
        <img
          className={imageStyle}
          src={acceptance}
          alt="design sketch of a web application used around a third-party SDK"
        />
        <div className={textWrapperStyle}>
          <h5 className={boldTextStyle}>
            Designed and led the development of a Vue.js + TypeScript
            application for third-party SDK integration, improving transaction
            success rates by more than 25%.
          </h5>
        </div>
      </div>
      <div className={cardStyleAlt}>
        <img
          className={imageStyle}
          src={webApp}
          alt="a sketch of my prototype for Mastercard's newest checkout product"
        />
        <div className={textWrapperStyleAlt}>
          <h5 className={boldTextStyle}>
            Led the design and development of Mastercard's next-generation
            checkout solution — an embedded application that seamlessly
            integrates into merchant websites and orchestrates the complete
            customer checkout experience.
          </h5>
        </div>
      </div>
      <div className={cardStyle}>
        <img
          className={imageStyle}
          src={playwright}
          alt="a sketch of a Playwright integration tool"
        />
        <div className={textWrapperStyle}>
          <h5 className={boldTextStyle}>
            Architected and developed a Playwright-based integration testing
            framework that serves as a quality gate in our CI/CD pipeline,
            reducing production bugs by 40%.
          </h5>
        </div>
      </div>

      <div className={cardStyleAlt}>
        <img
          className={imageStyle}
          src={postMessage}
          alt="a design sketch of a post-messaging service and external signaling contracts"
        />
        <div className={textWrapperStyleAlt}>
          <h5 className={boldTextStyle}>
            Built a cross-origin communication library with robust signaling
            contracts that enables secure messaging between browser windows from
            different domains, supporting complex multi-window workflows.
          </h5>
        </div>
      </div>
      <div className={cardStyle}>
        <img
          className={imageStyle}
          src={performance}
          alt="a design sketch of performance improvements through parallelization of asynchronous code execution"
        />
        <div className={textWrapperStyle}>
          <h5 className={boldTextStyle}>
            Optimized Mastercard's UCS platform performance by implementing
            parallelized asynchronous processing, achieving a 35% reduction in
            response times under heavy load.
          </h5>
        </div>
      </div>
    </div>
  );
}
