/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import "./Header.css";
import { GetDayNameToday, GetDayOfMouth } from "../../utils/getDate";

export function Header({ toggleSideModal, onAddTask }) {
  const [isAddTaskModalVisible, setIsAddTaskMOdalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function ToggleModalVisibility() {
    setIsAddTaskMOdalVisible((prevSet) => !prevSet);
  }

  function onHandleAddTaskToList() {
    if (inputValue.trim() !== "") {
      onAddTask(inputValue);
    }
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
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                className="subbmit-btn"
                onClick={() => {
                  onHandleAddTaskToList();
                  ToggleModalVisibility();
                }}
              >
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
            <div className="data-label">
              <GetDayOfMouth /> <GetDayNameToday />
            </div>
          </div>
        </div>
        <div className="header-part">
          <div className="amount-tast-cont font-style">
            <p>DZISIAJ</p>
            <div className="amount-task font-style"> {`2 zadań`}</div>
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
