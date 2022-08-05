import { types } from './actions';

const {
  ACTUALIZAR_ENTRENADOR,
  ACTUALIZAR_APELLIDO,
  ACTUALIZAR_EMAIL,
  ACTUALIZAR_POKEMON,
  ACTUALIZAR_TIPO,
  ACTUALIZAR_ELEMENTO,
  ACTUALIZAR_ALTURA,
  ACTUALIZAR_EDAD,   
} = types;

export const initialState = {
  nombre: '',
  apellido: '',
  email: '',
  pokemon: '',
  tipo: '',
  elemento: '',
  altura: '',
  edad: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTUALIZAR_ENTRENADOR:
      return { ...state, nombre: action.payload };
    case ACTUALIZAR_APELLIDO:
      return { ...state, apellido: action.payload };
    case ACTUALIZAR_EMAIL:
      return { ...state, email: action.payload };
    case ACTUALIZAR_POKEMON:
      return { ...state, pokemon: action.payload };
    case ACTUALIZAR_TIPO:
      return { ...state, tipo: action.payload };
    case ACTUALIZAR_ELEMENTO:
      return { ...state, elemento: action.payload };
    case ACTUALIZAR_ALTURA:
      return { ...state, altura: action.payload };
    case ACTUALIZAR_EDAD:
      return { ...state, edad: action.payload };
    default:
        throw new Error ('What? :/')
  }
};
