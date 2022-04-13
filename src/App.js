
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');

  useEffect(() => {
    alert('Quer Acessar a API?')
  }, [])


  useEffect(() => {

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((Response) => {
        setEndereco(
          {
            Logradouro: Response.data.logradouro,
            Bairro: Response.data.bairro,
            Localidade: Response.data.localidade,
            Estado: Response.data.uf
          }
        )
      })
  },
    [cep]);

  return (
    <div className="App">

      <input
        onBlur={(e) => {
          setCep(e.target.value)
        }}
      />

      <input
        label={'Logradouro'}
        value={endereco.Logradouro}
      />
      <input
        label={'Bairro'}
        value={endereco.Bairro}
      />
      <input
        label={'Localidade'}
        value={endereco.Localidade}
      />
      <input
        label={'Estado'}
        value={endereco.Estado}
      />

    </div>
  );
}

export default App;
