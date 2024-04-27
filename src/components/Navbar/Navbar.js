import React, { useContext, useState } from 'react';
import { DarkModeContext } from "../../context/darkModeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                                <a className='nav-link'>
                                    <FontAwesomeIcon className='nav-icon' icon="fa-solid fa-house" />
                                    Inicio
                                </a>
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='proyecto'>
                                <a className='nav-link'>
                                    <FontAwesomeIcon className='nav-icon' icon="fa-solid fa-diagram-project" />
                                    Proyectos
                                </a>
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='tecnologias-container'>
                                <a className='nav-link'>
                                    <FontAwesomeIcon className='nav-icon' icon="fa-solid fa-heart" />
                                    Sobre mi
                                </a>
                            </Link>
                        </li>

                    </ul>
                </div>

                <div className='nav-item'>{darkMode ? (
                    <FontAwesomeIcon onClick={toggle} icon="fa-solid fa-sun" />
                ) : (
                    <FontAwesomeIcon onClick={toggle} icon="fa-solid fa-moon" />
                )}
                </div>

            </nav>
        </header>
    );
}

export default Nav;

