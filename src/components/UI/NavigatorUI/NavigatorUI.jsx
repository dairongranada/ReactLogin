import React from 'react';
import { Link } from 'react-router-dom';


export const NavigatorUI = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Registro">Registro</Link>
      <Link to="/Listar">Listar</Link>     
    </nav>
  )
}
