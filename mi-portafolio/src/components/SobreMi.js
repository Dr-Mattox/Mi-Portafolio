// src/components/SobreMi.js
import React from 'react';
import './SobreMi.css';
import fotoPerfil from '../assets/tu-foto.jpg';

function SobreMi() {
  return (
    <div className="sobre-mi-container">
      <h2>Sobre Mí</h2>
      <img
        src={fotoPerfil}
        alt="Foto de Alex José De Mattos Pérez"
        className="foto-perfil"
      />
      <div className="texto-sobre-mi">
        <p>
          Alex José De Mattos Pérez nació el 13 de octubre de 2001 en Cancún, Quintana Roo, México, en una familia diversa y multicultural. Su padre es originario de Río de Janeiro, Brasil, mientras que su madre proviene de Ciénaga, Magdalena, Colombia. Además, tiene una hermana nacida en Caracas, Venezuela, lo que le ha proporcionado una perspectiva única y enriquecedora sobre diferentes culturas y tradiciones desde una edad temprana.
        </p>
        <p>
          Su educación primaria y secundaria la cursó en el Campo Escuela San José, mientras que completó la preparatoria en La Salle Cancún. Actualmente, Alex está cursando el sexto semestre de Ingeniería Mecatrónica en el Instituto Tecnológico de México, campus Cancún, donde demuestra un desempeño destacado y un ferviente interés por la ciencia y la tecnología.
        </p>
        <p>
          Desde temprana edad, Alex ha mostrado una pasión por el conocimiento y el aprendizaje, destacándose siempre por sus excelentes calificaciones y su dedicación académica. Su fascinación por la ciencia y las nuevas tecnologías lo llevó a elegir la ingeniería mecatrónica como campo de estudio, inspirado por la idea de crear nuevos inventos y explorar el mundo de los robots.
        </p>
        <p>
          A pesar de no haber tenido un trabajo fijo aún, Alex ha participado en varios empleos a tiempo parcial, mientras se concentra en sus estudios universitarios. Su enfoque en la excelencia académica y su participación en competencias de conocimiento, como representante de su escuela en el ANFEI, son testamento de su compromiso con el aprendizaje y el desarrollo personal.
        </p>
        <p>
          Fuera de su vida académica, Alex disfruta pasar tiempo con sus seres queridos, mostrando una naturaleza amigable y sociable que lo ha llevado a establecer relaciones sólidas con una amplia red de amigos. Además, dedica parte de su tiempo libre a actividades como ir al gimnasio, donde entrena regularmente con su novia, con quien comparte una relación cercana de casi dos años.
        </p>
        <p>
          Entre sus pasatiempos se encuentran los videojuegos, los cuales disfruta en los raros momentos de descanso que le brinda su apretada agenda. Además, Alex se enorgullece de su distintivo cabello chino, una característica compartida con su familia, que refleja su orgullo por sus raíces y su identidad única.
        </p>
        <p>
          Con su determinación, pasión por el conocimiento y habilidades interpersonales, Alex José De Mattos Pérez se perfila como un talento prometedor en el campo de la ingeniería, con un futuro brillante por delante.
        </p>
      </div>
    </div>
  );
}

export default SobreMi;
