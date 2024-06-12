document.addEventListener('DOMContentLoaded', function() {
  const userForm = document.getElementById('userForm');
  const userList = document.getElementById('userList');

  // Загрузка списка пользователей при загрузке страницы
  fetch('/users')
    .then(response => response.json())
    .then(data => {
      userList.innerHTML = '';
      data.users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.username;
        userList.appendChild(li);
      });
    });

  // Добавление нового пользователя
  userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(user => {
      const li = document.createElement('li');
      li.textContent = user.username;
      userList.appendChild(li);
      userForm.reset();
    })
    .catch(error => console.error('Ошибка:', error));
  });
});
