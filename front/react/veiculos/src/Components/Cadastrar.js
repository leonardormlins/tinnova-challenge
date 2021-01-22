import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import logoMinor from './Styles/logoMinor.svg';
import './Styles/Cadastrar.css';

function initialState() {
  return { veiculo: '', marca:'Volkswagem',
            ano: '', descricao: '', vendido: 'true' }
}

const Cadastrar = () => {
  const [values, setValues] = useState(initialState);

  async function handleSubmit(event) {
    event.preventDefault();
    const validacao = validacaoDados()
    if(!validacao) return alert('Erro: Preencha os campos corretamente!');
    axios.post('/veiculos', {
      "veiculo": values.veiculo,
      "marca": values.marca,
      "ano": values.ano,
      "descricao": values.descricao,
      "vendido": values.vendido == "false" ? false : true
    })
      .then( res => res.status == 201 ? alert('Cadastrado com sucesso!') : alert('Ocorreu um erro ao cadastrar!'))
      .catch( err => alert('Ocorreu um erro na conexão com servidor!') )
    setValues({ veiculo: '', marca:'',
    ano: '', descricao: '', vendido: ''});
  }

  function onChange(event) {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  function validacaoDados() {
    console.log(values.vendido, !!values.vendido, typeof values.vendido)
    if(values.veiculo && values.marca && values.ano && values.descricao && values.vendido){
      return true;
    }
    return false;
  }

  return (
    <div className="Cadastrar">
      <body>
        <header className="Header">
          <div className="Minor-logo">
            <img src={logoMinor} alt="logoMinor" />
          </div>
        </header>
        <article>
        <div className="TituloMenu">Cadastrar</div>
          <form className="Form">
            <span>Veículo</span>
            <input name="veiculo" value={values.veiculo} onChange={onChange} required></input>
            <span>Marca</span>
            <select className="SelectMarca" name="marca" id="marca" onChange={onChange} required>
              <option value="Volkswagem">Volkswagem</option>
              <option value="Fiat">Fiat</option>
              <option value="Ford">Ford</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Honda">Honda</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Hyundai">Renault</option>
              <option value="Hyundai">Toyota</option>
            </select>
            <span>Ano</span>
            <input className="InputAno" value={values.ano} name="ano" onChange={onChange} required></input>
            <span>Descrição</span>
            <input className="InputDescricao" value={values.descricao} name="descricao" onChange={onChange} required></input>
            <span>Vendido</span>
            <select className="SelectVendido" value={values.vendido} name="vendido" id="vendido" onChange={onChange} required>
              <option value='true'>Sim</option>
              <option value='false'>Não</option>
            </select>
            <input type="submit" className="Botao" value="Cadastrar"
              onClick={handleSubmit}></input>
          </form>
        </article>
        <footer>Desenvolvido por Leonardo Lins</footer>
      </body>
    </div>
    
  );
}

export default Cadastrar;
