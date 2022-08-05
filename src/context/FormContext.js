import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from '../reducer/reducer';

export const FormContext = createContext([]);

const FormContextProvider = ({ children }) => {

  // const [formData, setFormData] = useState({});
  
  // const handleFormChange = (e, value) =>{
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: value
  //   })
  // }

  const [ state, dispatch ] = useReducer( reducer, initialState )

  const updateInputState = (e, action) =>{
    dispatch({ type: action, payload: e.target.value })
  }

  return (
    <>
      <FormContext.Provider
        value={{
          state,
          updateInputState
        }}
      >
        {children}
      </FormContext.Provider>
    </>
  );
};

export default FormContextProvider;
