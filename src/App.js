import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Homepage';
import Pic from './Pic';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      {/* The persistent audio player */}
      <audio className="song" controls loop style={{ display: 'none' }}>
        <source src="hbd.mp3" />
        Your browser isn't supported for this Audio!!
      </audio>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pic" element={<Pic />} />
      </Routes>
    </Router>
  );
}

export default App;
