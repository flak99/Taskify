import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { Dates } from "./Components/Dates/Dates";
import { Tasks } from "./Components/Tasks/Tasks";
import { SideMenu } from "./Components/SideMenu/SideMenu";

import "./index.css";

export function App() {
  const [isSideModalVisible, setSideModalVisible] = useState(false);
  const [taskList, setTaskList] = useState([]);

  function toggleSideModalTrue() {
    setSideModalVisible(true);
  }
  function toggleSideModalFalse() {
    setSideModalVisible(false);
  }

  function handleAddTask(newTask) {
    setTaskList((prevList) => [...prevList, newTask]);
  }

  return (
    <>
      {isSideModalVisible && (
        <SideMenu toggleSideModalFalse={toggleSideModalFalse} />
      )}
      <Header toggleSideModal={toggleSideModalTrue} onAddTask={handleAddTask} />
      <Dates />
      <Tasks taskList={taskList} />
    </>
  );
}
