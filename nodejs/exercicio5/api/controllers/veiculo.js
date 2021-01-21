module.exports = () => {
    const veiculosDB = require('../data/veiculos.json');
    const controller = {};
  
    controller.listarVeiculos = (req, res) => res.status(200).json(veiculosDB);
  
    return controller;
}