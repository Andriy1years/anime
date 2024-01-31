const seven_element = document.getElementById("information_for_seven_element");
const informarion_mesage_for_seven_element = document.getElementById('informarion_mesage_for_seven_element');
const nine_element = document.getElementById("information_for_nine_element");
const informarion_mesage_for_nine_element = document.getElementById('informarion_mesage_for_nine_element');

const bodyElement = document.body;



//seven element
seven_element.addEventListener("mouseenter", () => {
    informarion_mesage_for_seven_element.style.display = "block";
    
})

seven_element.addEventListener("mouseleave", () => {
    informarion_mesage_for_seven_element.style.display = "none";
    
})

//nine element
nine_element.addEventListener("mouseenter", () => {
    informarion_mesage_for_nine_element.style.display = "block";
})

nine_element.addEventListener("mouseleave", () => {
    informarion_mesage_for_nine_element.style.display = "none";
})
