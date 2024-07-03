import performance from "../../assets/performance.png";
import playwright from "../../assets/playwright.png";
import webApp from "../../assets/web-app.png";
import acceptance from "../../assets/acceptance.png";
import postMessage from "../../assets/post-message.png";
import { cardStyle, cardStyleAlt, imageStyle, boldTextStyle, sectionContainerStyle, textWrapperStyle, textWrapperStyleAlt, h3Style } from "../../constants/tailwind";

export default function Projects() {
  return (
    <div className={sectionContainerStyle}>
      <h3 className={h3Style}>Recent Work</h3>
      <p className="text-lg text-left mt-4 mx-8">
        Some cool things I've done recently include:
      </p>
      <div className={cardStyle}>
        <img
          className={imageStyle}
          src={acceptance}
          alt="design sketch of a web application used around a third-party SDK"
        />
        <div className={textWrapperStyle}>
          <h5 className={boldTextStyle}>
            I designed and led the engineering for a new Vue.js + TypeScript
            application for secure credit card data collection.
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
            I prototyped Mastercard’s newest checkout product. This product
            embeds directly in a business's checkout page and fully orchestrates
            a user’s checkout experience.
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
            I designed and helped engineer a Playwright integration package for use
            in PR validation and as a gating continuous integration tool.
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
            I developed a post-messaging package and its external signaling
            contracts. This package handles the communication between browser windows
            owned by separate entities, one owned by Mastercard and the other by
            Samsung.
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
            I implemented performance improvements to Mastercard’s UCS product
            through the parallelization of asynchronous code executions
          </h5>
        </div>
      </div>
    </div>
  );
}
