import "./index.css";
import "./Styles/Header.css";
import "./Styles/Dates.css";
import "./Styles/Tasks.css";
import "./Styles/AddTask.css";

import { createRoot } from "react-dom/client";
import { Header } from "./Components/Header";
import { Dates } from "./Components/Dates";
import { Tasks } from "./Components/Tasks";
import { AddTask } from "./Components/AddTask";

createRoot(document.getElementById("root")).render(
  <>
    <AddTask />
    <Header />
    <Dates />
    <Tasks />
  </>
);
