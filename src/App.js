
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';

function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');

  useEffect(() => {
    //alert('Quer Acessar a API?')
  }, [])


  useEffect(() => {

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((Response) => {
        console.log(Response)
        setEndereco(
          {
            Logradouro: Response.data.logradouro,
            Bairro: Response.data.bairro,
            Localidade: Response.data.localidade,
            Estado: Response.data.uf,
            Ddd: Response.data.ddd
          }
        )
      })
  },
    [cep]);

  return (
    <div className="App">

      <div className='btn'>
        <h1>Buscar Cep</h1>
        <div className='Input'>
          <TextField
            id='CEP'
            label="Cep"
            onBlur={(e) => {
              setCep(e.target.value)
            }}
          />
        </div>
        <div className='Input'>

          <TextField
            id="Logradouro"
            placeholder='Logradouro'
            value={endereco.Logradouro}
          />
        </div>

        <div className='Input'>

          <TextField id="Bairro"
            placeholder={'Bairro'}

            value={endereco.Bairro}
          />
        </div>

        <div className='Input'>
          <TextField
            id="Localidade"
            placeholder={'Localidade'}
            value={endereco.Localidade}
          />
        </div>

        <div className='Input'>
          <TextField
            id="Estado"
            placeholder={'Estado'}
            value={endereco.Estado}
          />
        </div>

        <div className='Input'>
          <TextField
            id="DDD"
            placeholder={'DDD'}
            value={endereco.Ddd}
          />
        </div>

      </div>
    </div>
  );
}

export default App;
