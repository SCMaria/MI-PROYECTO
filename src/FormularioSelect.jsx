import React, { Component } from 'react';
import './style.css';

class FormularioSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propiedad:'',
      ubicacion: '',
      inputNumber:'',
    };
  }

  handleSelectChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleInputNumberChange = (event) => {
    this.setState({ inputNumber: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("propiedad: " + this.state.propiedad);
    console.log("ubicación: " + this.state.ubicacion);
    console.log("metros: " + this.state.inputNumber);
    
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} className="formulario">
        <label>
         Propiedad:
          <select name="propiedad" value={this.state.propiedad} onChange={this.handleSelectChange}className="select">
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </label>

        <label>
          Ubicación:
          <select name="ubicacion" value={this.state.ubicacion} onChange={this.handleSelectChange}className="select">
            <option value="opcionA">Opción A</option>
            <option value="opcionB">Opción B</option>
            <option value="opcionC">Opción C</option>
          </select>
        </label>
        <label>
          Metros:
          <input
            type="number"
            value={this.state.inputNumber}
            onChange={this.handleInputNumberChange}
            className="input"
            min={1}
            max={1000} 
            required
          />
        </label>
        <div>
        <button type="submit" className="boton" >COTIZAR</button>
        </div>
      </form>
    );
  }
}

export default FormularioSelect;
