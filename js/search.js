const search = document.getElementById('search')
const button_search = document.getElementById('search_button')
const text = document.querySelector(".home_element h3").innerText; 
let massiv = [];



button_search.addEventListener('click', () => {
    let text = search.value;
    massiv.pop();
    massiv.push(text);
    let letters = massiv[0].split('');
    letters = letters.filter(letter => letter !== ' ');
   //нужно сделать for и поставить проверку!!!!!
})

//слова
window.onload = function() {
   
    var newText = ""; 
    for (var i = 0; i < text.length; i++) {
        if (text[i] === " ") { 
            newText += " ";
        } else {
            newText += "<span id='" + text[i] + "'>" + text[i] + "</span>";
        }
    }
    document.querySelector(".home_element h3").innerHTML = newText; 
}

