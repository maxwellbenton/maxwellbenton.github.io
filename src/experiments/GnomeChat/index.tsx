import { useState } from "react";

declare global {
  interface Window {
    ai?: unknown;
  }
}

function Gnome({ facing, gnome }: { facing?: string; gnome?: string }) {
  return (
    <div className="px-2">
      <gc-gnome facing={facing} gnome={gnome}></gc-gnome>
    </div>
  );
}

export default function GnomeChat() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setStarted(true)}
        >
          Activate Gnomes
        </button>
      )}
      {started && (
        <div className="flex flex-row">
          <Gnome></Gnome>
          <Gnome facing="left" gnome="1"></Gnome>
        </div>
      )}
    </>
  );
}
