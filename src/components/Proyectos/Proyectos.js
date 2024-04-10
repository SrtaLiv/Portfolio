import Proyecto from '../Proyecto/Proyecto';
import './proyectos.scss';
import proyectosData from './ProyectosData';

function Proyectos({ proyectos }) {
    return (
        <div className='proyectos-container'>
            <h3>Proyectos Terminados</h3>
            <div className='proyectos'>
                {proyectosData.map(proyecto => (
                    <Proyecto
                        key={proyecto.id}
                        titulo={proyecto.titulo}
                        descripcion={proyecto.descripcion}
                        tecnologias={proyecto.tecnologias}
                        imagenUrl={proyecto.imagenUrl}
                        enlace={proyecto.enlace}
                    />
                ))}
            </div>
        </div>
    )
}

export default Proyectos;

