import { useState } from "react";
import Header from "./components/Header";
import Experience from "./pages/Experience";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
// import About from "./pages/About";
import { Experiment } from "./types";

function App() {
  const [scrolled, setScrolled] = useState(!!window.scrollY);
  function updateScrolled() {
    setScrolled(true);
  }

  const [experiments, setExperiments] = useState<Experiment[]>([]);
  
  function addExperiment({ experiment }: { experiment: Experiment }) {
    setExperiments([...experiments, { ...experiment }]);
  }
  
  return (
    <div
      onScroll={updateScrolled}
      className={`static h-screen w-screen flex flex-col overflow-y-auto overflow-x-hidden`}
    >
      <div className={"static w-screen"}>
        <Header />
        <Main scrolled={scrolled} addExperiment={addExperiment} experiments={experiments}/>
      </div>
      <div className={"static w-screen bg-slate-200"}>
        <Experience />
      </div>
      <div className={"static w-screen bg-slate-200"}>
        <Projects />
      </div>
      {/* <div className={"static w-screen bg-slate-200"}>
        <About />
      </div> */}
    </div>
  );
}

export default App;
