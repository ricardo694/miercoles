import React from 'react';
import '../assests/css/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <header className="login-header">
        <a href="/" className="back-link">← Volver al Inicio</a>
        <div className="logo-container">
          <div className="logo-icon">⚡</div>
          <h1 className="logo-text">NEXUS GAMES</h1>
        </div>
        <p className="subtitle">Tu plataforma gaming preferida</p>
      </header>

      <main className="login-form-container">
        <div className="login-form">
          <h2 className="form-title">Iniciar Sesión</h2>
          <p className="form-subtitle">Accede a tu biblioteca gaming</p>

          <div className="input-group">
            <span className="input-icon">✉</span>
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="Contraseña" />
            <span className="eye-icon">👁</span>
          </div>

          <div className="options">
            <label><input type="checkbox" /> Recordarme</label>
            <a href="#" className="forgot-link">¿Olvidaste tu contraseña?</a>
          </div>

          <button className="login-button">Iniciar Sesión</button>

          <div className="register">
            <p>¿No tienes cuenta? <a href="#" className="register-link">Crear cuenta nueva</a></p>
          </div>

          <div className="separator">
            <hr /><span>O continúa con</span><hr />
          </div>

          <div className="social-buttons">
            <button className="social-btn">Google</button>
            <button className="social-btn">Steam</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
