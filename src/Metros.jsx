import React, { Component } from 'react';

class Metros extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputNumber:'',
      };
    }
  
    handleInputNumberChange = (event) => {
      this.setState({ inputNumber: event.target.value });
    }
 

    render() {
      return (
        <form onSubmit={this.handleSubmit} className="formulario">
          <label>
            Metros:
            <input
              type="number"
              value={this.state.inputNumber}
              onChange={this.handleInputNumberChange}
              className="input"
              min={30}
              max={500} 
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
  
  export default Metros;
  