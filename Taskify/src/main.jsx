import "./index.css";
import "./Styles/Header.css";
import "./Styles/Dates.css";
import "./Styles/Tasks.css";
import "./Styles/AddTask.css";
import "./Styles/SideMenu.css";

import { createRoot } from "react-dom/client";
import { Header } from "./Components/Header";
import { Dates } from "./Components/Dates";
import { Tasks } from "./Components/Tasks";
import { AddTask } from "./Components/AddTask";
import { SideMenu } from "./Components/SideMenu";

createRoot(document.getElementById("root")).render(
  <>
    <SideMenu />
    <AddTask />
    <Header />
    <Dates />
    <Tasks />
  </>
);
