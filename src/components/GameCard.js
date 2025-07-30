import React from 'react';
import '../assests/css/GameCard.css';

const GameCard = ({ juego }) => {
  return (
    <div className="game-card">
      <div className="etiqueta-descuento">-{juego.descuento}%</div>
      <img src={juego.imagen} alt={juego.titulo} className="game-image" />
      <div className="etiqueta-categoria">{juego.categoria}</div>

      <div className="game-info">
        <h3>{juego.titulo}</h3>
        <p>{juego.descripcion}</p>
        <div className="precios">
          <span className="precio-oferta">${juego.precioOferta}</span>
          <span className="precio-original">${juego.precioOriginal}</span>
        </div>
        <p className="fecha-compra">Comprado: {juego.fechaCompra}</p>
        <button className="btn-jugar">JUEGO COMPRADO</button>
      </div>
    </div>
  );
};

export default GameCard;
