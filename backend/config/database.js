// config/database.js CORRIGIDO

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./portfolio.db', (err) => {
    if (err) {
        console.error('Erro ao abrir o banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
        setupDatabase();
    }
});

function setupDatabase() {
    db.serialize(() => {
        // ==================================================================
        //   ↓↓↓  AQUI ESTÁ A CORREÇÃO  ↓↓↓
        // ==================================================================
        // Tabela de mensagens (código completo e correto)
        db.run(`CREATE TABLE IF NOT EXISTS mensagens (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT NOT NULL,
            mensagem TEXT NOT NULL,
            data_envio DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);
        // ==================================================================

        // Tabela de projetos (código que já estava correto)
        db.run(`CREATE TABLE IF NOT EXISTS projetos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            descricao TEXT NOT NULL,
            imagem_url TEXT,
            link_live TEXT,
            link_repo TEXT
        )`, (err) => {
            if (!err) {
                db.get("SELECT COUNT(*) as count FROM projetos", (err, row) => {
                    if (row && row.count === 0) {
                        console.log('Populando a tabela de projetos com SEUS dados...');
                        const stmt = db.prepare("INSERT INTO projetos (titulo, descricao, imagem_url, link_live, link_repo) VALUES (?, ?, ?, ?, ?)");
                        
                        const projetosExemplo = [
                            [
                                'Github',
                                'Acesse meu portfólio no github',
                                'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png',
                                'https://github.com/alanfernandoifpe',
                                'SEU_LINK_GITHUB'
                            ],
                            [
                                'LinkedIn',
                                'Acesse meu perfil no LinkedIn',
                                'URL_DA_SUA_FOTO_AQUI',
                                'Shttps://www.linkedin.com/in/alanfernandocosta/',
                                '#'
                            ],
                            [
                                'Discord',
                                'Converse comigo',
                                'https://www.internetmatters.org/wp-content/uploads/2024/10/discord-logo.webp',
                                'SEU_LINK_DISCORD',
                                '#'
                            ]
                        ];
                        
                        projetosExemplo.forEach(p => stmt.run(p));
                        stmt.finalize();
                    }
                });
            }
        });
    });
}

module.exports = db; // Exporta a conexão do banco