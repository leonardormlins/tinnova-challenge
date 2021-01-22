import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from './Store/Provider';
import Home from './Home';
import Cadastrar from './Cadastrar';
import Consultar from './Consultar';
import Buscar from './Buscar';
import Listar from './Listar';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081/api'

const PagesRoot = () => (
  <Router>
    <Switch>
      <Route path='/consultar' component={Consultar}/>
      <Route path='/cadastrar' component={Cadastrar}/>
      <Route path='/busca-manual' component={Buscar}/>
      <Route path='/listar' component={Listar}/>
      <Route path='/' component={Home}/>
    </Switch>  
  </Router>
);

export default PagesRoot;