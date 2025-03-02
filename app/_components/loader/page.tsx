// ClockLoader.jsx (unchanged)
import React from "react";
import "./ClockLoader.css";

export default function Loader() {
  return (
    <div className="clock-loader">
      <div className="clock-face">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="hour-marker"
            style={{ transform: `rotate(${index * 30}deg)` }}
          />
        ))}
        <div className="hour-hand" />
        <div className="minute-hand" />
        <div className="center-dot" />
      </div>
    </div>
  );
}
