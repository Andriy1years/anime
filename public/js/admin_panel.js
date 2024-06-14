fetch('/animes')
  .then(response => response.json())
  .then(data => {
    const animeList = document.getElementById('anime-list');
    data.forEach(anime => {
      const animeItem = document.createElement('div');
      animeItem.innerHTML = `
        <h1>${anime.name}</h1>
        <a href="${anime.url}" target="_blank">
          <img src="${anime.img}" alt="${anime.name}" width="200">
        </a>
        <p>Main: ${anime.main}</p>
      `;
      animeList.appendChild(animeItem);
    });
  })
  .catch(error => console.error('Ошибка загрузки данных:', error));
