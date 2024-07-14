import { Experiment } from "../../types";
import SecretSection from "../../components/SecretSection";
import OpenForWork from "../../components/OpenForWork";
import Splash from "../../components/Splash";
import ScrollForMore from "../../components/ScrollForMore";
// import * from 'gnome-components';

function Main({
  scrolled,
  addExperiment,
  experiments,
}: {
  scrolled: boolean;
  addExperiment: ({ experiment }: { experiment: Experiment }) => void;
  experiments: Experiment[];
}) {
  return (
    <div
      className={`splash grow h-screen w-screen flex flex-col justify-start items-center sm:justify-start lg:justify-start lg:items-center mx-auto max-w-2xl`}
    >
      <OpenForWork />
      <div
        className={`flex grow flex-col sm:flex-col md:flex-col lg:flex-row justify-start items-center sm:items-center md:justify-start md:items-center mt-2 sm:mt-2 md:mt-2 lg:items-start lg:mt-0`}
      >
        <Splash />
        <SecretSection
          addExperiment={addExperiment}
          experiments={experiments}
        />
      </div>
      <ScrollForMore scrolled={scrolled} />
    </div>
  );
}

export default Main;
