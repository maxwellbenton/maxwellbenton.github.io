import profilePhoto from "../../assets/profile.png";
import { ME, TITLE } from "../../constants";

export default function Splash() {
  return (
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
  );
}
