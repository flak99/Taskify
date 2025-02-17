/* eslint-disable react/prop-types */
import { SlArrowLeft } from "react-icons/sl";

export function SideMenu({ toggleSideModalFalse }) {
  const username = "Krystian";
  return (
    <>
      <div className="side-menu-container">
        <div className="exit-icon" onClick={toggleSideModalFalse}>
          {" "}
          <SlArrowLeft size={20} />
        </div>
        <p className="welcome-sentence">Cześć {username}, twój poziom</p>
        <div className="lvl-container">
          <div className="lvl">2</div>
        </div>
        <div className="exp-bar"></div>
      </div>
    </>
  );
}
