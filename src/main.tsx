import ReactDOM from "react-dom/client";
import App from "./App.tsx";
//the sequence of `styles` importing
// `style initialization` should be always the first one
import "reset-css";
//UI

// global sytles
import "@/assets/styles/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
