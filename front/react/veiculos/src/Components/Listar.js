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
          <h2>Listar / Exibir </h2>
          
        </article>
        <footer>Desenvolvido por Leonardo Lins</footer>
      </body>
    </div>
  );
}

export default Listar;
