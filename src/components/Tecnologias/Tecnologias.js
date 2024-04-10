import Tecnologia from '../Tecnologia/Tecnologia';
import './tecnologias.scss';
import tecnologiasData from './TecnologiasData';

function Tecnologias({ Tecnologias }) {
    return (
        <div className='tecnologias-container'>
            <h3>tecnologias</h3>
            <div className='tecnologias'>
                {/* {proyectosData.map(proyecto => (
                    <Tecnologia
                        key={proyecto.id}
                        titulo={proyecto.titulo}
                        descripcion={proyecto.descripcion}
                        tecnologias={proyecto.tecnologias}
                        imagenUrl={proyecto.imagenUrl}
                        enlace={proyecto.enlace}
                    />
                ))} */}
            </div>
        </div>
    )
}

export default Tecnologias;

