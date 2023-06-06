import React, { useState, useEffect } from 'react';
import './Main.css';

const Main = () => {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="circle-container">
      <div className="circle">
        <p className="date">{date.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Main;
