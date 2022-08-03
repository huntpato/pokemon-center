import React, { useContext, useState } from 'react';
import { FormContext } from '../../context/FormContext';
import styles from './Input.module.css';

const Input = ({ name, label, type = 'text' }) => {

  const { input_contenedor } = styles;

  //acceder al estado global para poder obtener y actualizar los datos
  const { handleFormChange } = useContext(FormContext);

  //estado local para manejar el estado del input.
  const [ value, setValue ] = useState('')

  const onChange = (e) => {
    setValue( e.target.value )
  };

  const onBlur = (e) => {
    e.preventDefault();
    handleFormChange(e, value)
  };
  
  // setFormData({
  //   ...formData,
  //   [e.target.name]: value
  // })
  
  return (
    <div className={input_contenedor}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        placeholder={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
