import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from '../reducer/reducer';

export const FormContext = createContext([]);

const FormContextProvider = ({ children }) => {

  //estado useReducer
  const [form, dispatch] = useReducer(reducer, initialState);

  /**
   * @description función que recibe los parametros del formulario
   * y dispara la acción de actualización.
   * @param {string} type - tipo de accion a ejecutar por el dispatch
   * @param {{[string]: string}} inputValue - clave/valor del input
   */
  
  const handleInputBlur = (type, inputValue) => {
    const { inputName, value } = inputValue;

    dispatch({
      type,
      payload: {
        [inputName]: value,
      },
    });
  };

  return (
    <>
      <FormContext.Provider
        value={{
          form,
          handleInputBlur,
        }}
      >
        {children}
      </FormContext.Provider>
    </>
  );
};

export default FormContextProvider;
