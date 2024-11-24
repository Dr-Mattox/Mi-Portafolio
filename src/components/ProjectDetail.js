// src/components/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams();

  // Supongamos que tienes una función para obtener los detalles del proyecto
  const proyecto = {
    id: id,
    nombre: `Proyecto ${id}`,
    descripcion: `Descripción detallada del Proyecto ${id}`,
    componentes: ['Componente A', 'Componente B', 'Componente C'],
    // Agrega más detalles aquí
  };

  return (
    <div className="content">
      <h2>{proyecto.nombre}</h2>
      <p>{proyecto.descripcion}</p>
      <h3>Componentes utilizados:</h3>
      <ul>
        {proyecto.componentes.map((componente, index) => (
          <li key={index}>{componente}</li>
        ))}
      </ul>
      {/* Agrega más información o enlaces relevantes */}
    </div>
  );
}

export default ProjectDetail;
