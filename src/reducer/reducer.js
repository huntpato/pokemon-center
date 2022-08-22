import { types } from './actions';

const { ACTUALIZAR_ENTRENADOR, ACTUALIZAR_POKEMON } = types;

//estado inicial
export const initialState = {
  entrenador: {
    nombre: '',
    apellido: '',
    email: '',
  },
  pokemon: {
    pokemon: '',
    tipo: '',
    elemento: '',
    altura: '',
    edad: '',
    especie:'',
  },
};

/**
 * @description función reductora para el estado del formulario,
 * que actualiza el estado en base a la acción dada.
 * @param {initialState} state 
 * @param {{
 *  type: string,
 *  payload: {[string]: string}}} action 
 * @returns {initialState} 
 */

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTUALIZAR_ENTRENADOR:
      return {
        ...state,
        entrenador: {
          ...state.entrenador,
          ...action.payload,
        },
      };
    case ACTUALIZAR_POKEMON:
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          ...action.payload,
        },
      };
    default:
        throw new Error('what?')
  }
};