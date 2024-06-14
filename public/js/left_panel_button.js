const button_home = document.getElementById('button_home');
const button_soon = document.getElementById('button_soon');
const button_for_me = document.getElementById('button_for_me');
const button_admin_panel = document.getElementById('button_admin_panel');
const button_watch = document.getElementById('button_watch');

const home = document.querySelector('.home');
const soon = document.querySelector('.soon');
const for_me = document.querySelector('.for_me');
const admin_panel = document.querySelector('.admin_panel');
const im_watching = document.querySelector('.im_watching');


//обнуление
home.style.display = 'none';
im_watching.style.display = 'none';
soon.style.display = 'none';
for_me.style.display = 'none';
admin_panel.style.display = 'block';
 
//left element
button_home.addEventListener('click', () => {
    button_home.style.borderColor = '#c3c3c360';
    button_watch.style.borderColor = '#c3c3c300';
    button_soon.style.borderColor = '#c3c3c300';
    button_for_me.style.borderColor = '#c3c3c300';
    button_admin_panel.style.borderColor = '#c3c3c300';

    home.style.display = 'block';
    im_watching.style.display = 'none';
    soon.style.display = 'none';
    for_me.style.display = 'none';
    admin_panel.style.display = 'none';
});

button_watch.addEventListener('click', () => {
    button_home.style.borderColor = '#c3c3c300';
    button_watch.style.borderColor = '#c3c3c360';
    button_soon.style.borderColor = '#c3c3c300';
    button_for_me.style.borderColor = '#c3c3c300';
    button_admin_panel.style.borderColor = '#c3c3c300';

    home.style.display = 'none';
    im_watching.style.display = 'block';
    soon.style.display = 'none';
    for_me.style.display = 'none';
    admin_panel.style.display = 'none';
});

button_soon.addEventListener('click', () => {
    button_home.style.borderColor = '#c3c3c300';
    button_watch.style.borderColor = '#c3c3c300';
    button_soon.style.borderColor = '#c3c3c360';
    button_for_me.style.borderColor = '#c3c3c300';
    button_admin_panel.style.borderColor = '#c3c3c300';

    home.style.display = 'none';
    im_watching.style.display = 'none';
    soon.style.display = 'block';
    for_me.style.display = 'none';
    admin_panel.style.display = 'none';
});

button_for_me.addEventListener('click', () => {
    button_home.style.borderColor = '#c3c3c300';
    button_watch.style.borderColor = '#c3c3c300';
    button_soon.style.borderColor = '#c3c3c300';
    button_for_me.style.borderColor = '#c3c3c360';
    button_admin_panel.style.borderColor = '#c3c3c300';

    home.style.display = 'none';
    im_watching.style.display = 'none';
    soon.style.display = 'none';
    for_me.style.display = 'block';
    admin_panel.style.display = 'none';
});

button_admin_panel.addEventListener('click', () => {
    button_home.style.borderColor = '#c3c3c300';
    button_watch.style.borderColor = '#c3c3c300';
    button_soon.style.borderColor = '#c3c3c300';
    button_for_me.style.borderColor = '#c3c3c300';
    button_admin_panel.style.borderColor = '#c3c3c360';

    home.style.display = 'none';
    im_watching.style.display = 'none'; 
    soon.style.display = 'none';
    for_me.style.display = 'none';
    admin_panel.style.display = 'block';
});