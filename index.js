const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Имя пользователя MySQL
    password: '6Ce23_k_k_P', // Пароль MySQL (оставьте пустым, если вы не установили пароль)
    database: 'mydatabase' // Имя вашей базы данных
});

connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных MySQL: ' + err.stack);
    return;
  }
  console.log('Подключено к базе данных MySQL с id ' + connection.threadId);
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/add-user', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  connection.execute(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error inserting data: ' + err.stack);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'User added successfully', userId: results.insertId });
  });
});

app.get('/users', (req, res) => {
  const query = 'SELECT username FROM users';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data: ' + err.stack);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json(results);
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
