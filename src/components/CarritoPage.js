import React from 'react';
import { useCart } from '../context/CartContext';
import '../assests/css/CarritoPage.css'; // Asegúrate de que exista este archivo

const CarritoPage = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calcular total
  const total = cartItems.reduce((acc, item) => {
    const precioNumerico = typeof item.precioDescuento === 'string'
  ? parseFloat(item.precioDescuento.replace('$', ''))
  : item.precioDescuento ?? (
      typeof item.precio === 'string'
        ? parseFloat(item.precio.replace('$', ''))
        : item.precio ?? 0
    );

    return acc + precioNumerico * item.cantidad;
  }, 0);

  return (
    <div className="carrito-page">
      <h2> Carrito </h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="carrito-lista">
            {cartItems.map((item) => (
              <div key={item.id} className="carrito-item">
                <img src={item.imagen} alt={item.nombre} />
                <div className="info">
                  <h3>{item.nombre}</h3>
                  <p>Precio: {item.precioDescuento || item.precio}</p>
                  <p>Cantidad: {item.cantidad}</p>
                  <button onClick={() => removeFromCart(item.id)}>❌ Quitar</button>
                </div>
              </div>
            ))}
          </div>

          {/* Total y Formulario de Pago */}
          <div className="formulario-pago">
            <h3>Método de Pago</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('✅ ¡Compra realizada con éxito!');
              }}
            >
              <div>
                <label>Nombre en la tarjeta:</label>
                <input type="text" required />
              </div>
              <div>
                <label>Número de tarjeta:</label>
                <input type="text" maxLength="16" required />
              </div>
              <div>
                <label>Fecha de expiración:</label>
                <input type="month" required />
              </div>
              <div>
                <label>Código CVV:</label>
                <input type="text" maxLength="3" required />
              </div>
              <div className="total-carrito">
                <strong>Total:</strong> ${total.toFixed(2)}
              </div>
              <button type="submit"> Pagar</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default CarritoPage;