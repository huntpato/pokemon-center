import React from 'react';
import { Link } from 'react-router-dom';
import pokebola from '../../assets/pokebola.png';
import styles from './Home.module.css';

const Home = () => {

  const { App_header, App_logo, boton_ingreso } = styles;

  return (
    <header className={App_header}>
      <img className={App_logo} alt="logo" src={pokebola} />
      <h1>Centro Pokémon de Ash</h1>
      <Link to="/formularioIngreso" className={boton_ingreso}>
        Ingresar Pokémon
      </Link>
    </header>
  );
};

export default Home;
