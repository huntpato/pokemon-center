import React, { createContext, useState } from 'react';

export const FormContext = createContext([]);

const FormContextProvider = ({ children }) => {

  const [formData, setFormData] = useState({});

  const handleFormChange = (e, value) =>{
    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  return (
    <>
      <FormContext.Provider
        value={{
          formData,
          handleFormChange
        }}
      >
        {children}
      </FormContext.Provider>
    </>
  );
};

export default FormContextProvider;
