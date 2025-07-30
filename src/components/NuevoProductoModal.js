import React from 'react';
import '../assests/css/NuevoProductoModal.css';

const NuevoProductoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Crear Nuevo Producto</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <label htmlFor="titulo"><span>🏷️</span> Título</label>
          <input type="text" id="titulo" placeholder="Escribe el título..." />

          <label htmlFor="descripcion"><span>📝</span> Descripción</label>
          <textarea id="descripcion" placeholder="Escribe la descripción..."></textarea>

          <label htmlFor="precio"><span>$</span> Precio</label>
          <input type="number" id="precio" defaultValue={0} />
        </div>

        <div className="modal-footer">
          <button className="btn-crear">Crear</button>
          <button className="btn-cancelar" onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default NuevoProductoModal;
