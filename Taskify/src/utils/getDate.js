const daysName = ["NIE", "PO", "WT", "ŚR", "CZW", "PI", "SOB"];
let date = new Date();

export function GetDayNameYesterday() {
  let day = date.getDay();
  let yesterday;

  if (day === 0) {
    return (yesterday = daysName[6]);
  } else {
    yesterday = daysName[day - 1];
  }

  return yesterday;
}

export function GetDayNameToday() {
  let day = date.getDay();
  let today = daysName[day];

  return today;
}

export function GetDayNameTommorow() {
  let day = date.getDay();
  let tommorow;
  if (day === 6) {
    return (tommorow = daysName[0]);
  } else {
    tommorow = daysName[day + 1];
  }

  return tommorow;
}
