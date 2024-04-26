import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './inicio.scss';
import { text } from '@fortawesome/fontawesome-svg-core';

function Inicio() {
    return (
        <div className='inicio'>
            <h1>Hola! soy<span> Ana Olivia Todesco</span></h1>
            <h2>Desarrollo aplicaciones de software</h2>
            <h2>Full Stack developer</h2>

            <a href='/about'>Leer mas sobre mi →</a>

            <img alt="Abre foto de perfil" draggable="true" src="https://pbs.twimg.com/profile_images/1770285890998296576/UJM16-fy_200x200.jpg" />
        </div>
    )
}

export default Inicio;

