// routes/index.js
const express = require('express');
const router = express.Router();

// Importa os controllers
const projetosController = require('../controllers/projetosController');
const contatoController = require('../controllers/contatoController');

// Define as rotas
router.get('/api/projetos', projetosController.getAllProjetos);
router.post('/api/contato', contatoController.createContato);

module.exports = router;