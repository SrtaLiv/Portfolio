import React, { useContext, useState } from 'react';
import { DarkModeContext } from "../../context/darkModeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

import "./navbar.scss";

function Nav() {
    const { toggle, darkMode } = useContext(DarkModeContext);

    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);
    return (
        <header>
            <nav className='nav container'>
                <a className="nav-logo" href='#'>Liv</a>

                <div className='nav-menu' id='nav-menu'>
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <Link to="inicio" smooth={true} duration={500}>
                                <a className='nav-link'>Inicio</a>
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='proyecto'>
                                <a className='nav-link'>Proyectos</a>
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='tecnologias-container'>
                                <a className='nav-link'>Sobre mi</a>
                            </Link>
                        </li>

                    </ul>
                </div>

                <div className='nav-item'>{darkMode ? (
                    <FontAwesomeIcon onClick={toggle} icon={faSun} />
                ) : (
                    <FontAwesomeIcon onClick={toggle} icon={faMoon} />
                )}
                </div>

            </nav>
        </header>
    );
}

export default Nav;

