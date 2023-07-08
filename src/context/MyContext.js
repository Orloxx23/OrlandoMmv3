// MyContext.js
import React, { createContext, useState } from 'react';

// Crea el contexto
export const MyContext = createContext();

// Crea el proveedor del contexto
export const MyContextProvider = ({ children }) => {
  // Define el estado y las funciones asociadas
  const [myValue, setMyValue] = useState('');

  // Función para actualizar el valor del contexto
  const updateValue = (newValue) => {
    setMyValue(newValue);
  };

  // Puedes incluir cualquier otra lógica o estado necesario aquí

  // Proporciona el estado y las funciones a los componentes hijos
  return (
    <MyContext.Provider value={{ myValue, updateValue }}>
      {children}
    </MyContext.Provider>
  );
};
