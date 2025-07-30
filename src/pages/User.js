import React from 'react'
import Header from '../components/Header';
import UserPanel from '../components/UserPanel';
import ListaJuegos from '../components/ListaJuegos';

const Admin = () => {
  return (
    <div>
        <Header/>
        <UserPanel/>
        <ListaJuegos/>
    </div>
  )
}

export default Admin
