import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './inicio.scss';
import { text } from '@fortawesome/fontawesome-svg-core';

function Inicio() {
    return (
        <div className='inicio'>
            <h1>Ana Olivia Todesco</h1>
            <h2> Full Stack Developer</h2>
            <a href='/about'>Leer mas sobre mi →</a>

            {/* <motion.div
                className='cursor'
                variants={variants}
                initial="default"
                animate={cursorVariant}
            /> */}

            <a href='https://www.youtube.com/watch?v=nr3U-RpaQuM&ab_channel=CandDev'>ME QUEDE EN MINUTO 10:38</a>
        </div>
    )
}

export default Inicio;

