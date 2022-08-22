import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FormContext } from '../../context/FormContext';
import { types } from '../../reducer/actions';
import styles from './Select.module.css';

const Select = ({ name, label, options = [], disabled = false }) => {
  const { input_contenedor } = styles;
  const { ACTUALIZAR_POKEMON } = types;

  const { handleInputBlur } = useContext(FormContext);

  const onChange = (e) => {
    e.preventDefault();
    handleInputBlur(ACTUALIZAR_POKEMON, {
      inputName: name,
      value: e.target.value,
    });
  };

  return (
    <div className={input_contenedor}>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={onChange} disabled={disabled}>
        <option value=""> Selecciona el tipo de pokémon</option>
        {options.map((option) => {
          return (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array,
    disabled: PropTypes.bool,
};

export default Select;
