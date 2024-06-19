import { lazy } from "react";

export const App = lazy(() => import("./App.tsx"));
export const About = lazy(() => import("./pages/About/index.tsx"));
export const Splash = lazy(() => import("./pages/Splash/index.tsx"));
