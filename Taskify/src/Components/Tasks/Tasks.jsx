// import "./Tasks.css";

// export function Tasks({}) {
//   return (
//     <>
//       <div className="tasks-area">
//         <div className="task">
//           <div className="task-name">Zrobić pranie</div>
//           <button className="delete-btn">usuń</button>
//         </div>
//       </div>
//     </>
//   );
// }

/* eslint-disable react/prop-types */
import "./Tasks.css";

export function Tasks({ taskList }) {
  return (
    <div className="tasks-area">
      {taskList.length > 0 ? (
        taskList.map((task, index) => (
          <div key={index} className="task">
            <div className="task-name">{task}</div>
            <button className="delete-btn">Usuń</button>
          </div>
        ))
      ) : (
        <p>Brak zadań do wyświetlenia.</p>
      )}
    </div>
  );
}
