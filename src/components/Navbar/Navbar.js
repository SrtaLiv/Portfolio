import React, { useContext, useState } from 'react';
import { DarkModeContext } from "../../context/darkModeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import "./navbar.scss"; // Asegúrate de que la ruta sea correcta para tu archivo navbar.scss

function Nav() {
    const { toggle, darkMode } = useContext(DarkModeContext);

    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);
    return (
        <header>
            <nav className='navbar'>
                <h3>Olivia</h3>
                <ul>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Sobre mi</a></li>
                    <li><a href='#'>Contacto</a></li>
                    
                    <li>{darkMode ? (
                        <FontAwesomeIcon onClick={toggle} icon={faSun} />
                    ) : (
                        <FontAwesomeIcon onClick={toggle} icon={faMoon} />
                    )}</li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  