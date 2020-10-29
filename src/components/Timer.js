import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        setSecond(second => second + 1);
        if (second >= 59) {
          setSecond(0);
          setMinute(minute => minute + 1);
          if (minute >= 59) {
            setMinute(0);
            setHour(hour => hour + 1);
          }
        }
      }, 1000);
    };

    return () => clearInterval(intervalId);

  }, [isActive, second, minute, hour]);

  const stopTimer = () => {
    setIsActive(false);
    setSecond(0);
    setMinute(0);
    setHour(0)
  }
  //start = onClick={() => setIsActive(!isActive)}
  // end = onClick={() => stopTimer()}
  return (
    <>
      {hour < 10 ? '0' + hour : hour}:{minute < 10 ? '0' + minute : minute}:{second < 10 ? '0' + second : second}
    </>
  )
}

export default Timer;