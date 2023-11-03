import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const AppProvider = ({ children }) => {
  const [form, setForm] = useState({});

  const [opciones, setOpciones] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((todos) => setOpciones(todos));
  }, []);

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsuarios(users));
  }, []);

  const data = { opciones, form, setForm, usuarios };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};