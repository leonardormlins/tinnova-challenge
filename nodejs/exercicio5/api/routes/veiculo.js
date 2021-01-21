module.exports = app => {
    const controller = require('../controllers/veiculo')();
  
    app.route('/api/v1/veiculos')
      .get(controller.listarVeiculos);
}