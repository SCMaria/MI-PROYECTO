import React from 'react';

function Metros(props){
 
    return (
      <div>
        <label> Metros: </label>
          <input
            type="number"
            name="metros"
            value={props.value}
            onChange={props.onChange}
            className="input"
            required
          />
      </div> 
    
    );
}
  
  export default Metros;
  