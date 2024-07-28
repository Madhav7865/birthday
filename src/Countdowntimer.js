import React, { useEffect, useState } from 'react';
import "./CountdownTimer.css"

function CountdownTimer({ targetDate, onFinish }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.total <= 0) {
        clearInterval(timer);
        onFinish();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onFinish]);

  function calculateTimeLeft(targetDate) {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        total: difference,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { total: 0 };
    }

    return timeLeft;
  }

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (interval !== 'total' && timeLeft[interval] !== undefined) {
      timerComponents.push(
        <span key={interval}>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    }
  });

  return (
    <div className="countdown-timer">
      <img src='./smradhi.jpg' className='smradhi' alt='Birthday'/>
      <div className="countdown-message">BIRTHDAY SOON !!!</div>
      <div className="countdown-time">
        {timerComponents.length > 0 ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
}

export default CountdownTimer;
