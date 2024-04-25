import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Navbar/Navbar.js";
import React, { useContext } from 'react';
import './style.scss';
import { DarkModeContext } from "./context/darkModeContext";
import Inicio from './components/Inicio/Inicio.js';
import Proyectos from './components/Proyectos/Proyectos.js';
import Tecnologias from './components/Tecnologias/Tecnologias.js';
import Footer from './components/Footer/Footer.js';

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'


//browserroute rnos permite
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Nav />

      <section id="inicio">
        <Inicio />
      </section>
      
      <section id="proyecto">
      <Proyectos />
      </section>


      <section id="tecnologias-container">
      <Tecnologias />
      </section>

      <Footer/>
    </div>
  );
}

export default App;
