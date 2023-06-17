import React from 'react';
import './globals.css';


const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
    <div className="navbar-brand">
      
      <h1>Kevan Herrera Pereira</h1>
      <h2>Bienvenido a Kevboot</h2>
    </div>
      <div className="navbar-buttons">
        <button id="app-info-btn">Información de la Aplicación</button>
        <button id="more-info-btn">Más Información</button>
      </div>
    </nav>
  );
};

export default Navbar;