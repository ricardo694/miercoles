
import React from 'react';
import '../assests/css/UsuariosPanel.css'; 

const usuarios = [
  { id: 1, nombre: 'Juan Pérez', correo: 'juan@example.com', registro: '14/1/2024', estado: 'activo' },
  { id: 2, nombre: 'María García', correo: 'maria@example.com', registro: '19/1/2024', estado: 'activo' },
  { id: 3, nombre: 'Carlos López', correo: 'carlos@example.com', registro: '31/1/2024', estado: 'inactivo' },
];

const UsuariosPanel = () => {
  return (
    <div className="usuarios-panel">
      <div className="main-header">
        <div>
            <h2>Gestión de Usuarios</h2>
            <p>Administra los usuarios registrados</p>
        </div>
      </div>
      <div className="usuarios-flex">
        {usuarios.map(user => (
          <div key={user.id} className="user-card">
            <div className="avatar">👤</div>
            <div className="user-info">
              <strong>{user.nombre}</strong>
              <p>{user.correo}</p>
            </div>
            <div className="user-actions">
              <button className="edit-btn"> Editar</button>
              <button className="delete-btn"> Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsuariosPanel;
