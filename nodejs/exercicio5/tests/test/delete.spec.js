let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('/DELETE Veiculo', () => {
    it('Verificar remoção de Veículo', (done) => {
        let veiculo = {
          veiculo: "Corsa",
          marca: "Chevrolet",
          ano: 1999,
          descricao: "Cor cinza",
          vendido: true
        }
          chai.request('http://localhost:8080')
          .delete('/veiculos/3b2d6c5a-dc35-46ac-ac33-e5ea7a0eefc8')
          .send(veiculo)
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
  });