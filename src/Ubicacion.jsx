import { useContext } from "react";
import { Context } from "./Context";


function Ubicacion(props) {
    const { opciones, form, setForm } = useContext(Context);

  return (
    <>
      <label htmlFor="ubicacion">Ubicación: </label>
      <select required name="ubicacion" id="ubicacion" value={props.value} onChange={props.onChange} className="select">
        <option value=""></option>
        {opciones?.ubicaciones?.map((opcion, index) => (
          <option key={index} value={index}>
            {opcion.tipo}
          </option>
        ))}
      </select>
    </>
  );
}



export default Ubicacion;