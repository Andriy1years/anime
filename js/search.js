const search = document.getElementById('search');
const button_search = document.getElementById('search_button');

const homeElements = document.querySelectorAll('.home_element'); // Выбираем все элементы с классом home_element

// Функция для подсветки букв в элементе
function highlightLetters(element, text) {
    let hasLetters = false;
    const letters = element.innerText.split('');
    letters.forEach(letter => {
        if (text.includes(letter.toLowerCase())) {
            element.innerHTML = element.innerHTML.replace(new RegExp(letter, 'gi'), `<span style="color: red;">${letter}</span>`);
            hasLetters = true;
        } else {
            element.innerHTML = element.innerHTML.replace(new RegExp(`<span style="color: red;">${letter}</span>`, 'gi'), letter);
        }
    });
    return hasLetters;
}

button_search.addEventListener('click', () => {
    const text = search.value.toLowerCase();

    // Если строка поиска пустая, вернуть все элементы home_element к изначальному состоянию
    if (text === "") {
        homeElements.forEach(element => {
            element.style.display = ""; // Показываем элемент
            element.querySelectorAll('span').forEach(span => {
                span.style.color = ""; // Удаляем стили подсветки букв
            });
        });
        return; // Выходим из функции, если строка пустая
    }

    // Проходим по каждому элементу home_element и подсвечиваем соответствующие буквы
    homeElements.forEach(element => {
        const h3Element = element.querySelector('h3');
        if (!highlightLetters(h3Element, text)) {
            element.style.display = "none"; // Скрываем элемент, если в нем нет нужных букв
        } else {
            element.style.display = ""; // Показываем элемент, если в нем есть нужные буквы
        }
    });
});
