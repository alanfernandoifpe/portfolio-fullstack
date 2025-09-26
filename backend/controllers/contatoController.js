// controllers/contatoController.js
const db = require('../config/database');
const stripHtml = (html) => (html || '').replace(/<[^>]*>?/gm, '');

exports.createContato = (req, res) => {
    const nome = req.body.nome ? stripHtml(req.body.nome).trim() : '';
    const email = req.body.email ? stripHtml(req.body.email).trim() : '';
    const mensagem = req.body.mensagem ? stripHtml(req.body.mensagem).trim() : '';

    if (!nome || !email || !mensagem) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Por favor, insira um endereço de e-mail válido.' });
    }

    const sql = `INSERT INTO mensagens (nome, email, mensagem) VALUES (?, ?, ?)`;
    const params = [nome, email, mensagem];
    db.run(sql, params, function(err) {
        if (err) {
            console.error('Erro ao inserir no banco:', err.message);
            return res.status(500).json({ error: 'Erro ao salvar a mensagem.' });
        }
        console.log(`Nova mensagem inserida com o ID: ${this.lastID}`);
        res.status(201).json({ success: 'Mensagem recebida com sucesso!' });
    });
};