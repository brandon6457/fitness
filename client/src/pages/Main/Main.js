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
    <>
    <div className="circle-container">
      <div className="circle">
        <p className="date">{date.toLocaleDateString()}</p>
      </div>
    </div>
    <div className="card">
        <h2 className='title'>Workout #1</h2>
        <p className='exercise'> 2 Mile Outdoor Run</p>
        <p className='calories'>200 calories Burned</p>
        <p className='time'>20 minutes</p>
        <button className='remove'>Remove</button>
      </div>
  </>
  );
};

export default Main;