import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const AppProvider = ({ children }) => {
  const [form, setForm] = useState({});

  const [opciones, setOpciones] = useState([]);

  useEffect(() => {
    fetch("https://65458a0cfe036a2fa9546404.mockapi.io/v1/cotizador/cotizador")
      .then((response) => response.json())
      .then((todos) => {
        const categoriasAgrupadas = todos.reduce((result, item) => {
          const categoria = item.categoria;
          if (!result[categoria]) {
            result[categoria] = [];
          }
          result[categoria].push(item);
          return result;
        }, {});
        
        const propiedades = categoriasAgrupadas["propiedad"] || [];
        const ubicaciones = categoriasAgrupadas["ubicacion"] || [];
        setOpciones({propiedades, ubicaciones});
      });
  }, []);

  const data = { opciones, form, setForm };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};