import React from 'react';
import { Link } from 'react-router-dom';
//css
import '../assests/css/Header.css'

//imagenes
import Carrito from '../assests/img/carrito.png';
import User from '../assests/img/user.png';
import Logo from '../assests/img/logo.png';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <div className='logo-container-header'>
                    <img className='logo' src={Logo} alt='logo' />
                   
                </div>
            </Link>

            <div className='links-container-header'>
                <Link to='/#Tienda'>
                    <div className='link-container'>
                        <p>Tienda</p>
                    </div>
                </Link>
                <div className='link-container'>
                    <p>NEXUS+</p>
                </div>
            </div>

            <div className='icon-container-header'>
                {/* ✅ Carrito con Link */}
                <Link to="/carrito">
                    <div className='icon-container'>
                        <img className='icon-header' src={Carrito} alt='icono de carrito' />
                    </div>
                </Link>

                {/* Usuario/Login */}
                <Link to='/Login'>
                    <div className='icon-container'>
                        <img className='icon-header' src={User} alt='icono de usuario' />
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;