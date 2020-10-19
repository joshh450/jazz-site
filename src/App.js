import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Schedule from './components/Schedule';
import News from './components/News';
import Roster from './components/Roster';

function App() {
  const [mode, setMode] = useState('note')
  return (
    <div className={`App ${mode}-background`}>
      <Navbar mode={mode} setMode={setMode} />
      <div className="page-content">
        <Schedule mode={mode} />
        <News mode={mode} />
        <Roster mode={mode} />
      </div>
    </div>
  );
}

export default App;
