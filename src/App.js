import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import About from './components/About';
import React, { useState } from 'react';
{/*import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";*/}

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    //<Router>
      <>
        <Navbar title="TextReframe" toggleMode={toggleMode} mode={mode} />
        <div className='container my-3'>
          {/*<Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={} />
          </Routes>*/}
          <TextForm heading="Enter the required text" mode={mode} />
        </div>
      </>
    //</Router>
  );
}

export default App;
