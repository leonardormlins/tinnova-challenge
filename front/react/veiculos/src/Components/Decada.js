import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import logoMinor from './Styles/logoMinor.svg';
import './Styles/Busca.css';
import Card from './Card';
import { set } from 'js-cookie';


const Decada = () => {
  const [encontrados, setEncontrados] = useState();
  const [quantidadePorDecadas, setQuantidadePorDecadas] = useState();

  useEffect(() => { 
    axios.get('/veiculos')
    .then( res => setEncontrados(res.data.veiculos.data ))
  }, [])

  function renderEncontrados() {
    const anos = encontrados.map(veiculo => veiculo.ano);
    const decadas = anos.map(ano => qualDecada(ano));
    const apresentacao = {}
    decadas.forEach(function(x) { apresentacao[x] = (apresentacao[x] || 0)+1; });
    return Object.entries(apresentacao).map((value)=> <span>{'Decada de '+value.join(' -> ')}</span>)
  }
  function qualDecada(ano){
    let aux;
    let tamanhoAno;
    while(tamanhoAno >= 2){
        tamanhoAno = ano.toString().length - 1;
        aux = Math.pow(10,tamanhoAno)
        ano = ano%aux;
    }
    return (Math.floor(ano/10) * 10).toString();
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
          <div className="TituloMenu">Quantidade por década</div>
          {encontrados ? renderEncontrados() : null}
        </article>
        <footer>Desenvolvido por Leonardo Lins</footer>
      </body>
    </div>
  );
}

export default Decada;
