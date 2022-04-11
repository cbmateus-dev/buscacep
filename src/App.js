
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Botao from './components/input/Botao';


function App() {
  const [cep, setCep]=useState('')
  useEffect(()=> {
    
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(Response=>{console.log(Response)})
    
  },[cep]);
  

  return (
    <div className="App">
      <header className="App-header" > 
      <input onChange={(e)=>{setCep(e.target.value)}}></input>       
      <Botao label={'Cep'} color={'red'} width={'300px'} onChange={(e)=>{setCep(e.target.value)}} />
      <Botao label={'Rua'} width={'300px'}/>
      <Botao label={'Complemento'}/>
      <Botao label={'Bairro'}/>
      <Botao label={'Cidade'}/>
      <Botao label={'Estado'}/>
        
      </header>
    </div>
  );
}

export default App;
