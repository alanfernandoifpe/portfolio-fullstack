// server.js - Arquivo Principal
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Importa o arquivo de rotas principal
const apiRoutes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Usa as rotas importadas
app.use('/', apiRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});