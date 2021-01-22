import React, { useState, useContext, useEffect } from 'react';
import StoreContext from './Store/Context';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logoMinor from './Styles/logoMinor.svg';
import './Styles/Home.css';

const Consultar = () => {
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
          <h2>Consultar</h2>
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
