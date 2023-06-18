"use client"
import React, { useState } from 'react';
import './globals.css';


const Navbar: React.FC = () => {
  

  const [showInfo, setShowInfo] = useState(false);


  const handleAppInfoClick = () => {
    setShowInfo(!showInfo);
  };


  return (
    <nav className="navbar">
    <div className="navbar-brand">
      
      <h1>Kevan Herrera Pereira</h1>
      <h2>Bienvenido a Kevboot</h2>
    </div>
    <nav className="navbar">
      <div className="navbar-brand">
      
      </div>
      <div className="navbar-buttons">
        <button onClick={handleAppInfoClick}>Información de la Aplicación</button>
        
      </div>
      {showInfo && (
        <div className="info-content">
          
          {<h1>Esta es un pequeño chat boot hecho por un estudiante de la universidad nacional el objetivo es que puedas interartuar con el chatboot </h1> }
        </div>
      )}
      
    </nav>
    </nav>
  );
};

export default Navbar;