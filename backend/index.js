const express = require('express');
const server = express();
const cadastro = require('./src/data/db.json')

server.get('/cadastro', (req, res) => {
  return res.json(cadastro)
})

server.listen(3000, () => {
  console.log('Servidor em execução ... ');
})