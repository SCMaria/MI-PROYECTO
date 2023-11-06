import React from 'react';
import { Link } from "react-router-dom";
import Nav from "./Nav";
import './historial.css';

function Historial() {

  const historial = JSON.parse(localStorage.getItem('historial')) || [];

  return (
    <>
      <Nav />
      <div className='historial'>
      <h1>Historial</h1>
      <table>
        <thead>
          <tr>
            <th>Fecha de Cotización</th>
            <th>Propiedad</th>
            <th>Ubicación</th>
            <th>Metros cuadrados</th>
            <th>Póliza mensual</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((item, index) => (
            <tr key={index}>
              <td>{item.fecha}</td>
              <td>{item.propiedad}</td>
              <td>{item.ubicacion}</td>
              <td>{item.metros}</td>
              <td>{item.poliza}</td>
            </tr>
          ))}
        </tbody>
      </table>
   
      <Link to="/">
          <button>VOLVER</button>
        </Link>
   
      </div>
     
    </>
  );
}

export default Historial;
