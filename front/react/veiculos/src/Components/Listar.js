import React, { useState, useContext, useEffect } from 'react';
import StoreContext from './Store/Context';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logoMinor from './Styles/logoMinor.svg';
import './Styles/Home.css';

const Listar = () => {
  const [following, setFollowing] = useState([]);

  useEffect(() => { }, [])

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
              <button className="Botao-menu-menor">Todos os veículos da base</button>
            </Link>
            <Link to='/decada'>
              <button className="Botao-menu-menor">Qtde por década de fabricação</button>
            </Link>
            <div>
              <Link to='/decada'>
                <button className="Botao-menu-menor">Qtde por década de fabricação</button>
              </Link>
              <Link to='/ultima-semana'>
                <button className="Botao-menu-menor">Cadastrados na última semana</button>
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
