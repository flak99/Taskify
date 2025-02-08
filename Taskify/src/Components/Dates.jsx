import {
  GetDayNameToday,
  GetDayNameYesterday,
  GetDayNameTommorow,
} from "../utils/getDate";

export function Dates() {
  return (
    <>
      <div className="dates-background">
        <div className="dates-cont">
          <div className="date-view" id="date-yesterday">
            <p>01.01</p>

            <p>
              <GetDayNameYesterday />
            </p>
          </div>
          <div className="date-view" id="date-today">
            <p>01.02</p>
            <p>
              {" "}
              <GetDayNameToday />
            </p>
          </div>
          <div className="date-view" id="date-tomorrow">
            <p>01.02</p>
            <p>
              <GetDayNameTommorow />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
