import './tecnologia.scss';

const Tecnologia = ({ titulo, descripcion, tecnologias, imagenUrl, enlace }) => {
    return (
        <div className='tecnologia'>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <p>Tecnologías: {tecnologias.join(', ')}</p>
            <img src={imagenUrl} alt='Imagen del proyecto' />
            <a href={enlace}>Ver más</a>
        </div>
    );
}

export default Tecnologia;


