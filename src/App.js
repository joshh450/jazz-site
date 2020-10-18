import React, { useState } from 'react';
import NoteLogo from './assets/images/note-logo.png'
import MountainLogo from './assets/images/mountain-logo.png'
import CityLogo from './assets/images/city-logo.png'
import Roster from './components/Roster';

function App() {
  const [mode, setMode] = useState('mountain')
  let currentMode = mode === 'note' ? 'note' : mode === 'mountain' ? 'mountain' : 'city'

  // const options = {
  //   method: 'GET',
  //   url: 'https://rapidapi.p.rapidapi.com/teams',
  //   params: {league: '12', season: '2019-2020'},
  //   headers: {
  //     'x-rapidapi-host': 'api-basketball.p.rapidapi.com',
  //     'x-rapidapi-key': '497120eb1emsh059a7c3f5c0f553p17615djsnbcd847f98997'
  //   }
  // };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

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

      <div className="page-content">
        <span>hi</span>
        <span>hi</span>
        <Roster />
      </div>
    </div>
  );
}

export default App;
