import React from "react";
import { Routes, Route } from 'react-router-dom';
//components
import Principal from "./pages/Principal";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import CarritoPage from "./components/CarritoPage";
import User from "./pages/User";
function App() {
  return (

  <div>
    <Routes>
      <Route path="/" element={<Principal/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/carrito" element={<CarritoPage/>}/>
      <Route path="/User" element={<User/>}/>
    </Routes>
  </div>
  );
}

export default App;
