import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
