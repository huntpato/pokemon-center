import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getPokemonTypes } from '../../api/getPokemonTypes';

import FormContextProvider from '../../context/FormContext';
import Input from '../Input/Input';
import Detalle from './Detalle';
import pokebola from '../../assets/pokebola.png';
import entrenador from '../../assets/entrenador.png';
import pikachu from '../../assets/pikachu.png';
import Select from '../Select/Select';
import styles from './Form.module.css';

/**
 * Componente del formulario
 * @returns {JSX.Element}
 */

const Form = () => {
  const {
    form_header,
    volver,
    formulario_ingreso,
    formulario_description,
    cuerpo_formulario,
    inputs,
    nombre_seccion,
  } = styles;

  // Obtenemos los tipos de pokemon de la API usando el hook useQuery.
  // Resultado de la consulta guardado en variable tipos,
  // las variables isLoading e isError para deshabilitar el input.
  const query = useQuery('pokemonTypes', getPokemonTypes);
  const { isLoading, data: tipos, isError } = query;

  return (
    <>
      <header className={form_header}>
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokémon de Ash</h2>
        </div>
        <Link className={volver} to="/">
          Home
        </Link>
      </header>
      <div className={formulario_ingreso}>
        <h3>SOLICITUD DE ATENCIÓN</h3>
        <p className={formulario_description}>
          Por favor, completa el formulario para que podamos atender a tu
          Pokémon
        </p>
        <div className={cuerpo_formulario}>
          <FormContextProvider>
            <div className={inputs}>
              <div>
                <p className={nombre_seccion}>
                  <img src={entrenador} alt="entrenador" />
                  <span>ENTRENADOR</span>
                </p>
                <Input name="nombre" label="Nombre" focusIn={true} />
                <Input name="apellido" label="Apellido" />
                <Input name="email" label="Email" type="email" />
              </div>
              <div>
                <p className={nombre_seccion}>
                  <img src={pikachu} alt="pikachu" />
                  <span>POKÉMON</span>
                </p>
                <Input name="pokemon" label="Nombre" isPokemon={true} />
                <Select
                  name="tipo"
                  label="tipo"
                  options={tipos}
                  disabled={isLoading || isError}
                ></Select>
                <Input name="elemento" label="Elemento" isPokemon={true} />
                <Input name="altura" label="Altura" isPokemon={true} />
                <Input
                  name="edad"
                  label="Edad"
                  type="number"
                  isPokemon={true}
                />
              </div>
            </div>
            <Detalle />
          </FormContextProvider>
        </div>
      </div>
    </>
  );
};

export default Form;
