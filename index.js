const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/users', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ users: rows });
  });
});

app.post('/users', (req, res) => {
  const { username, password } = req.body;
  const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
  stmt.run(username, password, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID, username, password });
  });
  stmt.finalize();
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
