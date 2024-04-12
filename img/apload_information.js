let pages = [
    //main
    {
        name: "Этот глупый свин не понимает мечту девочки-зайки",
        URL: "https://www.anilibria.tv/release/seishun-buta-yaro-wa-yumemiru-shoujo-no-yume-wo-minai.html",
        img: "img/Этот глупый свин не понимает мечту девочки-зайки (Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai).jpg",
        main: true
    },

    {
        name: "Небесное вторжение",
        URL: "https://www.anilibria.tv/release/tenkuu-shinpan.html",
        img: "img/Небесное вторжения.jpg",
        main: true
    },

    {
        name: "Заботливая 800-летняя жена",
        URL: "https://anilibria.best/online/zabotlivaja-800-letnjaja-zhena-sezon-1-2019-1080-hd/10-1-0-600",
        img: "img/senko.webp",
        main: true
    },
    {
        name: "Кейджо!!!!!!",
        URL: "https://anilibria.iss.ink/release/keijo.html",
        img: "img/Кейджо!!!!!!.jpg",
        main: true
    },
    {
        name: "Сто девушек, которые очень-очень-очень-очень-очень сильно тебя любят",
        URL: "https://www.anilibria.tv/release/kimi-no-koto-ga-daidaidaidaidaisuki-na-100-nin-no-kanojo.html",
        img: "img/Сто девушек, которые очень-очень-очень-очень-очень сильно тебя любят.jpg",
        main: true
    },
    {
        name: "Чёрный призыватель",
        URL: "https://www.anilibria.tv/release/kuro-no-shoukanshi.html",
        img: "img/черный призыватель.jpg",
        main: true
    },
    {
        name: "Я делаю всё возможное, чтобы чувствовать себя как дома в другом мире",
        URL: "https://www.anilibria.tv/release/isekai-de-mofumofu-nadenade-suru-tame-ni-ganbattemasu.html",
        img: "img/Я делаю всё возможное, чтобы чувствовать себя как дома в другом мире.jpg",
        ingorm: true,
        main: true
    },
    {
        name: "Семья шпионов",
        URL: "https://anilibria.zone/online/semja-shpiona-2022-1080-hd/10-1-0-1634",
        img: "img/семья шпионов.jpg",
        main: true
    },
    {
        name: "Злодейка 99-го уровня",
        URL: "https://www.anilibria.tv/release/akuyaku-reijou-level-99-watashi-wa-ura-boss-desu-ga-maou-dewa-arimasen.html",
        img: "img/злодейка 99-го уровня.jpg",
        main: true
    },
    {
        name: "Мой телохранитель",
        URL: "https://www.anilibria.tv/release/ojou-to-banken-kun.html",
        img: "img/Мой телохранитель.jpg",
        main: true
    },
    {
        name: "Этот герой неуязвим, но очень осторожен",
        URL: "https://anilibria.zone/online/ehtot_geroj_neujazvim_no_ochen_ostorozhen_sezon_1_2019_1080_hd/10-1-0-256",
        img: "img/Этот герой неуязвим, но очень осторожен.jpg",
        main: true
    },
    {
        name: "Эта фарфоровая кукла влюбилась",
        URL: "https://www.anilibria.tv/release/sono-bisque-doll-wa-koi-wo-suru.html",
        img: "img/Эта фарфоровая кукла влюбилась.jpg",
        main: true
    },
    {
        name: "салатник чудаков",
        URL: "https://www.anilibria.tv/release/henjin-no-salad-bowl.html",
        img: "img/салатник чудаков.jpg",
        main: true
    },
    {
    name: "салатник чудаков",
    URL: "https://www.anilibria.tv/release/henjin-no-salad-bowl.html",
    img: "img/салатник чудаков.jpg",
    main: false
}
    //soon
];






//не трогать

pages.forEach(anime => {
    let animeList = anime.main ? document.getElementById("lents") : document.getElementById("soon_lents");
    
    if (!anime.main) {
        return; // Пропускаем выполнение скрипта для объектов с main: false
    }

    let animeDiv = document.createElement("div");
    let animeTitle = document.createElement("h3");
    let animeLink = document.createElement("a");
    let animeImg = document.createElement("img");
    animeDiv.classList.add("home_element");
    animeTitle.textContent = anime.name;

    animeImg.src = anime.img;
    animeImg.alt = anime.name;
    animeLink.href = anime.URL;

    if (anime.ingorm) {
        let informationDiv = document.createElement("div");
        informationDiv.classList.add("information");

        let informationTitle = document.createElement("p");
        informationTitle.id = "information_element";
        informationTitle.textContent = "i";

        let informationMessage = document.createElement("p");
        informationMessage.id = "informarion_mesage_element";
        informationMessage.textContent = "Это аниме еще не полностью вышло";
        animeDiv.appendChild(informationDiv);
        informationDiv.appendChild(informationTitle);
        informationDiv.appendChild(informationMessage);

        // Добавляем обработчик события для показа сообщения при наведении на "i"
        informationTitle.addEventListener("mouseover", function () {
            informationMessage.style.display = "block";
        });

        // Добавляем обработчик события для скрытия сообщения при уходе курсора с "i"
        informationTitle.addEventListener("mouseout", function () {
            informationMessage.style.display = "none";
        });
    }
    animeDiv.appendChild(animeLink);
    animeList.appendChild(animeDiv);
    animeLink.appendChild(animeImg);
    animeDiv.appendChild(animeTitle);
});
