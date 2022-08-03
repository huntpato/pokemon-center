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
  const { formData } = useContext(FormContext)

  return (
    <div className={detalle_formulario}>
      <div className={encabezado}>
        <h3>Vista previa de la solicitud</h3>
      </div>
      <section className={datos_cliente}>
        <h4>Datos del entrenador</h4>
        <div className={fila}>
          <p>Nombre: {formData.nombre}</p>
          <p>Apellido: {formData.apellido}</p>
          <p>Email: {formData.email}</p>
        </div>
      </section>
      <section className={datos_cliente}>
        <h4>Datos del Pokémon</h4>
        <div className={fila}>
          <p>Nombre: {formData.pokemon}</p>
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
