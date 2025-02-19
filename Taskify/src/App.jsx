import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { Dates } from "./Components/Dates/Dates";
import { Tasks } from "./Components/Tasks/Tasks";
import { AddTask } from "./Components/AddTask/AddTask";
import { SideMenu } from "./Components/SideMenu/SideMenu";

import "./index.css";

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
