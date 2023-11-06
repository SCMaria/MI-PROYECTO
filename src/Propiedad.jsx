import { useContext } from "react";
import { Context } from "./Context";


function Propiedad(props) {
  const { opciones } = useContext(Context);

  return (
    <>
      <label htmlFor="propiedad">Propiedad:  </label>
      <select required name="propiedad" id="propiedad"  value={props.value} onChange={props.onChange} className="select" >
        <option value=""></option>
        {opciones?.propiedades?.map((opcion, index) => (
          <option key={index} value={index}>
            {opcion.tipo}
          </option>
        ))}
      </select>
    </>
  );
}



export default Propiedad;