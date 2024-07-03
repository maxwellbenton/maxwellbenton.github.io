import githubLogo from "../../assets/github.png";
import linkedinLogo from "../../assets/linkedin.png";
import mediumLogo from "../../assets/medium.png";

function Header() {
  return (
    <header
      className={`header flex-none z-50`}
    >
      <nav
        className="flex justify-between p-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="https://github.com/maxwellrbenton"
            className={`flex flex-col items-center mx-2 text-sm font-semibold leading-6 text-gray-900`}
          >
            <img src={githubLogo} alt="GitHub Logo" className="w-8 h-8" />
            <p className="text-xs">GitHub</p>
          </a>
          <a
            href="https://medium.com/@maxwellbenton"
            className={`flex flex-col items-center mx-2 items-center text-sm font-semibold leading-6 text-gray-900`}
          >
            <img src={mediumLogo} alt="Medium Logo" className="w-8 h-8" />  
            <p className="text-xs">Medium</p>
            
          </a>
          <a
            href="https://www.linkedin.com/in/maxwellbenton/"
            className={`flex flex-col items-center mx-2 text-sm font-semibold leading-6 text-gray-900`}
          >
            <img src={linkedinLogo} alt="LinkedIn Logo" className="w-8 h-8" />
            <p className="text-xs">LinkedIn</p>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
