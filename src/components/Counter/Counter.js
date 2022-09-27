import React, { useState, useEffect } from "react";
import "./Counter.css";
function Counter({ num, title }) {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    if (number < num) {
      setTimeout(incrementer, 10);
    }
    function incrementer() {
      setNumber(number + 1);
    }
  }, [number]);
  return (
    <div className="counter_wrapper">
      <span className="counter_number">{number}</span>
      <span className="counter_title">{title}</span>
      <span className="counter_plus">+</span>
    </div>
  );
}

export default Counter;
