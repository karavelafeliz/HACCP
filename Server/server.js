const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Olá olá olá');
});

app.listen(port, () => {
    console.log(`Servidor em execução em http://localhost:${port}`);
});