// src/components/Inicio.js
import React from 'react';

function Inicio() {
  return (
    <div className="content">
      <h2>Bienvenido a mi portafolio</h2>
      <p>Aquí encontrarás información sobre mis proyectos en ingeniería mecatrónica.</p>
      <button
        className="button"
        onClick={() => window.location.href = '/proyectos'}
      >
        Ver mis proyectos
      </button>
    </div>
  );
}

export default Inicio;
