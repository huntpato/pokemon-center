import React from 'react';
import { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { FormContext } from '../../context/FormContext';
import { getPokemonSpecies } from '../../api/apiFunctions';
import { types } from '../../reducer/actions';
import PropTypes from 'prop-types';
import styles from './InputSpecies.module.css';

const InputSpecies = ({ name, label }) => {
  const {
    input_contenedor,
    boton_seleccionar_especie,
    popup_especie,
    contenedor_especies,
    paginador,
    boton_anterior,
    boton_siguiente,
    botones_especie,
  } = styles;

  const [showPopup, setShowPopup] = useState(false);
  const [number, setNumber] = useState(20);

  const { handleInputBlur } = useContext(FormContext);
  const { ACTUALIZAR_POKEMON } = types;

  const query = useQuery(
    ['pokemonSpecies', number],
    () => getPokemonSpecies(number),
    {
      keepPreviousData: true,
    }
  );
  const { data: species } = query;

  /**
   * funcion que selecciona especie de Pokemon, envia info al form y cierra el modal
   * @param {event} e
   * @param {string} nombreEspecie
   */

  const elegirEspecie = (e, nombreEspecie) => {
    e.preventDefault();

    handleInputBlur(ACTUALIZAR_POKEMON, {
      inputName: name,
      value: nombreEspecie,
    });
    setShowPopup(false);
  };

  /**
   * funcion que renderiza las especies de pokemon recibidas de la API
   */

  const renderizarEspecies = () => (
    <>
      {species?.map((especie) => (
        <button
          key={especie.name}
          className={botones_especie}
          onClick={(e) => elegirEspecie(e, especie.name)}
        >
          {especie.name}
        </button>
      ))}
    </>
  );

  /**
   * funciones que manejan la paginacion
   */
  const previousPage = () => setNumber((old) => Math.max(20, old - 20));
  const nextPage = () => setNumber((old) => old + 20);

  return (
    <div className={input_contenedor}>
      {showPopup && (
        <div className={popup_especie}>
          <h4>Seleccionar especie</h4>
          <div className={contenedor_especies}>{renderizarEspecies()}</div>
          <div className={paginador}>
            <button className={boton_anterior} onClick={previousPage}>
              Anterior
            </button>
            <button className={boton_siguiente} onClick={nextPage}>
              Siguiente
            </button>
          </div>
        </div>
      )}
      <p htmlFor={name}>{label}</p>
      <button
        className={boton_seleccionar_especie}
        onClick={() => setShowPopup(true)}
      >
        Seleccionar
      </button>
    </div>
  );
};

InputSpecies.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }

export default InputSpecies;
