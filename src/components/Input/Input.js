import React, { useContext, useState } from 'react';
import { FormContext } from '../../context/FormContext';
import styles from './Input.module.css';

const Input = ({ name, label, type = 'text' }) => {

  const { input_contenedor } = styles;

  //acceder al estado global para poder obtener y actualizar los datos
  const { formData, setFormData } = useContext(FormContext);

  //estado local para manejar el estado del input.
  const [ inputData, setInputData ] = useState({})

  const onChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
  };

  const onBlur = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  return (
    <div className={input_contenedor}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
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
