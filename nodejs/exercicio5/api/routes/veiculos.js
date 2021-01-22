module.exports = app => {
    const controller = app.controllers.veiculos;

    app.route('/veiculos')
      .get(controller.listarVeiculos)
      .post(controller.adicionarVeiculo);

    app.route('/veiculos/:idVeiculo')
      .get(controller.getVeiculo)
      .delete(controller.removerVeiculo)
      .put(controller.atualizaVeiculo)
      .patch(controller.patchVeiculo)

    app.route('/buscar')
      .get(controller.buscarVeiculo)

}