import React ,{useState}from 'react';
import CardsContainer from '../components/CardContainer';
import NuevoProductoModal from './NuevoProductoModal';
import UsuariosPanel from './UsuariosPanel';
import '../assests/css/AdminPanel.css';

const AdminPanel = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [vistaActiva, setVistaActiva] = useState('productos');
  return (
    <div className="admin-panel">
      <header className="header-admin">
        <h1>🎮 Panel de Administración</h1>
        <p>Bienvenido al sistema de administración. Gestiona productos y usuarios desde aquí.</p>
      </header>

      <nav className="nav-admin">
        <button 
          className={`tab ${vistaActiva === 'productos' ? 'active' : ''}`} 
          onClick={() => setVistaActiva('productos')}
        >
          🟣 Productos
        </button>
        <button 
          className={`tab ${vistaActiva === 'usuarios' ? 'active' : ''}`} 
          onClick={() => setVistaActiva('usuarios')}
        >
          👤 Usuarios
        </button>
      </nav>

            <main className="main-admin">
        {vistaActiva === 'productos' && (
          <>
            <div className="main-header">
              <div>
                <h2>Gestión de Productos</h2>
                <p>Administra el catálogo de productos</p>
              </div>
              <button 
                className='new-product-button' 
                onClick={() => setModalAbierto(true)}
              >
                Nuevo Producto
              </button>
            </div>
            <CardsContainer />
          </>
        )}

        {vistaActiva === 'usuarios' && (
          <>
            <UsuariosPanel />
          </>
        )}
      </main>

      <div>
        <NuevoProductoModal
          isOpen={modalAbierto}
          onClose={() => setModalAbierto(false)}
        />
      </div>
     
    </div>
  );
};

export default AdminPanel;
