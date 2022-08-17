/**
 * función que obtiene los tipos de pokémon de la API
 * @returns {object}
 */

export const getPokemonTypes = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/type/');
    const data = await response.json();
    return data.results;
  };