# Veículos Frontend

Para o funcionamento da SPA basta instalar as dependências:
```npm install```

e executar a aplicação:
```npm start```

- *OBS: Lembre-se de ter acessível a API (por padrão porta 8080)*

## Requisitos funcionais
- **Permitir o cadastro de veículos**

*Para o cadastro basta na homepage clicar em Cadastrar e preencher o formulário*

- **Permitir a atualização de dados de um veículo**

*Para atualizar ir em Consultar > Buscar e Editar > Faça a busca > clique em editar e atualize como preferir*

- **Permitir a exclusão de dados de um veículo**

*Para excluir ir em Consultar > Buscar e Editar > Faça a busca > clique em editar e exclua*

- **Exibir a informação de quantos veículos estão como não vendidos na base**

*Ir em Consultar > Buscar e Editar > Busque Vendidos=Não > Aparecerá o número veículos não vendidos seguido de sua lista*

- **Exibir a informação da distribuição de veículos por década de fabricação**

*Ir em Consultar > Listar e Exibir > Qtde por década de fabricação*

- **Exibir a informação da distribuição de veículos por fabricante**

*Ir em Consultar > Buscar e Editar > Busque Marca=<SUAMARCA> > Aparecerá o número veículos desta marca seguido de sua lista*

- **Exibir os carros registrados durante a última semana**

*Ir em Consultar > Listar e Exibir > Cadastrados na última semana*

- **Deverá haver consistência das marcas fornecidas. Não poderá haver marcas escritas de forma errada**

*O usuário tem um dropdown para escolher a marca, e o frontend faz a validação antes de enviar para a API*
