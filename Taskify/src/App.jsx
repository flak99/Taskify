import { useState } from "react";
import { Header } from "./Components/Header";
import { Dates } from "./Components/Dates";
import { Tasks } from "./Components/Tasks";
import { AddTask } from "./Components/AddTask";
import { SideMenu } from "./Components/SideMenu";

import "./index.css";
import "./Styles/Header.css";
import "./Styles/Dates.css";
import "./Styles/Tasks.css";
import "./Styles/AddTask.css";
import "./Styles/SideMenu.css";

export function App() {
  const [isSideModalVisible, setSideModalVisible] = useState(false);

  function toggleSideModalTrue() {
    setSideModalVisible(true);
  }
  function toggleSideModalFalse() {
    setSideModalVisible(false);
  }

  return (
    <>
      {isSideModalVisible && (
        <SideMenu toggleSideModalFalse={toggleSideModalFalse} />
      )}
      <AddTask />
      <Header toggleSideModal={toggleSideModalTrue} />
      <Dates />
      <Tasks />
    </>
  );
}
