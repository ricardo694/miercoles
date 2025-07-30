import React from 'react';
import '../assests/css/UserPanel.css';

const BienvenidaUsuario = () => {
  return (
    <div className="bienvenida-container">
      <div className="bienvenida-left">
        <h2 className="texto-bienvenida">BIENVENIDO USUARIO</h2>
      </div>
      <div className="bienvenida-right">
        <span> juegos en tu biblioteca</span>
      </div>
      <div className="bienvenida-left">
        <span> Juegos Comprados</span>
      </div>
    </div>
  );
};

export default BienvenidaUsuario;
