/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Tasks.css";
import { ExperienceSystem } from "../../utils/lvlSystem";

export function Tasks({ taskList, onDeleteTask }) {
  const [, setCheckedTask] = useState([]);

  function handleCheckedTask(event) {
    ExperienceSystem();

    const { name, checked } = event.target;

    setCheckedTask((prev) => {
      return checked ? [...prev, name] : prev.filter((item) => item !== name);
    });
  }
  // function calculateUserGainExp() {
  //   let numberOfCheckedTasks = checkedTask.length;
  //   let gainExp = numberOfCheckedTasks * 20;
  //   return console.log(`Zdobyto ${gainExp} punktów doświadczenia!`);
  // }

  return (
    <>
      <div className="tasks-area">
        {taskList.length > 0 ? (
          taskList.map((task, index) => (
            <div key={index} className="task" id={index}>
              <div className="task-name">{task}</div>
              <input
                type="checkbox"
                className="check-box-task"
                id="check-box-task"
                name={task}
                onChange={handleCheckedTask}
              />
              <button
                className="delete-btn"
                onClick={() => onDeleteTask(index)}
              >
                Usuń
              </button>
            </div>
          ))
        ) : (
          <p>Brak zadań do wyświetlenia.</p>
        )}
      </div>
    </>
  );
}

// onClick={getTaskId}
