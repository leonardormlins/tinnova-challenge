import React, { useState, useContext, useEffect } from 'react';
import StoreContext from './Store/Context';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logoMinor from './Styles/logoMinor.svg';
import './Styles/Home.css';

const Home = () => {
  const [following, setFollowing] = useState([]);

  useEffect(() => { }, [])

  return (
    <div className="Home">
      <body>
        <header className="Header">
          <div className="Minor-logo">
            <img src={logoMinor} alt="logoMinor" />
          </div>
        </header>
        <article>
          <div className="Space-top"></div>
          <div className="TituloMenu">Sistema de veículos</div>
          <div className="Body-content">
            <Link to='/cadastrar'>
              <button className="Botao-menu">Cadastrar</button>
            </Link>
            <Link to='/consultar'>
              <button className="Botao-menu">Consultar</button>
            </Link>
          </div>
        </article>
        <footer>Desenvolvido por Leonardo Lins</footer>
      </body>
    </div>
  );
}

export default Home;
