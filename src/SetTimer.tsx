import React, { ReactElement, useEffect, useState } from "react";

const SetTimer = (): ReactElement => {
  const [timer, setTimer] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(false);

  if (timerOn)
    setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);

  const handleStart = () => {
    setTimerOn(true);
  };
  const handleStop = () => {
    setTimerOn(false);
  };
  const handleReset = () => {
    setTimerOn(false);
    setTimer(0);
  };

  return (
    <div>
      <p>{timer}</p>
      <div>
        <button onClick={handleStart}>Start Timer</button>
        <button onClick={handleStop}>Stop Timer</button>
        <button onClick={handleReset}>Reset Timer</button>
      </div>
    </div>
  );
};

export default SetTimer;
