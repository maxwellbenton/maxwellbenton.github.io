import resume from "../../assets/maxwell-benton-resume.pdf";

export default function OpenForWork() {
  return (
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
  );
}
