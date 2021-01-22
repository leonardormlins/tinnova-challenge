const express = require('express');
const bodyParser = require('body-parser');
const boolParser = require('express-query-boolean');
const config = require('config');
const consign = require('consign');
const cors = require('cors');

module.exports = () => {
  const app = express();

  app.set('port', process.env.PORT || config.get('server.port'));

  app.use(cors());
  app.use(bodyParser.json());
  app.use(boolParser());

  consign({cwd: 'api'})
    .then('data')
    .then('controllers')
    .then('routes')
    .into(app)

  return app;
};