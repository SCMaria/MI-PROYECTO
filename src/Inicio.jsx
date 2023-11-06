import { Link } from "react-router-dom";
import FormularioSelect from './FormularioSelect';
import './style.css';
import Nav from "./Nav";
import Propiedad from "./Propiedad";
import Ubicacion from "./Ubicacion";
import Metros from "./Metros";

function Inicio() {
  return (
    <>
    <Nav />
 
      <FormularioSelect />
     
    </>
  );
}

export default Inicio;
