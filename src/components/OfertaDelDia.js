import React from 'react';
import '../assests/css/OfertaDelDia.css';
import  { useEffect } from 'react';


function OfertaDelDia() {
    useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <div className="oferta-container">
      <h2 className="oferta-titulo" id='Tienda'>Tienda Nexus</h2>
      <p className="oferta-subtitulo">Descubre ofertas increíbles y promociones exclusivas</p>

      <div className="oferta-etiqueta">
        <span className="oferta-icono">🕒</span>
        <span>Oferta del Día</span>
        <span className="oferta-limited">Tiempo Limitado</span>
      </div>

      <div className="oferta-card">
        <div className="oferta-img" />
        <div className="oferta-info">
          <span className="oferta-descuento">-67% DESCUENTO</span>
          <h3>Assassin's Creed Odyssey</h3>
          <p>
            Embárcate en una odisea para forjar tu camino y convertirte en un héroe griego legendario.
            Tus decisiones importan en esta aventura épica.
          </p>
          <div className="oferta-precio">
            <span className="precio-final">$19.99</span>
            <span className="precio-original">$59.99</span>
          </div>
          <button className="oferta-boton">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  );
}

export default OfertaDelDia;
