// src/components/Contacto.js
import React from 'react';
import { FaInstagram, FaEnvelope, FaGithub, FaYoutube } from 'react-icons/fa';
import './Contacto.css';

function Contacto() {
  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <div className="iconos-contacto">
        <a
          href="https://www.instagram.com/mattos.a_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="icono instagram" />
        </a>
        <a href="mailto:demattosalex@gmail.com" aria-label="Correo electrónico">
          <FaEnvelope className="icono email" />
        </a>
        <a
          href="https://github.com/Dr-Mattox"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="icono github" />
        </a>
        <a
          href="https://youtube.com/@alex21734"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube className="icono youtube" />
        </a>
      </div>
    </div>
  );
}

export default Contacto;
