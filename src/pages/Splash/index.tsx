import myface from "../../assets/daytime-logo.png";
import farmFade from "../../assets/farm-fade-white.png";
import resume from "../../assets/maxwell-benton-resume.pdf";
import { ME, TITLE } from "../../constants";

function Splash() {
  return (
    <div className={`splash grow w-screen mbg-white position-absolute top-0 bg-[url(${farmFade})]`}>
      <div className="px-6 lg:px-6 pb-10 flex justify-center items-center h-full">
        <div className="mx-auto max-w-2xl ">
          <div className="mb-8 flex justify-center">
            <div
              className={`relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex flex-col items-center lg:flex-row`}
            >
              <span className="px-1">Looking for a front-end engineer?</span>
              <a
                href={resume}
                download
                className={`font-semibold hover:text-blue-500 visited:text-purple-600 text-blue-900`}
              >
                <span
                  className="absolute inset-0 text-pretty"
                  aria-hidden="true"
                />
                <span className="text-nowrap">
                  Hire me<span className="px-0.5" aria-hidden="true">&rarr;</span>
                </span>
              </a>
            </div>
          </div>
          <div
            className={`text-center flex flex-col md:flex-col lg:flex-row justify-center items-center`}
          >
            <img
              src={myface}
              className="rounded-full w-60 mb-8"
              alt="Brand Logo"
            />
            <div className="mx-4 flex flex-col text-left text-center lg:text-left">
              <h1 className={`text-4xl font-bold tracking-tight text-gray-900`}>
                {ME}
              </h1>
              <p className={`text-2xl text-gray-600 `}>{TITLE}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
