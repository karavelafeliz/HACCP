const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'erro de conexão:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

module.exports = db;