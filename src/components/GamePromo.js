import React from 'react';
import '../assests/css/GamePromo.css';
import gamerImg from '../assests/img/gamer.jpg'; // reemplaza con tu imagen real

const GamePromo = () => {
  return (
    //container
    <div className="promo-container">

        <div className="promo-left">
            <span className="badge">🔥 Nuevo Lanzamiento</span>
            <h1><span className="title-highlight">Cyber Hunter</span> Elite</h1>
            <p>Sumérgete en un mundo <span className="text-tech">cyberpunk</span> donde la <span className="text-human">tecnología</span> y la <span className="text-human">humanidad</span> chocan en batallas épicas. Personaliza tu hunter y conquista Neo-Tokyo.</p>
            <div className="tags">
                <span>⭐ 9.5/10</span>
                <span>🎮 Multijugador</span>
                <span>⚡ Ray Tracing</span>
            </div>
            <div className="price-box">
                <span className="price">$49.99</span>
                <span className="old-price">$69.99</span>
                <span className="discount">-28% OFF</span>
            </div>
            <p className="note">Oferta especial de lanzamiento • Termina en 48 horas</p>
            <div className="buttons">
                <button className="btn primary">Comprar Ahora</button>
                <button className="btn secondary">🎬 Ver Tráiler</button>
            </div>
        </div>

      <div className="promo-right">
        <img src={gamerImg} alt="Jugador" className="game-image" />
        <div className="badge-right">🟢 En Línea</div>
        <div className="achievement-card">⭐ Logro: Hunter Elite</div>
        <div className="xp-card">+2,500 XP</div>
        <div className="version">Neural Interface v3.0 - Activado ⚡</div>
      </div>
    </div>
  );
};

export default GamePromo;