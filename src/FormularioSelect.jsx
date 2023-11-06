import React, { Component } from 'react';
import './style.css'
import Propiedad from "./Propiedad";
import Ubicacion from "./Ubicacion";
import Metros from "./Metros";
import { Context } from "./Context";
import { format } from 'date-fns';

class FormularioSelect extends Component {
  static contextType = Context;

  constructor(props) {
    super(props);
    this.state = {
      propiedad: '',
      ubicacion: '',
      metros: '',
      costom2: 35.86,
      resultado: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { propiedad, ubicacion, metros, costom2 } = this.state;
    const { opciones } = this.context;

    const selectedPropiedad = opciones?.propiedades[propiedad];
    const selectedUbicacion = opciones?.ubicaciones[ubicacion];
    const fechaActual = new Date();
    const fechaFormateada = format(fechaActual, 'dd/MM/yyyy, HH:mm:ss');

    let cotizacion = this.cotizarPoliza(costom2, selectedPropiedad.factor, selectedUbicacion.factor, metros);

    this.setState({ resultado: cotizacion });


    const historialExistente = localStorage.getItem('historial');

    let historial = historialExistente ? JSON.parse(historialExistente) : [];
   
    historial.push({
      fecha: fechaFormateada,
      propiedad: selectedPropiedad.tipo,
      ubicacion: selectedUbicacion.tipo,
      metros: metros,
      poliza: "$ " + cotizacion
    });


    localStorage.setItem('historial', JSON.stringify(historial));

  }

  cotizarPoliza = (costoM2, factorPropiedad, factorUbicacion, metros2) =>{
    return (costoM2 * factorPropiedad * factorUbicacion * metros2).toFixed(2);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className='formulario'>
        <div className='title'>
          <h1>Cotizador</h1>
          <h2>completa los datos solicitados </h2>
        </div>
        <div>
          <Propiedad onChange={this.handleInputChange}
           value={this.state.propiedad}/>
        </div>
        <div>
          <Ubicacion onChange={this.handleInputChange}
           value={this.state.ubicacion}/>
        </div>
        <Metros 
          onChange={this.handleInputChange}
          value={this.state.metros}
        />
        <div>
          <button type="submit" className="boton">COTIZAR</button>
        </div>
        <p className="parrafo">Precio estimado : $
          {this.state.resultado !== null ? ` ${this.state.resultado}` : ''}
        </p>
      </form>
    )
  }
}

export default FormularioSelect;
