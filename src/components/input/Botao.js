import React from 'react';
import './Botao.css';


function Botao(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input onChange={props.onChange} type='text' style={{ color: `${props.color}`, width: `${props.width}` }}

      />
    </div>
  )

}

export default Botao;