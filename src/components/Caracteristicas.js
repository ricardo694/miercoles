import React from 'react';
import '../assests/css/Caracteristicas.css';

const caracteristicas = [
  {
    icono: '▶',
    titulo: 'Acceso Instantáneo',
    descripcion: 'Juega inmediatamente sin esperar descargas',
  },
  {
    icono: '⬇',
    titulo: '150+ Juegos Premium',
    descripcion: 'Acceso a nuestra biblioteca completa de títulos AAA',
  },
  {
    icono: '🔗',
    titulo: 'Múltiples Plataformas',
    descripcion: 'Juega en PC, consola y dispositivos móviles',
  },
  {
    icono: '🚫',
    titulo: 'Sin Anuncios',
    descripcion: 'Disfruta de una experiencia de juego ininterrumpida',
  }
];

const Caracteristicas = () => {
  return (
    <section className="caracteristicas">
      <div className="grid-caracteristicas">
        {caracteristicas.map((item, index) => (
          <div className="tarjeta" key={index}>
            <div className="icono-circulo">{item.icono}</div>
            <h3 className="titulo-tarjeta">{item.titulo}</h3>
            <p className="descripcion-tarjeta">{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Caracteristicas;
