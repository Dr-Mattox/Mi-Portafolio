// src/components/ProjectList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectList() {
  const navigate = useNavigate();

  // Supongamos que tienes una lista de proyectos
  const proyectos = [
    { id: 1, nombre: 'Proyecto 1', descripcion: 'Descripción del Proyecto 1' },
    { id: 2, nombre: 'Proyecto 2', descripcion: 'Descripción del Proyecto 2' },
    // Agrega más proyectos aquí
  ];

  return (
    <div className="content">
      <h2>Mis Proyectos</h2>
      {proyectos.map((proyecto) => (
        <div key={proyecto.id} style={{ marginBottom: '20px' }}>
          <h3>{proyecto.nombre}</h3>
          <p>{proyecto.descripcion}</p>
          <button
            className="button"
            onClick={() => navigate(`/proyecto/${proyecto.id}`)}
          >
            Ver detalles
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
