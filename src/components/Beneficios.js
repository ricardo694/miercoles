import React from 'react';
import '../assests/css/Beneficios.css';

const beneficios = [
  {
    icono: '📦',
    titulo: 'Descargas Gratuitas',
    descripcion: 'Acceso instantáneo a tus juegos después de la compra',
  },
  {
    icono: '🏷️',
    titulo: 'Ofertas Exclusivas',
    descripcion: 'Descuentos solo para miembros y acceso anticipado',
  },
  {
    icono: '⭐',
    titulo: 'Acceso Ubisoft+',
    descripcion: 'Juega más de 100 juegos con suscripción',
  },
];

const Beneficios = () => {
  return (
    <section className="beneficios-container">
      {beneficios.map((item, index) => (
        <div key={index} className="beneficio-card">
          <div className="icono">{item.icono}</div>
          <h3>{item.titulo}</h3>
          <p>{item.descripcion}</p>
        </div>
      ))}
    </section>
  );
};

export default Beneficios;
