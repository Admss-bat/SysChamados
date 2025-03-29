const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3306;  // Para localhost, user "const port = 3000;". Pode ser qualquer outra porta, na verdadem, mas padronizei essa para localhost.

// Middlewares
app.use(cors());  // Para permitir CORS
app.use(express.json());  // Para analisar requisições com JSON no corpo

// Rota básica de teste
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

//Informações do MySQL
const connection = mysql.createConnection({
    host: "gondola.proxy.rlwy.net",  // Host do banco no Railway
    user: "root",                // Usuário do banco de Dados
    password: "FHYdzwCdessrMqHCaEVMDtvPnqCAkMaO", // Senha do banco de Dados
    database: "railway",   // Nome do banco de Dados
    port: "36149" // A porta do banco de dados do Railway
})

//Verificando se vai conectar no BD
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.stack);
        return;
    }
    console.log('Conectado ao banco de dados MySQL com sucesso!');
});

//Rota para criação de chamados
app.post('/chamado', (req, res) => {
    const { solicitante, email, unidade, solicitacao } = req.body;

    // inserir no banco de dados (MySQL)
    const query = `INSERT INTO chamados (solicitante, email, unidade, solicitacao) VALUES (?, ?, ?, ?)`;
    connection.query(query, [solicitante, email, unidade, solicitacao], (err, result) => {
        if (err) {
            console.error('Erro ao inserir no banco:', err);
            return res.status(500).json({ message: 'Erro ao criar chamado.' });
        }

        res.status(201).json({
            message: 'Chamado criado com sucesso!',
            data: { solicitante, email, unidade, solicitacao }
        });
    });
}); 

// ---> Devo escrever isso no Postman para testar a API.
//{
//    "solicitante": "João",
//    "email": "joao@example.com",
//   "unidade": "TI",
//    "solicitacao": "Preciso de ajuda com a rede!"
//}

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
