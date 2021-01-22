import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logoMinor from './Styles/logoMinor.svg';
import './Styles/Busca.css';
import Card from './Card';


const ListarTodos = () => {
  const [encontrados, setEncontrados] = useState();

  useEffect(() => { 
    axios.get('/veiculos')
    .then( res => setEncontrados(res.data.veiculos.data))
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
          <div className="TituloMenu">Listar Todos</div>
          <div>{encontrados ? encontrados.length + ' Resultados' : 'Nenhum resultado'}</div>
          {encontrados ? renderEncontrados() : null}
        </article>
        <footer>Desenvolvido por Leonardo Lins</footer>
      </body>
    </div>
  );
}

export default ListarTodos;
