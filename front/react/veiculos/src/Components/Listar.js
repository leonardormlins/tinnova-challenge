import React from 'react';
import { Link } from 'react-router-dom';
import logoMinor from './Styles/logoMinor.svg';
import './Styles/Home.css';

const Listar = () => {
  return (
    <div className="Consultar">
      <body>
        <header className="Header">
          <div className="Minor-logo">
            <img src={logoMinor} alt="logoMinor" />
          </div>
        </header>
        <article>
        <div className="TituloMenu">Listar / Exibir</div>
          <div className="Body-content">
            <Link to='/todos'>
              <button className="Botao-menu">Todos os veículos da base</button>
            </Link>
            <Link to='/decada'>
              <button className="Botao-menu">Qtde por década de fabricação</button>
            </Link>
            <div>
              <Link to='/ultima-semana'>
                <button className="Botao-menu">Cadastrados na última semana</button>
              </Link>
            </div>
          </div>
        </article>
        <footer>Desenvolvido por Leonardo Lins</footer>
      </body>
    </div>
  );
}

export default Listar;
