import React from 'react';
import styles from './Form.module.css';

const Detalle = () => {

  const {
    detalle_formulario,
    encabezado,
    datos_cliente,
    fila,
    boton_enviar
  } = styles;

  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.

  return (
    <div className={detalle_formulario}>
      <div className={encabezado}>
        <h3>Vista previa de la solicitud</h3>
      </div>
      <section className={datos_cliente}>
        <h4>Datos del entrenador</h4>
        <div className={fila}>
          <p>Nombre:</p>
          <p>Apellido:</p>
          <p>Email:</p>
        </div>
      </section>
      <section className={datos_cliente}>
        <h4>Datos del Pokémon</h4>
        <div className={fila}>
          <p>Nombre:</p>
        </div>
      </section>
      <button
        className={boton_enviar}
        onClick={() => alert('Solicitud enviada :)')}
      >
        Enviar solicitud
      </button>
    </div>
  );
};

export default Detalle;
