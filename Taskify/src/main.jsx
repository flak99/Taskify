import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./Components/Header";
import { Dates } from "./Components/Dates";
import { Tasks } from "./Components/Tasks";

import "./Styles/Header.css";
import "./Styles/Dates.css";
import "./Styles/Tasks.css";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Dates />
    <Tasks />
  </>
);
