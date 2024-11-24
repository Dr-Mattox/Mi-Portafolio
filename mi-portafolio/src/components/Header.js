// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importamos los estilos específicos del header
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <h1>Mi Portafolio</h1>
      {/* Menú de navegación con botones */}
      <nav className="nav-buttons">
        <Link to="/" className="nav-button">
          <FaHome style={{ marginRight: '8px' }} />
          Inicio
        </Link>
        <Link to="/proyectos" className="nav-button">
          <FaProjectDiagram style={{ marginRight: '8px' }} />
          Proyectos
        </Link>
        <Link to="/sobre-mi" className="nav-button">
          <FaUser style={{ marginRight: '8px' }} />
          Sobre Mí
        </Link>
        <Link to="/contacto" className="nav-button">
          <FaEnvelope style={{ marginRight: '8px' }} />
          Contacto
        </Link>
      </nav>
    </header>
  );
}

export default Header;
