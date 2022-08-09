import React, { useContext, useEffect, useRef, useState } from 'react';
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

  //estado global context
  const { handleInputBlur } = useContext(FormContext);

  //estado local para manejar el estado del input.
  const [inputValue, setInputValue] = useState('');

  const onChange = (e) => setInputValue(e.target.value);

  /**
   * @description funcion que se ejecuta cuando el input pierde el foco,
   * enviando el valor del input al contexto.
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

export default Input;
