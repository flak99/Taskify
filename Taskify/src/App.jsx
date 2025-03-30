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
  const removeTask = (id) => {
    setTaskList(taskList.filter((task, index) => index !== id));
  };

  function numberOfTasks() {
    return taskList.length;
  }

  return (
    <>
      {isSideModalVisible && (
        <SideMenu toggleSideModalFalse={toggleSideModalFalse} />
      )}
      <Header
        toggleSideModal={toggleSideModalTrue}
        onAddTask={handleAddTask}
        numberOfTasks={numberOfTasks}
      />
      <Dates />
      <Tasks taskList={taskList} onDeleteTask={removeTask} />
    </>
  );
}
