const information_element = document.querySelectorAll('#information_element');
const informarion_mesage_element = document.querySelectorAll('#informarion_mesage_element');
const information_for_home1_element = document.getElementById("information_for_home1_element");
const information_mesage_for_home1_element = document.getElementById('information_mesage_for_home1_element');



// Массивы
let massiv_information_element = [information_element[0], information_element[1]];
let massiv_informarion_mesage_element = [informarion_mesage_element[0], informarion_mesage_element[1]];

// Действия
massiv_information_element[0].addEventListener("mouseenter", () => {
    massiv_informarion_mesage_element[0].style.display = "block";
});

massiv_information_element[0].addEventListener("mouseleave", () => {
    massiv_informarion_mesage_element[0].style.display = "none";
});

massiv_information_element[1].addEventListener("mouseenter", () => {
    massiv_informarion_mesage_element[1].style.display = "block";
});

massiv_information_element[1].addEventListener("mouseleave", () => {
    massiv_informarion_mesage_element[1].style.display = "none";
});

// Не трогать
information_for_home1_element.addEventListener("mouseenter", () => {
    information_mesage_for_home1_element.style.display = "block";
});

information_for_home1_element.addEventListener("mouseleave", () => {
    information_mesage_for_home1_element.style.display = "none";
});
