export function AddTask() {
  return (
    <>
      <div className="container">
        <input
          type="text"
          className="task-input-name"
          placeholder="Wpisz zadanie"
        />
        <button className="add-btn">Dodaj</button>
      </div>
    </>
  );
}
