import React, { useContext, useState } from 'react';
import { DarkModeContext } from "../../context/darkModeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import "./navbar.scss"; 

function Nav() {
    const { toggle, darkMode } = useContext(DarkModeContext);

    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);
    return (
        <header>
            <h3>Liv</h3>
            <nav className='navbar'>
                <ul>
                    <li>
                        <Link to="inicio" smooth={true} duration={500}>
                            <a>Inicio</a>
                        </Link>
                    </li>

                    <li>
                        <Link to='proyecto'>
                            <a>Proyectos</a>
                        </Link>
                    </li>

                    <li>
                        <Link to='tecnologias-container'>
                            <a>Sobre mi</a>
                        </Link>
                    </li>

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

