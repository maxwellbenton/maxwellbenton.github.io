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

// function Mushroom() {
//   return (
//     <div className="px-2">
//       <gc-mushroom></gc-mushroom>
//     </div>
//   );
// }

export default function GnomeChat() {
  const [started, setStarted] = useState(false);
  // const [chat, setChat] = useState([]);

  // function browserSupportsGnomes() {
  //   return window.ai ? true : false;
  // }

  return (
    <>
      {!started && <button onClick={() => setStarted(true)}>Activate Gnomes</button>}
      {started && (
        <div className="flex flex-row">
          <Gnome></Gnome>
          <Gnome facing="left" gnome="1"></Gnome>w
          {/* <Mushroom></Mushroom>
          <Mushroom></Mushroom>
          <Mushroom></Mushroom> */}
        </div>
      )}
    </>
  );
}
