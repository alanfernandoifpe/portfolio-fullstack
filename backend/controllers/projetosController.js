// controllers/projetosController.js
const db = require('../config/database');

exports.getAllProjetos = (req, res) => {
    const sql = "SELECT * FROM projetos ORDER BY id DESC";
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar os projetos.' });
        }
        res.json({ projetos: rows });
    });
};