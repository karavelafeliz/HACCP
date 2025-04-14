const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');
const User = require('./user');

app.get("/", (req, res) => {
    res.send('Olá olá olá');
});

app.listen(port, () => {
    console.log(`Servidor em execução em http://localhost:${port}`);
});
//const users = [
//    { id: 1, name: 'John Doe' },
//    { id: 2, name: 'Jane Doe' },
//    { id: 3, name: 'Sam Smith' }
//  ];
  
  app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  });

  app.get('/sergio', (req, res) => {
    res.json('Teste Sérgio');
  })