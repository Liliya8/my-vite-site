import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";  // import HashRouter
import App from "./App";
import "./index.css";
import "./lib/i18n"; // Import i18n configuration

createRoot(document.getElementById("root")!).render(
  <HashRouter>      {/* wrap your App */}
    <App />
  </HashRouter>
);
