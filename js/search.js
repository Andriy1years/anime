const search = document.getElementById('search');
const button_search = document.getElementById('search_button');

const h3Elements = document.querySelectorAll('h3');

// Функция для подсветки букв в элементе
function highlightLetters(element, text) {
    const letters = element.innerText.split('');
    letters.forEach(letter => {
        if (text.includes(letter.toLowerCase())) {
            element.innerHTML = element.innerHTML.replace(new RegExp(letter, 'gi'), `<span style="color: red;">${letter}</span>`);
        } else {
            element.innerHTML = element.innerHTML.replace(new RegExp(`<span style="color: red;">${letter}</span>`, 'gi'), letter);
        }
    });
}

button_search.addEventListener('click', () => {
    const text = search.value.toLowerCase();

    // Проходим по каждому элементу h3 и подсвечиваем соответствующие буквы
    h3Elements.forEach(element => {
        highlightLetters(element, text);
    });
});
