import React, { createContext, useState } from 'react';

export const FormContext = createContext([]);

const FormContextProvider = ({ children }) => {

  const [formData, setFormData] = useState({});


  return (
    <>
      <FormContext.Provider
        value={{
          formData,
          setFormData,
        }}
      >
        {children}
      </FormContext.Provider>
    </>
  );
};

export default FormContextProvider;
