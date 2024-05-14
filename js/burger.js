const burger = document.querySelector(".left_burger");

let opened = false;
burger.addEventListener('click', () => {
    if (!opened) {
        console.log(false);
        
        opened = true;
    }
    else {
        console.log(true);
        opened = false;
    }
})