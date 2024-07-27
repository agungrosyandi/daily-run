import React, { useEffect, useState } from "react";

export default function DateAndTime() {
  const [showDate, setShowdate] = useState(new Date());

  const weekDay = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Juny",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = weekDay[showDate.getDay()];
  const month = months[showDate.getMonth()];
  const date = showDate.getDate();
  const year = showDate.getFullYear();

  useEffect(() => {
    const timer = setInterval(() => {
      setShowdate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center text-lime-100 gap-2">
      <p className="text-2xl tabletMinWidth:text-3xl laptopMinWidth:text-5xl desktopMinWidth:text-2xl ">
        {showDate.toLocaleTimeString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <small className="text-xs laptopMinWidth:text-lg desktopMinWidth:text-xs">{`${day} ${month} ${date} ${year} `}</small>
    </div>
  );
}
