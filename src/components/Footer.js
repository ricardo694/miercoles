import React from 'react';
import '../assests/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-section brand">
          <div className="logo">
            <span className="icon">⚡</span>
            <span className="name">NEXUS GAMES</span>
          </div>
          <p>
            Conectando mundos. <br />
            Creando experiencias épicas. <br />
            Redefiniendo el gaming. <br />
            Somos pioneros en entretenimiento interactivo <br />
            del futuro donde cada jugador es una leyenda.
          </p>
        </div>

        <div className="footer-section links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li>Juegos</li>
            <li>Tienda</li>
            <li>NEXUS+</li>
            <li>Desarrolladores</li>
            <li>Empleos</li>
            <li>Soporte</li>
          </ul>
        </div>

        <div className="footer-section links">
          <h4>Gaming</h4>
          <ul>
            <li>Mi Biblioteca</li>
            <li>Lista de Deseos</li>
            <li>Logros</li>
            <li>Torneos Épicos</li>
            <li>Comunidad</li>
            <li>Streaming</li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h4>Mantente Conectado</h4>
          <p>
            Recibe las últimas noticias épicas, ofertas exclusivas y contenido premium de NEXUS GAMES.
          </p>
          <input type="email" placeholder="Tu email épico..." />
          <button>Unirse a la Épica</button>
          <div className="join-note">
            <i className="fas fa-heart" /> +50,000 gamers épicos ya se unieron
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2024 NEXUS GAMES. Todos los derechos reservados.</p>
        <div className="legal-links">
          <a href="#">Términos de Servicio</a>
          <a href="#">Política de Privacidad</a>
        </div>
        <p>Hecho con <i className="fas fa-heart" /> para gamers épicos</p>
      </div>
    </footer>
  );
};

export default Footer;
