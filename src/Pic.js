import React, { useEffect } from 'react';
import './pic.css';

function Pic() {
  useEffect(() => {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.08}s`;
    });
  }, []);

  const note = "Heyyloo Smradhi. A very special day. You have been truly amazing and I cherish this bond between us. You have been there constantly with me. Just enjoy every moment of your life because zindagi na milegi doobara. I will always be grateful for this IK MULAQAAT. Enjoy your day. Happy Birthday Favourite ";

  return (
    <div className="pic-container">
      <img className="us" src="us.jpg" alt="Us" />
      <p className="note">
        {note.split('').map((char, index) => (
          <span key={index} className={`letter ${char === ' ' ? 'space' : ''}`}>{char}</span>
        ))}
        <span className="letter" style={{ animationDelay: `${note.length * 0.08}s` }}> 😊 🌸 😊</span>
      </p>
    </div>
  );
}

export default Pic;
