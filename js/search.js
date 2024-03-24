const search = document.getElementById('search');
const button_search = document.getElementById('search_button');
const texts = [
    document.querySelector("#h3_home_element1").innerText,
    document.querySelector("#h3_home_element2").innerText,
    document.querySelector("#h3_home_element3").innerText,
    document.querySelector("#h3_home_element4").innerText,
    document.querySelector("#h3_home_element5").innerText,
    document.querySelector("#h3_home_element6").innerText,
    document.querySelector("#h3_home_element7").innerText,
    document.querySelector("#h3_home_element8").innerText,
    document.querySelector("#h3_home_element9").innerText,
    document.querySelector("#h3_home_element10").innerText,
    document.querySelector("#h3_home_element11").innerText
];
let massiv = [];







button_search.addEventListener('click', () => {
    let text = search.value;
    massiv.pop();
    massiv.push(text);
    let letters = text.split(''); // Разбиваем текст на буквы
    letters = letters.filter(letter => letter !== ' '); // Фильтруем пробелы
    console.log(letters); // Выводим буквы в консоль

    for (let y = 0; y < massiv.length; y++) {
        let wordLetters = massiv[y].split('');
        for (let i = 0; i < wordLetters.length; i++) {
            document.getElementById(wordLetters[i]).style.color = "red";    
           
        }
    }
    
    
   
});
// Проход по всем элементам массива texts и добавление стилей к каждому из них
texts.forEach((text, index) => {
    const element = document.querySelector(`#h3_home_element${index + 1}`);
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            newText += " ";
        } else {
            newText += `<span id="${text[i]}">${text[i]}</span>`;
        }
    }
    element.innerHTML = newText;
});




