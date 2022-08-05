import React, { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

import styles from './Form.module.css';

const Detalle = () => {

  const {
    detalle_formulario,
    encabezado,
    datos_cliente,
    fila,
    boton_enviar
  } = styles;

  // obtener los datos del formulario para mostrarlo en la vista previa.
  const { state } = useContext(FormContext)

  return (
    <div className={detalle_formulario}>
      <div className={encabezado}>
        <h3>Vista previa de la solicitud</h3>
      </div>
      <section className={datos_cliente}>
        <h4>Datos del entrenador</h4>
        <div className={fila}>
          <p>Nombre: {state.nombre}</p>
          <p>Apellido: {state.apellido}</p>
          <p>Email: {state.email}</p>
        </div>
      </section>
      <section className={datos_cliente}>
        <h4>Datos del Pokémon</h4>
        <div className={fila}>
          <p>Nombre: {state.pokemon}</p>
          <p>Tipo: {state.tipo}</p>
          <p>Elemento: {state.elemento}</p>
          <p>Altura: {state.altura}</p>
          <p>Edad: {state.edad}</p>
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
