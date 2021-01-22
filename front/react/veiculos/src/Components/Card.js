import React, { useState } from 'react';
import './Styles/Card.css';
import EditarVeiculo from './EditarVeiculo';

const Card = (veiculo) => {
    const [render, setRender] = useState(false)

    return (
        <div className="Card">
            <p>Vendido: {veiculo.prop.vendido ? 'Sim' : 'Não'}</p>
            <h4>{veiculo.prop.veiculo}</h4>
            <span>{veiculo.prop.marca}</span>
            <span>{veiculo.prop.ano}</span>
            <span>{veiculo.prop.descricao}</span>
            <div className="Editar" onClick={()=>{setRender(!render)}}>
                Editar
            </div>
            <div className="Modal">
                {render ? <EditarVeiculo prop={veiculo.prop}></EditarVeiculo> : null}
            </div>
        </div>
    )
}

export default Card;