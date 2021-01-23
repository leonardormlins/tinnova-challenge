let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('/PATCH Veiculo', () => {
    it('Verificar a atualização parcial de um Veículo', (done) => {
        let veiculo = {
          vendido: true
        }
          chai.request('http://localhost:8080')
          .patch('/veiculos/7810af49-6eb6-4985-ad1a-e36ceac83a22')
          .send(veiculo)
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
  });