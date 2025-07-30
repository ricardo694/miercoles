// OfertasSemanales.js
import React from 'react';
//css
import '../assests/css/OfertaSemanales.css';
//imgs
import Game1 from '../assests/img/game1.png';
import Game2 from '../assests/img/game2.png';
import Game3 from '../assests/img/game3.png';
import Game4 from '../assests/img/game4.png';



const juegos = [
  {
    id: 1,
    nombre: 'Far Cry 5',
    genero: 'Acción',
    descuento: '50%',
    precioDescuento: '$14.99',
    precioOriginal: '$29.99',
    rating: 4.8,
    imagen: Game1
  },
  {
    id: 2,
    nombre: 'The Crew 2',
    genero: 'Carreras',
    descuento: '67%',
    precioDescuento: '$12.99',
    precioOriginal: '$39.99',
    rating: 4.8,
    imagen: Game2, 
  },
  {
    id: 3,
    nombre: 'South Park: The Fracture...',
    genero: 'RPG',
    descuento: '67%',
    precioDescuento: '$9.99',
    precioOriginal: '$29.99',
    rating: 4.8,
    imagen: Game3,
  },
  {
    id: 4,
    nombre: 'Splinter Cell Blacklist',
    genero: 'Sigilo',
    descuento: '62%',
    precioDescuento: '$7.49',
    precioOriginal: '$19.99',
    rating: 4.8,
    imagen: Game4
  },
];

const OfertasSemanales = () => {
  return (
    <section className="ofertas-semanales">
      <div className="encabezado">
        <h2> Ofertas Semanales</h2>
        <span className="etiqueta-descuento">Hasta 67% de Descuento</span>
      </div>
      <div className="contenedor-cards">
        {juegos.map((juego) => (
          <div className="card-juego" key={juego.id}>
            <div className="imagen-contenedor">
              <span className="descuento">{`-${juego.descuento}`}</span>
              {juego.imagen ? (
                <img src={juego.imagen} alt={juego.nombre} />
              ) : (
                <div className="imagen-placeholder">
                  <i className="fas fa-image"></i>
                </div>
              )}
              <div className="info-genero">
                <span className="genero">{juego.genero}</span>
                <span className="rating"> {juego.rating}</span>
              </div>
              {juego.tieneTrailer && (
                <button className="btn-trailer">🎬 Tráiler</button>
              )}
            </div>
            <div className="info-juego">
              <h3>{juego.nombre}</h3>
              <p>Una experiencia gaming revolucionaria que redefine la...</p>
              <div className="precios">
                <span className="precio-descuento">{juego.precioDescuento}</span>
                <span className="precio-original">{juego.precioOriginal}</span>
              </div>
              <button className="btn-carrito"> Agregar al Carrito</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfertasSemanales;
