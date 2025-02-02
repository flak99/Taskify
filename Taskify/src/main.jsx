import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./Components/Header";
import { Dates } from "./Components/Dates";

import "./Styles/Header.css";
import "./Styles/Dates.css";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Dates />
  </>
);
