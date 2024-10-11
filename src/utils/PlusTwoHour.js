export const plusTwoHours = (timeStr) => {
  let [hours, minutes] = timeStr?.split(":")?.map(Number);

  hours += 2;

  if (hours >= 24) {
    hours -= 24;
  }

  let newHours = String(hours)?.padStart(2, "0");
  let newMinutes = String(minutes)?.padStart(2, "0");

  return `${newHours}:${newMinutes}`;
};
