import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Navbar/Navbar.js";
import React, { useContext} from 'react';
import './style.scss';
import { DarkModeContext } from "./context/darkModeContext";
import Inicio from './components/Inicio/Inicio.js';
import Proyectos from './components/Proyectos/Proyectos.js';
import Tecnologias from './components/Tecnologias/Tecnologias.js';


//browserroute rnos permite
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Nav />
      <Inicio />
      <Proyectos/>
      <Tecnologias/>
    </div>
  );
}

export default App;
