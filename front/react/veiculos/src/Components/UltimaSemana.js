import React, { useState, useContext, useEffect } from 'react';
import StoreContext from './Store/Context';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logoMinor from './Styles/logoMinor.svg';
import './Styles/Busca.css';
import Card from './Card';

const initialObj = {
  chave: '', vendido: 'true', veiculo: '', ano: '', descricao: '', 
  marca: ['Volkswagem', 'Fiat', 'Ford', 'Chevrolet', 'Honda', 
                      'Hyundai', 'Renault', 'Toyota'],
  marcaSelecionada: 'Volkswagem',
}

function initialState(){
  return initialObj; 
}

const Buscar = () => {
  const [values, setValues] = useState(initialState);
  const [encontrados, setEncontrados] = useState([]);
  //Todo
  //const [adicionar, setAdicionar] = useState(false);

  useEffect(() => { }, [])

  function onChange(event) {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  function renderMarca(){
    return (
      <select className="SelectChave" value={values.marcaSelecionada} name="marcaSelecionada" id="marcaSelecionada" onChange={onChange} required>
        {values.marca.map(marca => <option value={marca}>{marca}</option>)}
      </select>
    );
  }

  // function adicionaChave(){
  //   setAdicionar(true)
  // }

  function renderChave() {
    return (
      <div>
        <span className="FontSpan">Chave</span>
        <select className="SelectChave" value={values.chave} name="chave" id="chave" onChange={onChange} required>
          <option value="">Selecione</option>
          <option value="veiculo">Veículo</option>
          <option value="marca">Marca</option>
          <option value="ano">Ano</option>
          <option value="descricao">Descrição</option>
          <option value="vendido">Vendido</option>
        </select>
      </div>
    )
  }

  function renderVendido(){
    return(
      <select className="SelectChave" value={values.vendido} name="vendido" id="vendido" onChange={onChange} required>
        <option value="true">Sim</option>
        <option value="false">Não</option>
      </select>
    )
  }

  function renderEncontrados() {
    return (
      encontrados.map(veiculo => <Card prop={veiculo}></Card>)
    )
  }

  function buscar(event) {
    event.preventDefault();
    let query = '';
    if(values.chave === 'veiculo' ) query += 'veiculo=' + values.veiculo;
    if(values.chave === 'marca') query += 'marca=' + values.marcaSelecionada; 
    if(values.chave === 'ano') query += 'ano=' + values.ano;
    if(values.chave === 'descricao') query += 'descricao=' + values.descricao;
    if(values.chave === 'vendido') query += 'vendido=' + values.vendido;
    console.log(query)
    axios.get(`http://localhost:8080/buscar/?${query}`)
    .then( res => {
      console.log(res)
      setValues(initialObj);
      setEncontrados(res.data.encontrados);
    })
    .catch( err => console.log(err) )
  }

  return (
    <div className="Consultar">
      <body>
        <header className="Header">
          <div className="Minor-logo">
            <img src={logoMinor} alt="logoMinor" />
          </div>
        </header>
        <article>
        <div className="TituloMenu">Buscar / Editar</div>
          <form className="FormBusca">
            <span className="FontSpan">Chave</span>
            <select className="SelectChave" value={values.chave} name="chave" id="chave" onChange={onChange} required>
              <option value="">Selecione</option>
              <option value="veiculo">Veículo</option>
              <option value="marca">Marca</option>
              <option value="ano">Ano</option>
              <option value="descricao">Descrição</option>
              <option value="vendido">Vendido</option>
            </select>
            {values.chave === 'veiculo' ? (<input value={values.veiculo} onChange={onChange} name="veiculo"></input>) : null}
            {values.chave === 'marca' ? renderMarca() : null}
            {values.chave === 'ano' ? (<input value={values.ano} onChange={onChange} name="ano"></input>) : null}
            {values.chave === 'descricao' ? (<input value={values.descricao}
                                              onChange={onChange} name="descricao"></input>) : null}
            {values.chave === 'vendido' ? renderVendido() : null}
            {/*adicionar ? renderChave() : null*/}
            {/*<div className="AdicionarChave" onClick={adicionaChave}>+ Adicionar chave</div>*/}
            <div>
              <button className="Botao" onClick={buscar}>Buscar</button>
            </div>
            <div>{encontrados ? encontrados.length + 'Resultados' : 'Nenhum resultado'}</div>
          </form>
          {console.log(values.chave)}
          {encontrados ? renderEncontrados() : null}
        </article>
        <footer>Desenvolvido por Leonardo Lins</footer>
      </body>
    </div>
  );
}

export default Buscar;
