let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('/POST Veiculo', () => {
    it('Verificar o cadastro de Veículo', (done) => {
        let veiculo = {
          veiculo: "Corsa",
          marca: "Chevrolet",
          ano: 1999,
          descricao: "Cor cinza",
          vendido: true
        }
          chai.request('http://localhost:8080')
          .post('/veiculos')
          .send(veiculo)
          .end((err, res) => {
              res.should.have.status(201);
            done();
          });
    });
  });