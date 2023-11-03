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
    <div className='title'>
      <h1>SEGURO NO ENTENDÍ NADA</h1>
      <h2>completa los datos solicitados </h2>
      <FormularioSelect />
      <p className="parrafo">Este es un párrafo para mostrar la cotización</p>
    </div>
    <div>
    <Propiedad/>
    </div>
    <div>
    <Ubicacion/>
    </div>
    <Metros/>
    </>
  );
}

export default Inicio;
