import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Cadastrar from './Cadastrar';
import Consultar from './Consultar';
import Buscar from './Buscar';
import Listar from './Listar';
import ListarTodos from './ListarTodos';
import UltimaSemana from './UltimaSemana';
import Decada from './Decada';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/'

const PagesRoot = () => (
  <Router>
    <Switch>
      <Route path='/decada' component={Decada}/>
      <Route path='/ultima-semana' component={UltimaSemana}/>
      <Route path='/todos' component={ListarTodos}/>
      <Route path='/consultar' component={Consultar}/>
      <Route path='/cadastrar' component={Cadastrar}/>
      <Route path='/busca-manual' component={Buscar}/>
      <Route path='/listar' component={Listar}/>
      <Route path='/' component={Home}/>
    </Switch>  
  </Router>
);

export default PagesRoot;