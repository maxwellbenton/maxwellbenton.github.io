import profilePhoto from "../../assets/profile.png";
import resume from "../../assets/maxwell-benton-resume.pdf";
import { ME, TITLE } from "../../constants";
import { Experiment } from "../../types";
// import * from 'gnome-components';
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
      interface IntrinsicElements {
          'gc-chest': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
  }
}

function Main({
  scrolled,
  addExperiment,
  experiments,
}: {
  scrolled: boolean;
  addExperiment: ({ experiment }: { experiment: Experiment }) => void;
  experiments: Experiment[];
}) {
  // console.warn(Gnomes)
  return (
    <div
      className={`splash grow h-screen w-screen flex flex-col justify-start items-center sm:justify-start lg:justify-start lg:items-center mx-auto max-w-2xl`}
    >
      <div className="mt-2 mb-2 sm:mt-2 sm:mb-2 md:mt-2 md:mb-2 lg:mt-24 lg:mb-16 flex flex-col justify-center items-center ">
        <div
          className={`relative rounded-full flex flex-row sm:flex-col md:flex-row lg:flex-row px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex flex-col items-center lg:flex-row`}
        >
          <span className="px-1">Looking for a front-end engineer?</span>
          <a
            href={resume}
            download
            className={`font-semibold hover:text-blue-500 visited:text-purple-600 text-blue-900`}
          >
            <span className="absolute inset-0 text-pretty" aria-hidden="true" />
            <span className="text-nowrap">
              Here is my resume
              <span className="px-0.5" aria-hidden="true">
                &rarr;
              </span>
            </span>
          </a>
        </div>
      </div>
      <div
        className={`flex grow flex-col sm:flex-col md:flex-col lg:flex-row justify-start items-center sm:items-center md:justify-start md:items-center mt-2 sm:mt-2 md:mt-2 lg:items-start lg:mt-0`}
      >
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center sm:justify-center">
          <img
            src={profilePhoto}
            className="rounded-full w-60 mb-8"
            alt="picture of me and my son"
          />
          <div className="mx-4 h-60 flex flex-col justify-start md:justify-center lg:justify-center items-center sm:items-center md:items-start lg:items-start text-center sm:text-center md:text-left lg:text-left">
            <h1 className={`text-4xl font-bold tracking-tight text-gray-900`}>
              {ME}
            </h1>
            <h2 className={`text-2xl text-gray-600 `}>{TITLE}</h2>
          </div>
        </div>
        <div
          onClick={() =>
            addExperiment({
              experiment: { id: crypto.randomUUID(), name: "secret" },
            })
          }
          className="hidden sm:hidden md:block lg:hidden md:mt-24 text-gray-300 hover:cursor-pointer hover:font-bold"
        >
          <gc-chest></gc-chest>
          {experiments?.find((exp) => exp.name === "secret") ? (
            "Secrets activated!"
          ) : "Activate secrets"}
        </div>
      </div>
      <div
        className={`${scrolled && "hidden"} absolute bottom-2 flex flex-row`}
      >
        Scroll down for more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="mx-1 size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </div>
  );
}

export default Main;
