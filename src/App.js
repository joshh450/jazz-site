import React, { useState } from 'react';
import NoteLogo from './assets/images/note-logo.png'
import MountainLogo from './assets/images/mountain-logo.png'
import CityLogo from './assets/images/city-logo.png'

function App() {
  const [mode, setMode] = useState('mountain')
  let currentMode = mode === 'note' ? 'note' : mode === 'mountain' ? 'mountain' : 'city'
  return (
    <div className={`App ${currentMode}-background`}>
      <nav className={`${currentMode}-navbar`}>
        <img 
          src={mode === 'note' ? NoteLogo : mode === 'mountain' ? MountainLogo : CityLogo} alt="Logo"
          className={`${currentMode}-logo`}
        />
        <div className="mode-toggle">
          <span 
            className={`toggle ${currentMode === 'note' && 'note-toggle-active'}`} 
            onClick={() => setMode('note')}
          >
            Note Mode
          </span>
          <span 
            className={`toggle ${currentMode === 'mountain' && 'mountain-toggle-active'}`} 
            onClick={() => setMode('mountain')}
          >
            Mountain Mode
          </span>
          <span 
            className={`toggle ${currentMode === 'city' && 'city-toggle-active'}`} 
            onClick={() => setMode('city')}
          >
              City Mode
          </span>
        </div>
      </nav>
    </div>
  );
}

export default App;
