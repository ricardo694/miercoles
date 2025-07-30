import React from "react";
import { Routes, Route } from 'react-router-dom';
//components
import Principal from "./pages/Principal";
import Login from "./components/Login";
function App() {
  return (

  <div>
    <Routes>
      <Route path="/" element={<Principal/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
  </div>
  );
}

export default App;
