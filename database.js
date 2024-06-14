const mysql = require('mysql2');
const bcrypt = require('bcrypt');

const connection = mysql.createConnection({
  host: 'ep-raspy-butterfly-a4wd5zm6-pooler.us-east-1.aws.neon.tech',
  user: 'root',
  password: '6Ce23_k_k_P',
  database: 'animeList'
});

connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
    return;
  }
  console.log('Успешное подключение к базе данных');
});

// Создание таблицы
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS animes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    main INT NOT NULL
  )
`;

connection.query(createTableQuery, (err, results) => {
  if (err) throw err;
  console.log('Таблица создана или уже существует');
});

module.exports = connection;
