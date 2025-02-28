/* eslint-disable react/prop-types */
import "./Tasks.css";

export function Tasks({ taskList }) {
  function getTaskId(event) {
    let taskIdValue = event.target.closest(".task").id; // Pobieranie ID najblizszego rodzica, przycisku usun
    return console.log(taskIdValue);
  }

  return (
    <div className="tasks-area">
      {taskList.length > 0 ? (
        taskList.map((task, index) => (
          <div key={index} className="task" id={index}>
            <div className="task-name">{task}</div>
            <input
              type="checkbox"
              className="check-box-task"
              id="check-box-task"
            />
            <button className="delete-btn" onClick={getTaskId}>
              Usuń
            </button>
          </div>
        ))
      ) : (
        <p>Brak zadań do wyświetlenia.</p>
      )}
    </div>
  );
}
