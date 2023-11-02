import React, { useEffect, useState} from 'react'
import { WiMoonAltThirdQuarter } from "react-icons/wi"

const ThemeToggle = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    
    const themetoggle = () => {
        setTheme(theme === "dark" ? "light" : "dark",);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

  return (
    <div className='nav_ac' onClick={themetoggle}>
        <WiMoonAltThirdQuarter />
    </div>
  );
};

export default ThemeToggle