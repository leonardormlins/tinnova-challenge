import React, { useState } from 'react';
import './Styles/EditarVeiculo.css';
import axios from 'axios'

const EditarVeiculo = (veiculo) => {
    const [values, setValues] = useState(veiculo.prop);

    function onChange(event) {
        const { name, value } = event.target;
    
        setValues({
          ...values,
          [name]: value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const validacao = validacaoDados()
        console.log(validacao)
        if(!validacao) return alert('Erro: Preencha os campos corretamente!');
        console.log('http://localhost:8080/veiculos/'+ veiculo.prop.id);
        console.log({
          "veiculo": values.veiculo,
          "marca": values.marca,
          "ano": values.ano,
          "descricao": values.descricao,
          "vendido": values.vendido === "false" ? false : true
        })
        axios.put('http://localhost:8080/veiculos/'+ veiculo.prop.id, {
          "veiculo": values.veiculo,
          "marca": values.marca,
          "ano": values.ano,
          "descricao": values.descricao,
          "vendido": values.vendido === "false" ? 'false' : 'true'
        })
        .then( res => res.status == 200 ? alert('Atualizado com sucesso!') : alert('Ocorreu um erro ao atualizar!'))
        .catch( err => console.log(err) )
    }

    function validacaoDados() {
      console.log(!!values.vendido, typeof values.vendido, values.vendido)
        if(values.veiculo && values.marca && values.ano && values.descricao && values.vendido){
          return true;
        }
        return false;
    }

    return (
        <div className="EditarVeiculo">
            <form className="Form">
            <span>Veículo</span>
            <input name="veiculo" value={values.veiculo} onChange={onChange} required></input>
            <span>Marca</span>
            <select className="SelectMarca" value={values.marca} name="marca" id="marca" onChange={onChange} required>
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
        </div>
    )
}

export default EditarVeiculo;