import { GetDayNameToday, GetDateFormatToday } from "../utils/getDate";

export function Dates() {
  return (
    <>
      <div className="dates-background">
        <div className="dates-cont">
          <div className="date-view" id="date-today">
            <p>
              <GetDateFormatToday />
            </p>
            <p>
              {" "}
              <GetDayNameToday />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
