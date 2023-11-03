import { useContext } from "react";
import { Context } from "./Context";


function Ubicacion() {
    const { opciones, form, setForm } = useContext(Context);


const handleChange = (event) => {
    console.log(event.target.value);
    const todo = opciones.find((opcion) => opcion.id == event.target.value);
    console.log(todo);

    setForm({ ...form, todo });
  };

  return (
    <>
      <label htmlFor="ubicacion">Ubicación: </label>
      <select name="ubicacion" id="ubicacion" onChange={handleChange} className="select">
        <option value=""></option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.userId}
          </option>
        ))}
      </select>
    </>
  );
}



export default Ubicacion;