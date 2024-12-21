// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); 

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.title = 'Textutils- dark mode '
    } else {
      setMode('light');
      document.title = 'Textutils- light mode '
    }
  };

  return (
    <Router>
      <Navbar title="My Website" home="Home" mode={mode} togglemode={togglemode} />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Textform heading="The Great Text App" mode={mode} />} />
      </Routes>
    </Router>
  );
}


export default App;
