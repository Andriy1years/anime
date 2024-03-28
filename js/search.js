const search = document.getElementById('search');
const button_search = document.getElementById('search_button');
const homeElements = document.querySelectorAll('.home_element'); // Выбираем все элементы с классом home_element
let originalOrder = Array.from(homeElements); // Сохраняем изначальный порядок элементов

// Функция для подсветки букв в элементе
function highlightLetters(element, text) {
    let count = 0;
    const letters = element.innerText.split('');
    letters.forEach(letter => {
        if (letter === ' ') return; // Пропускаем пробелы
        if (text.includes(letter.toLowerCase())) {
            element.innerHTML = element.innerHTML.replace(new RegExp(letter, 'gi'), `<span style="color: red;">${letter}</span>`);
            count++;
        } else {
            element.innerHTML = element.innerHTML.replace(new RegExp(`<span style="color: red;">${letter}</span>`, 'gi'), letter);
        }
    });
    return count;
}

function performSearch() {
    const text = search.value.toLowerCase();

    // Если строка поиска пустая, вернуть все элементы home_element к изначальному состоянию
    if (text === "") {
        homeElements.forEach((element, index) => {
            document.querySelector('.lents').appendChild(originalOrder[index]); // Восстанавливаем изначальный порядок элементов
            element.querySelectorAll('span').forEach(span => {
                span.style.color = ""; // Удаляем стили подсветки букв
            });
        });
        return; // Выходим из функции, если строка пустая
    }

    // Проходим по каждому элементу home_element и подсвечиваем соответствующие буквы
    homeElements.forEach(element => {
        const h3Element = element.querySelector('h3');
        const matchCount = highlightLetters(h3Element, text);

        if (matchCount === 0) {
            element.style.display = "none"; // Скрываем элемент, если в нем нет нужных букв
        } else {
            element.style.display = ""; // Показываем элемент, если в нем есть нужные буквы
            element.setAttribute('data-match-count', matchCount); // Сохраняем количество совпадений в атрибуте
        }
    });

    // Сортируем элементы по количеству совпадений и перемещаем наибольшее количество в начало
    const sortedElements = Array.from(homeElements).sort((a, b) => {
        const countA = parseInt(a.getAttribute('data-match-count'));
        const countB = parseInt(b.getAttribute('data-match-count'));
        return countB - countA;
    });

    // Удаляем атрибуты с количеством совпадений, чтобы избежать конфликтов при последующих поисках
    homeElements.forEach(element => {
        element.removeAttribute('data-match-count');
    });

    // Перерисовываем элементы в новом порядке
    sortedElements.forEach(element => {
        document.querySelector('.lents').appendChild(element);
    });
}

button_search.addEventListener('click', performSearch);

search.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        performSearch();
    }
});
