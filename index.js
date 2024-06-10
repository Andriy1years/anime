const http = require('http');
const fs = require('fs');

// Порт, на котором будет работать ваш сервер
const port = 3000;

// Функция для чтения JSON-файла
function loadAnimeData(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Ошибка чтения файла:', error);
        return null;
    }
}

// Путь к вашему JSON-файлу
const filePath = 'anime.json';

// Создаем HTTP-сервер
const server = http.createServer((req, res) => {
    // Загружаем данные из файла
    const animeList = loadAnimeData(filePath);

    // Проверяем, успешно ли загружены данные
    if (animeList) {
        // Отправляем данные клиенту
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(animeList));
    } else {
        // Если возникла ошибка при загрузке данных, отправляем сообщение об ошибке
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Ошибка загрузки данных об аниме.');
    }
});

// Запускаем сервер на указанном порту
server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
