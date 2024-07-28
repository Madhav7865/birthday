import React, {useEffect } from 'react'
import './pic.css';

function Pic() {
  useEffect(() => {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`; // Delay each letter's animation
    });
}, []);
    
      const note = "Heyyloo Smradhi. A very special day ";
    
  return (
    <div className="pic-container">
      <img className="us" src="us.jpg" alt="Us" />
      <p className="note">
        {note.split('').map((char, index) => (
          <span key={index} className={`letter ${char === ' ' ? 'space' : ''}`}>{char}</span>
        ))}
      </p>
    </div>
  )
}

export default Pic