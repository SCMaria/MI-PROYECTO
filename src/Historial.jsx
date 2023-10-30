import Nav from "./Nav";
import './style.css';

function Historial(){
    return (
        <>
          <Nav />
          <h1>Historial</h1>
          <table>
      <thead>
        <tr>
          <th>Fecha de Cotización</th>
          <th>Propiedad</th>
          <th>Ubicación</th>
          <th>Metros cuadradros</th>
          <th>Póliza mensual</th>
        </tr>
      </thead>
    </table>
        </>
      );
    }
export default Historial;