// Names of days

const daysName = [
  "NIEDZIELA",
  "PONIEDZIAŁEK",
  "WTOREK",
  "ŚRODA",
  "CZWARTEK",
  "PIĄTKE",
  "SOBOTA",
];

let date = new Date();

export function GetDayNameToday() {
  let day = date.getDay();
  let today = daysName[day];

  return today;
}

// Foramt of the data input (exp. 01.02)

export function GetDateFormatToday() {
  const date = new Date();
  const mouthNumber = date.getMonth() + 1;
  const dayNumber = date.getDate();

  return `${dayNumber < 10 ? "0" + dayNumber : dayNumber}.${
    mouthNumber < 10 ? "0" + mouthNumber : mouthNumber
  }`;
}

// Day of mouth

export function GetDayOfMouth() {
  let date = new Date();
  let day = date.getDate();
  return day;
}
