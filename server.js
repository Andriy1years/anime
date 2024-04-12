const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Указываем путь к папке для сохранения изображений
const imgFolderPath = path.join(__dirname, 'img');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
// Настройка multer для загрузки файлов
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, imgFolderPath);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

// Обработка POST-запроса на загрузку изображений
app.post('/upload', upload.single('image'), (req, res) => {
    res.send('Изображение успешно загружено');
});


  

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
