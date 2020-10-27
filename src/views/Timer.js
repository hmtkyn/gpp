import React, { useEffect, useRef, useState } from 'react';

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const secondRef = useRef(second);
  secondRef.current = second;


  useEffect(() => {
    var timer;
    if (second) {
      timer = setTimeout(function () {
        setSecond(second => second + 1);
        if (second >= 60) {
          setSecond(0);
          setMinute(minute + 1);
          if (minute >= 60) {
            setMinute(0);
            setHour(hour + 1);
          }
        }
      }, 100);
      return clearTimeout(timer);
    }
  }, [])

  const startTimer = () => setSecond(second + 1);
  const endTimer = () => setSecond(0);

  return (
    <>
      <p>
        Hours: {hour}
      </p>
      <p>
        Minutes: {minute}
      </p>
      <p>
        Seconds: {second}
      </p>
      <hr />
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => endTimer()}>End</button>
    </>
  )
}

export default Timer;