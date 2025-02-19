/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import "./Header.css";

export function Header({ toggleSideModal }) {
  const [isAddTaskModalVisible, setIsAddTaskMOdalVisible] = useState(false);

  function ToggleModalVisibility() {
    setIsAddTaskMOdalVisible((prevSet) => !prevSet);
  }

  return (
    <>
      <header>
        {isAddTaskModalVisible && (
          <div className="add-task-modal-cont">
            <div className="modal-depe">
              <input
                type="text"
                className="task-input"
                placeholder="Dodaj Zadanie"
              />
              <button className="subbmit-btn" onClick={ToggleModalVisibility}>
                Dodaj Zadanie
              </button>
            </div>
          </div>
        )}
        <div className="header-part">
          <div className="menu-bar" onClick={toggleSideModal}>
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
            <button className="add-task-btn" onClick={ToggleModalVisibility}>
              + Dodaj Zadanie
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
