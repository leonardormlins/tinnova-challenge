let request = require("request");
let chai = require("chai");
let expect = chai.expect;
let urlBase = "http://localhost:8080";

let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe("GET Veiculos",function(){
  it("Deve receber veiculos",function(done){
    request.get(
      { url : urlBase + "/veiculos" },
      function(error, response, body){

        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }
        expect(response.statusCode).to.equal(200);

        done();
      }
    );
  });

  it("Deve receber dois Veiculos Uno",function(done){
    request.get(
      {
        url : urlBase + "/buscar/?veiculo=Uno" 
      },
      function(error, response, body){

        var _body = {};
        try{
          _body = JSON.parse(body);
        }
        catch(e){
          _body = {};
        }

        expect(response.statusCode).to.equal(200);

        if( _body.should.have.property('encontrados') ){
          expect(_body.encontrados).to.have.lengthOf.at.least(2);

          //faz a verificacao na primeira carta
          if(_body.encontrados[0].should.have.property('veiculo')){
            expect(_body.encontrados[0].veiculo).to.equal('Uno');
          }
          if(_body.encontrados[0].should.have.property('marca')){
            expect(_body.encontrados[0].marca).to.equal('Fiat');
          }
        }

        done();
      }
    );
  });

});