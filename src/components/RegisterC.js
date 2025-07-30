import React from 'react'
import '../assests/css/Register.css'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className="login-container">
      <header className="login-header">
        <a href="/" className="back-link">← Volver al Inicio</a>
        <div className="logo-container">
          <h1 className="logo-text">NEXUS GAMES</h1>
        </div>
        <p className="subtitle">Tu plataforma gaming preferida</p>
      </header>

      <main className="login-form-container">
        <div className="login-form">
          <h2 className="form-title">Registrate</h2>
          <p className="form-subtitle">Accede a tu biblioteca gaming</p>

          <div className="input-group">
            <input type="text" placeholder="Nombre" />
          </div>

          <div className="input-group">

            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Contraseña" />
          </div>

          <button className="login-button">Crear Cuenta</button>

          <Link to='/Login'>
            <div className="register">
              <p className="register-link">¿Ya tienes cuenta?  Iniciar Sesión</p>
            </div>
          </Link>

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
  )
}

export default Register
