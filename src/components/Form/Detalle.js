import React, { useContext, useEffect } from 'react';
import { useMutation } from 'react-query';
import { sendForm } from '../../api/apiFunctions';
import { FormContext } from '../../context/FormContext';

import styles from './Form.module.css';

/**
 * Componente que muestra detalle del form completado y envia datos a la API
 * @returns {JSX.Element}
 */

const Detalle = () => {
  const { detalle_formulario, encabezado, datos_cliente, fila, boton_enviar } =
    styles;

  const { form } = useContext(FormContext);
  const { nombre, apellido, email } = form?.entrenador;
  const { pokemon, tipo, elemento, altura, edad, especie } = form?.pokemon;

  const { data, isLoading, isError, mutate, isSuccess } = useMutation(sendForm);

  useEffect(() => {
    if (isSuccess) {
      alert(`formulario enviado correctamente, id ${data ? data?.id : ''}`);
    } else if (isError) {
      alert('Ha ocurrido un error al enviar el formulario');
    }
  }, [isSuccess, data, isError]);

  return (
    <div className={detalle_formulario}>
      <div className={encabezado}>
        <h3>Vista previa de la solicitud</h3>
      </div>
      <section className={datos_cliente}>
        <h4>Datos del entrenador</h4>
        <div className={fila}>
          <p>Nombre: {nombre}</p>
          <p>Apellido: {apellido}</p>
          <p>Email: {email}</p>
        </div>
      </section>
      <section className={datos_cliente}>
        <h4>Datos del Pokémon</h4>
        <div className={fila}>
          <p>Nombre: {pokemon}</p>
          <p>Tipo: {tipo}</p>
          <p>Elemento: {elemento}</p>
          <p>Altura: {altura}</p>
          <p>Edad: {edad}</p>
          <p>Especie: {especie}</p>
        </div>
      </section>
      <button
        className={boton_enviar}
        onClick={() => {
          mutate(form);
        }}
      >
        {isLoading ? 'Enviando...' : 'Enviar'}
      </button>
    </div>
  );
};

export default Detalle;
