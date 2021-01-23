let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('/PUT Veiculo', () => {
    it('Verificar a atualização de Veículo', (done) => {
        let veiculo = {
          veiculo: "Corsa",
          marca: "Chevrolet",
          ano: 1999,
          descricao: "Cor cinza",
          vendido: false
        }
          chai.request('http://localhost:8080')
          .put('/veiculos/7810af49-6eb6-4985-ad1a-e36ceac83a22')
          .send(veiculo)
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
  });