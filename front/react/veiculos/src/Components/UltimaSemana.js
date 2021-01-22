import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logoMinor from './Styles/logoMinor.svg';
import './Styles/Busca.css';
import Card from './Card';


const UltimaSemana = () => {
  const [encontrados, setEncontrados] = useState();

  useEffect(() => { 
    axios.get('/veiculos')
    .then( res => {
          const veiculos = res.data.veiculos.data
          .filter( veiculo => new Date().getDate() - 7 < new Date(veiculo.created).getDate())
          setEncontrados(veiculos);});
  }, [])


  function renderEncontrados() {
    return (
      encontrados.map(veiculo => <Card prop={veiculo}></Card>)
    )
  }

  return (
    <div className="ListarTodos">
      <body>
        <header className="Header">
          <div className="Minor-logo">
            <img src={logoMinor} alt="logoMinor" />
          </div>
        </header>
        <article>
          <div className="TituloMenu">Registrados última semana</div>
          <div>{encontrados ? encontrados.length + ' Resultados' : 'Nenhum resultado'}</div>
          {encontrados ? renderEncontrados() : null}
        </article>
        <footer>Desenvolvido por Leonardo Lins</footer>
      </body>
    </div>
  );
}

export default UltimaSemana;
