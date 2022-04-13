
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');

  useEffect(()=>{
    alert('Quer Acessar a API?')
  },[])
  
  
  useEffect(() => {
    
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((Response) => {
      console.log(Response.data)
      setEndereco(
        {
        Logradouro: Response.data.logradouro,
        Bairro: Response.data.bairro,
        Localidade: Response.data.localidade,
        Estado: Response.data.uf
         }      

      )

    })
    
   

  }, [cep]);

   

  return (
    <div className="App">


      <input onBlur={(e) => {
        setCep(e.target.value)

      }}></input>
      
      <input label={'Logradouro'} value={endereco.Logradouro} />
      <input label={'Bairro'} value={endereco.Bairro} />
      <input label={'Localidade'} value={endereco.Localidade} />
      <input label={'Estado'} value={endereco.Estado} />

    </div>
  );
}

export default App;
/*<Botao label={'Cep'} color={'red'} width={'300px'} onChange={(e)=>{setCep(e.target.value)}} />
      <Botao label={'Rua'} width={'300px'} />
      <Botao label={'Complemento'}/>
      
      <Botao label={'Cidade'}/>
      <Botao label={'Estado'}/>*/

/*  <button onClick={(e)=>{setBairro('Mateus')}}>Botão 1</button>
<button onClick={(e)=>{setBairro('Castro')}}>Botao 2</button>
<button onClick={(e)=>{setBairro('Barbosa')}}>Botao 3</button> */