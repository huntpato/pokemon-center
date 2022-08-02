import React, { useState } from 'react';
import styles from './Input.module.css';

const Input = ({ name, label, type = 'text' }) => {
  const { input_contenedor } = styles;

  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.


  // También, utilizaremos un estado local para manejar el estado del input.
  const [ inputData, setInputData ] = useState({})

  const onChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.id]: e.target.value
    })
  };

  const onBlur = (e) => {
    e.preventDefault();

    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
  };

  return (
    <div className={input_contenedor}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={inputData.name}
        id={name}
        placeholder={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
