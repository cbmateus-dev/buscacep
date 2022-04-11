import React from 'react';
import './Botao.css';


function Botao(props) {
  return (
    <div>
      <label>{props.label}</label>

      <input className='botaoTeste' style={{color: `${props.color}`, width:`${props.width}`, width:`${props.width}`}}
      
      />
    </div>
  )

}

export default Botao;