const express = require('express');
const path = require('path');
const db = require('./database'); // Подключаем наш модуль базы данных
const app = express();
const port = process.env.PORT || 3000;

// Указываем Express обслуживать статические файлы из директории "public"
app.use(express.static(path.join(__dirname, 'public')));

// Добавляем middleware для обработки JSON
app.use(express.json());

// Маршрут для главной страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Маршрут для добавления пользователя
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.run(query, [name, email], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: this.lastID });
    }
  });
});

// Маршрут для получения всех пользователей
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ users: rows });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
