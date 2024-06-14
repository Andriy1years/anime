const express = require('express');
const app = express();
const connection = require('./database');
const port = 3000;

// Middleware для статических файлов
app.use(express.static('public'));

// Подключение JSON парсера для обработки POST запросов
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Маршрут для получения всех записей из таблицы animes
app.get('/animes', (req, res) => {
  const query = 'SELECT * FROM animes';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Ошибка получения данных:', err);
      res.status(500).send('Ошибка получения данных');
      return;
    }
    res.json(results);
  });
});

// Маршрут для добавления новой записи в таблицу animes
app.post('/animes', (req, res) => {
  const { name, url, img, main } = req.body;
  const query = 'INSERT INTO animes (name, url, img, main) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, url, img, main], (err, results) => {
    if (err) {
      console.error('Ошибка добавления данных:', err);
      res.status(500).send('Ошибка добавления данных');
      return;
    }
    res.status(201).send('Запись добавлена');
  });
});

// Маршрут для обновления записи в таблице animes
app.put('/animes/:id', (req, res) => {
  const { id } = req.params;
  const { name, url, img, main } = req.body;
  const query = 'UPDATE animes SET name = ?, url = ?, img = ?, main = ? WHERE id = ?';
  connection.query(query, [name, url, img, main, id], (err, results) => {
    if (err) {
      console.error('Ошибка обновления данных:', err);
      res.status(500).send('Ошибка обновления данных');
      return;
    }
    res.send('Запись обновлена');
  });
});

// Маршрут для удаления записи из таблицы animes
app.delete('/animes/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM animes WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('Ошибка удаления данных:', err);
      res.status(500).send('Ошибка удаления данных');
      return;
    }
    res.send('Запись удалена');
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
