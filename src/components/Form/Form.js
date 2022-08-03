import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Input/Input';
import Detalle from './Detalle';
import pokebola from '../../assets/pokebola.png';
import entrenador from '../../assets/entrenador.png';
import pikachu from '../../assets/pikachu.png';
import styles from './Form.module.css';
import FormContextProvider from '../../context/FormContext';


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
          {/*Si tan solo tuviesemos una manera de "encapsular" nuestros componentes para que puedan acceder al estado global.*/}
          <FormContextProvider>
            <div className={inputs}>
              <div>
                <p className={nombre_seccion}>
                  <img src={entrenador} alt="entrenador" />
                  <span>ENTRENADOR</span>
                </p>
                <Input name="nombre" label="Nombre" />
                <Input name="apellido" label="Apellido" />
                <Input name="email" label="Email" type="email" />
              </div>
              <div>
                <p className={nombre_seccion}>
                  <img src={pikachu} alt="pikachu" />
                  <span>POKÉMON</span>
                </p>
                <Input name="pokemon" label="Nombre" />
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
