import { useState, useEffect } from "react";

const getDayWithSuffix = (day) => {
  if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const useFormattedDate = () => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const day = getDayWithSuffix(date.getDate());
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    setFormattedDate(`${day} ${month} ${year}`);
  }, []);

  return formattedDate;
};

export default useFormattedDate;
