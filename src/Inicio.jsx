import { Link } from "react-router-dom";
import FormularioSelect from './FormularioSelect';
import './style.css';
import Nav from "./Nav";

function Inicio() {
  return (
    <>
    <Nav />
    <div className='title'>
      <h1>SEGURO NO ENTENDÍ NADA</h1>
      <h2>completa los datos solicitados </h2>
      <FormularioSelect />
      <p className="parrafo">Este es un párrafo para mostrar la cotización</p>
    </div>
    </>
  );
}

export default Inicio;
