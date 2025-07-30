import React from 'react';
import '../assests/css/NexusPlus.css';
import { Link } from 'react-router-dom';

const NexusPlus = () => {
  return (
    <section className="nexus-section">
      <div className="nexus-content">
        <span className="nexus-tag">Suscripción de Gaming</span>
        <h1 className="nexus-title">NEXUS+</h1>
        <p className="nexus-description">
          Desbloquea la experiencia de juego definitiva con acceso a más de 150 juegos premium, contenido exclusivo y nuevos lanzamientos el primer día.
        </p>
        <p className="nexus-price">
          Desde <span className="nexus-price-value">$12.99</span>/mes
        </p>
        <div className="nexus-buttons">
          <button className="btn-free-trial">Iniciar Prueba Gratuita</button>
          <Link to="/detalles-nexus" className="btn-learn-more">Saber Más</Link>
        </div>
      </div>
    </section>
  );
};

export default NexusPlus;
