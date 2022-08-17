import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from '../../context/FormContext';
import { types } from '../../reducer/actions';

import styles from './Input.module.css';

const Input = ({
  name,
  label,
  type = 'text',
  focusIn = false,
  isPokemon = false,
}) => {
  
  const { input_contenedor } = styles;
  const { ACTUALIZAR_ENTRENADOR, ACTUALIZAR_POKEMON } = types;
  
  //ref inputfocus
  const ref = useRef(); 
  
  const { handleInputBlur } = useContext(FormContext);
  
  const [inputValue, setInputValue] = useState('');
  
  /**
   * Función que se ejecuta al cambiar el valor del input.
   * @param {Event} e 
   */
  const onChange = (e) => setInputValue(e.target.value);
  
  /**
   * @description funcion que se ejecuta cuando el input pierde el foco
   * @param {inputEvent} e 
   */
  
  const onBlur = (e) => {
    e.preventDefault();

    handleInputBlur( (isPokemon ? ACTUALIZAR_POKEMON : ACTUALIZAR_ENTRENADOR) , {
      inputName: name,
      value: inputValue,
    });
  };

  //inputFocus
  useEffect(() => {
    if (ref.current && focusIn) {
      ref.current.focus();
    }
  }, [focusIn]);
  
  return (
    <div className={input_contenedor}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={inputValue}
        id={name}
        placeholder={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  focusIn: PropTypes.bool,
  isPokemon: PropTypes.bool,
}

export default Input;
