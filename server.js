const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve arquivos estáticos da pasta "assets" e "pages"
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'pages')));
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
