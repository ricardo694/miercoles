import React from 'react';
import GameCard from './GameCard';
import '../assests/css/GameCard.css';
//imagenes
import Game1 from '../assests/img/game1.png';
import Game2 from '../assests/img/game2.png';
import Game3 from '../assests/img/game3.png';
import Game4 from '../assests/img/game4.png';

const juegos = [
  {
    titulo: "Cyber Hunter Elite",
    descripcion: "Una experiencia gaming revolucionaria que redefine el desarrollo.",
    descuento: 33,
    precioOferta: "39.99",
    precioOriginal: "59.99",
    fechaCompra: "15 Dic 2024",
    categoria: "ACCIÓN",
    imagen: Game1
  },
  {
    titulo: "Mystic Realms Adventure",
    descripcion: "Una experiencia gaming revolucionaria que redefine el desarrollo.",
    descuento: 40,
    precioOferta: "29.99",
    precioOriginal: "49.99",
    fechaCompra: "10 Dic 2024",
    categoria: "RPG",
    imagen: Game2
  },
  {
    titulo: "Neural Network Warfare",
    descripcion: "Una experiencia gaming revolucionaria que redefine el desarrollo.",
    descuento: 36,
    precioOferta: "34.99",
    precioOriginal: "54.99",
    fechaCompra: "08 Dic 2024",
    categoria: "ESTRATEGIA",
    imagen: Game3
  },
  {
    titulo: "Quantum Racing Championship",
    descripcion: "Una experiencia gaming revolucionaria que redefine el desarrollo.",
    descuento: 31,
    precioOferta: "44.99",
    precioOriginal: "64.99",
    fechaCompra: "05 Dic 2024",
    categoria: "CARRERAS",
    imagen: Game4
  }
];

const ListaJuegos = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {juegos.map((juego, i) => (
        <GameCard key={i} juego={juego} />
      ))}
    </div>
  );
};

export default ListaJuegos;