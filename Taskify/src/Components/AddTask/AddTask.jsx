import "./AddTask.css";

export function AddTask() {
  return (
    <>
      <div className="container">
        <input
          type="text"
          className="task-input-name"
          placeholder="Wpisz zadanie"
          name="task-input-name"
        />
        <button className="add-btn">Dodaj</button>
      </div>
    </>
  );
}
