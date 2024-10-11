export const convertDate = (dateString) => {
  const date = new Date(dateString);

  const options = {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "short",
    day: "2-digit",
    weekday: "long",
  };

  const day = date.toLocaleString("en-US", {
    timeZone: "Asia/Dhaka",
    day: "2-digit",
  });
  const month = date.toLocaleString("en-US", {
    timeZone: "Asia/Dhaka",
    month: "short",
  });
  const year = date.toLocaleString("en-US", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
  });
  const weekday = date.toLocaleString("en-US", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
  });

  return `${day} ${month}, ${year} (${weekday})`;
};
