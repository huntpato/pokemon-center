import React, { createContext, useState } from 'react';

export const FormContext = createContext([]);

const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    pokemon: '',
  });

  return (
    <>
      <FormContextProvider
        value={{
          formData,
        }}
      >
        {children}
      </FormContextProvider>
    </>
  );
};

export default FormContextProvider;
