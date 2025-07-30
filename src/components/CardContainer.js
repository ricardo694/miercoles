import React from 'react';
import '../assests/css/CardsContainer.css';

const productos = [
  {
    nombre: 'Cyber Hunter Elite',
    descripcion: 'Una experiencia gaming revolucionaria que redefine la diversión.',
    precio: '$49.99'
  },
  {
    nombre: 'Mystic Realms Adventure',
    descripcion: 'Una experiencia gaming revolucionaria que redefine la diversión.',
    precio: '$39.99'
  },
  {
    nombre: 'Neural Network Warfare',
    descripcion: 'Una experiencia gaming revolucionaria que redefine la diversión.',
    precio: '$34.99'
  }
];

const CardsContainer = () => {
  return (
    <div className="cards-container">
      {productos.map((producto, index) => (
        <div className="card" key={index}>
          <h3 className="card-title">{producto.nombre}</h3>
          <p className="card-description">{producto.descripcion}</p>
          <p className="card-price">{producto.precio}</p>
          <div className="card-buttons">
            <button className="edit-button">Editar</button>
            <button className="delete-button">🗑 Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
