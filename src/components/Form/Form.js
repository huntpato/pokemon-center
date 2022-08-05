import React from 'react';
import { Link } from 'react-router-dom';
import { types } from '../../reducer/actions';

import FormContextProvider from '../../context/FormContext';
import Input from '../Input/Input';
import Detalle from './Detalle';
import pokebola from '../../assets/pokebola.png';
import entrenador from '../../assets/entrenador.png';
import pikachu from '../../assets/pikachu.png';
import styles from './Form.module.css';

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

  const {
    ACTUALIZAR_ENTRENADOR,
    ACTUALIZAR_POKEMON,
    ACTUALIZAR_APELLIDO,
    ACTUALIZAR_EMAIL,
    ACTUALIZAR_TIPO,
    ACTUALIZAR_ELEMENTO,
    ACTUALIZAR_ALTURA,
    ACTUALIZAR_EDAD,
  } = types;

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
          Por favor, completa el formulario para que podamos atender a tu Pokémon
        </p>
        <div className={cuerpo_formulario}>
          <FormContextProvider>
            <div className={inputs}>
              <div>
                <p className={nombre_seccion}>
                  <img src={entrenador} alt="entrenador" />
                  <span>ENTRENADOR</span>
                </p>
                <Input
                  name="nombre"
                  label="Nombre"
                  action={ACTUALIZAR_ENTRENADOR}
                />
                <Input
                  name="apellido"
                  label="Apellido"
                  action={ACTUALIZAR_APELLIDO}
                />
                <Input
                  name="email"
                  label="Email"
                  type="email"
                  action={ACTUALIZAR_EMAIL}
                />
              </div>
              <div>
                <p className={nombre_seccion}>
                  <img src={pikachu} alt="pikachu" />
                  <span>POKÉMON</span>
                </p>
                <Input
                  name="pokemon"
                  label="Nombre"
                  action={ACTUALIZAR_POKEMON}
                />
                <Input name="tipo" label="Tipo" action={ACTUALIZAR_TIPO} />
                <Input
                  name="elemento"
                  label="Elemento"
                  action={ACTUALIZAR_ELEMENTO}
                />
                <Input
                  name="altura"
                  label="Altura"
                  action={ACTUALIZAR_ALTURA}
                />
                <Input
                  name="edad"
                  label="Edad"
                  type="number"
                  action={ACTUALIZAR_EDAD}
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
