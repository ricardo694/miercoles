import React from 'react';
//css
import '../assests/css/Descatados.css';
//imgs
import Game1 from '../assests/img/game1.png';
import Game2 from '../assests/img/game2.png';
import Game3 from '../assests/img/game3.png';
import Game4 from '../assests/img/game4.png';
const juegos = [
  {
    id: 1,
    titulo: 'Cyber Hunter Elite',
    descripcion: 'Una experiencia gaming revolucionaria que redefine la diversión.',
    categoria: 'Acción',
    descuento: '-28%',
    precioNuevo: '$49.99',
    precioViejo: '$69.99',
    rating: 4.8,
    imagen: Game1
  },
  {
    id: 2,
    titulo: 'Mystic Realms Adventure',
    descripcion: 'Una experiencia gaming revolucionaria que redefine la diversión.',
    categoria: 'Aventura',
    descuento: '-33%',
    precioNuevo: '$39.99',
    precioViejo: '$59.99',
    rating: 4.8,
    imagen: Game2
  },
  {
    id: 3,
    titulo: 'Neural Network Warfare',
    descripcion: 'Una experiencia gaming revolucionaria que redefine la diversión.',
    categoria: 'Estrategia',
    descuento: '-36%',
    precioNuevo: '$34.99',
    precioViejo: '$54.99',
    rating: 4.8,
    imagen: Game3
  },
  {
    id: 4,
    titulo: 'Neural Network Warfare',
    descripcion: 'Una experiencia gaming revolucionaria que redefine la diversión.',
    categoria: 'Estrategia',
    descuento: '-36%',
    precioNuevo: '$34.99',
    precioViejo: '$54.99',
    rating: 4.8,
    imagen: Game4
  }
];

export default function Destacados() {
    return (
        <section className="destacados-container">
            <div className="destacados-header">
                <div >
                    <h2><span>🎮 Juegos </span><strong>Destacados</strong></h2>
                    <p>Descubre nuestros títulos más innovadores y populares. Cada juego seleccionado cuidadosamente para una experiencia épica.</p>
                </div>
                <div>
                    <button className="btn-epicas">⚡ Ofertas Épicas</button>
                </div>
            </div>
            <div className="juegos-grid">
                {juegos.map(juego => (
                <div className="juego-card" key={juego.id}>
                    <div className="imagen-juego" style={{ backgroundImage: `url(${juego.imagen})` }}>
                    <span className="descuento">{juego.descuento}</span>
                    <span className="categoria">{juego.categoria}</span>
                    <span className="rating">⭐ {juego.rating}</span>
                    <button className="favorito">♥</button>
                    </div>
                    <div className="info-juego">
                    <h3>{juego.titulo}</h3>
                    <p>{juego.descripcion}</p>
                    <div className="precios">
                        <span className="precio-nuevo">{juego.precioNuevo}</span>
                        <span className="precio-viejo">{juego.precioViejo}</span>
                    </div>
                    <button className="btn-carrito">🛒 Agregar al Carrito</button>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}
