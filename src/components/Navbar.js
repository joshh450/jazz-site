import React from 'react'
import NoteLogo from '../assets/images/note-logo.png'
import MountainLogo from '../assets/images/mountain-logo.png'
import CityLogo from '../assets/images/city-logo.png'

const Navbar = ({ mode, setMode }) => {

    const changeMode = () => {
        mode === 'note' && setMode('mountain')
        mode === 'mountain' && setMode('city')
        mode === 'city' && setMode('note')
    }

    return (
        <nav className={`${mode}-navbar`}>
            <img 
                src={mode === 'note' ? NoteLogo : mode === 'mountain' ? MountainLogo : CityLogo} alt="Logo"
                className={`${mode}-logo`}
            />
            <div className="mode-toggle-desktop">
                <span 
                    className={`toggle ${mode === 'note' && 'note-toggle-active'}`} 
                    onClick={() => setMode('note')}
                >
                    Note Mode
                </span>
                <span 
                    className={`toggle ${mode === 'mountain' && 'mountain-toggle-active'}`} 
                    onClick={() => setMode('mountain')}
                >
                    Mountain Mode
                </span>
                <span 
                    className={`toggle ${mode === 'city' && 'city-toggle-active'}`} 
                    onClick={() => setMode('city')}
                >
                    City Mode
                </span>
            </div>
            <button onClick={() => changeMode()} className={`mode-toggle-mobile ${mode}-toggle-active`}>
                {mode.charAt(0).toUpperCase() + mode.slice(1)} Mode
            </button>
        </nav>
    )
}

export default Navbar;
