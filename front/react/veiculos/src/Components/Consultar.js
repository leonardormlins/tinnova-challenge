import React from 'react';
import { Link } from 'react-router-dom';
import logoMinor from './Styles/logoMinor.svg';
import './Styles/Home.css';

const Consultar = () => {

  return (
    <div className="Consultar">
      <body>
        <header className="Header">
          <div className="Minor-logo">
            <img src={logoMinor} alt="logoMinor" />
          </div>
        </header>
        <article>
          <div className="TituloMenu">Consultar</div>
          <div className="Body-content">
            <Link to='/busca-manual'>
              <button className="Botao-menu">Buscar e Editar</button>
            </Link>
            <Link to='/listar'>
              <button className="Botao-menu">Listar / Exibir</button>
            </Link>
          </div>
        </article>
        <footer>Desenvolvido por Leonardo Lins</footer>
      </body>
    </div>
  );
}

export default Consultar;
