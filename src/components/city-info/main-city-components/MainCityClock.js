import React, { useState } from "react";

const MainCityClock = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="box__main clock">
      <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
};

export default MainCityClock;
