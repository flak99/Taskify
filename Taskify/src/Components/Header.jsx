import { IoMenuSharp } from "react-icons/io5";

export function Header() {
  return (
    <>
      <header>
        <div className="header-part">
          <div className="menu-bar">
            <IoMenuSharp size={50} />
          </div>
          <div className="data-cont">
            <div className="data-label">2 LUT</div>
          </div>
        </div>
        <div className="header-part">
          <div className="amount-tast-cont font-style">
            <p>DZISIAJ</p>
            <div className="amount-task font-style"> 0 zadań</div>
          </div>
          <div className="add-task-btn-cont">
            <button className="add-task-btn">+ Dodaj Zadanie</button>
          </div>
        </div>
      </header>
    </>
  );
}
