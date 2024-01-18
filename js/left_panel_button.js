const left_panels = [
    button_home = document.getElementById('button_home'),
    soon = document.getElementById('soon'),
    for_me = document.getElementById('for_me'),
    admin_panel = document.getElementById('admin_panel'),
];


button_home.addEventListener('click', () => {
    button_home.style.borderColor = '#c3c3c360';
    soon.style.borderColor = '#c3c3c300';
    for_me.style.borderColor = '#c3c3c300';
    admin_panel.style.borderColor = '#c3c3c300';
});

soon.addEventListener('click', () => {
    button_home.style.borderColor = '#c3c3c300';
    soon.style.borderColor = '#c3c3c360';
    for_me.style.borderColor = '#c3c3c300';
    admin_panel.style.borderColor = '#c3c3c300';

});

for_me.addEventListener('click', () => {
    button_home.style.borderColor = '#c3c3c300';
    soon.style.borderColor = '#c3c3c300';
    for_me.style.borderColor = '#c3c3c360';
    admin_panel.style.borderColor = '#c3c3c300';

});

admin_panel.addEventListener('click', () => {
    button_home.style.borderColor = '#c3c3c300';
    soon.style.borderColor = '#c3c3c300';
    for_me.style.borderColor = '#c3c3c300';
    admin_panel.style.borderColor = '#c3c3c360';

});



//------------------integration-----------------

