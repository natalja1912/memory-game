import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

export default function Timer({ expiryTimestamp, pauseTimer, startNewGame }) {
  const { seconds, minutes, start, restart, pause } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called")
  });

  useEffect(() => {
    if (!pauseTimer) {
      pause();
    }
  }, [pauseTimer]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: 0
      }}
    >
      <div style={{ fontSize: "20px", margin: "10px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button
        className="App__button"
        onClick={() => {
          start();
          startNewGame();
        }}
      >
        СТАРТ
      </button>
      <button
        className="App__button"
        onClick={() => {
          const time = new Date();
          time.setSeconds(time.getSeconds() + 600);
          restart(time);
          startNewGame();
        }}
      >
        НОВАЯ ИГРА
      </button>
    </div>
  );
}
