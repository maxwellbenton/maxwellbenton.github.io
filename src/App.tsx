import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={`static bg-white h-screen w-screen flex flex-col overflow-y-auto`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
