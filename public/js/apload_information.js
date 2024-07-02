document.addEventListener('DOMContentLoaded', () => {

let pages = [
    //main
    {
        name: "Этот глупый свин не понимает мечту девочки-зайки",
        URL: "https://www.anilibria.tv/release/seishun-buta-yaro-wa-yumemiru-shoujo-no-yume-wo-minai.html",
        img: "https://www.anilibria.tv/storage/releases/posters/7462/2b7CtR3MKo58LTRX__e292c0f8c7b53aa42640222125b362b3.jpg",
        main: 1
    },

    {
        name: "Небесное вторжение",
        URL: "https://www.anilibria.tv/release/tenkuu-shinpan.html",
        img: "img/Небесное вторжения.jpg",
        main: 1
    },

    {
        name: "Заботливая 800-летняя жена",
        URL: "https://anilibria.best/online/zabotlivaja-800-letnjaja-zhena-sezon-1-2019-1080-hd/10-1-0-600",
        img: "img/senko.webp",
        main: 1
    },
    {
        name: "Кейджо!!!!!!",
        URL: "https://anilibria.iss.ink/release/keijo.html",
        img: "https://www.anilibria.tv/storage/releases/posters/3054/G0iufkrgQspQIYwI__ee1e950204800815d543f824de568e6c.jpg",
        main: 1
    },
    {
        name: "Сто девушек, которые очень-очень-очень-очень-очень сильно тебя любят",
        URL: "https://www.anilibria.tv/release/kimi-no-koto-ga-daidaidaidaidaisuki-na-100-nin-no-kanojo.html",
        img: "https://www.anilibria.tv/storage/releases/posters/9544/zhysjGOdJ4sTs2gZ__2c907d391ce33e6cd892c539f3702b39.jpg",
        main: 1
    },
    {
        name: "Чёрный призыватель",
        URL: "https://www.anilibria.tv/release/kuro-no-shoukanshi.html",
        img: "https://www.anilibria.tv/storage/releases/posters/9222/H85Z4rMKKlQRBiam__c9111a3e8e186bf1b8222737a9390ac5.jpg",
        main: 1
    },
    {
        name: "Я делаю всё возможное, чтобы чувствовать себя как дома в другом мире",
        URL: "https://www.anilibria.tv/release/isekai-de-mofumofu-nadenade-suru-tame-ni-ganbattemasu.html",
        img: "https://www.anilibria.tv/storage/releases/posters/9618/6XpIcbANM5xBa6t3__9532738d6f3f9a58245a696cee1753fb.jpg",
        main: 1
    },
    {
        name: "Семья шпиона",
        URL: "https://anilibria.zone/online/semja-shpiona-2022-1080-hd/10-1-0-1634",
        img: "https://www.anilibria.tv/storage/releases/posters/9161/112N0cfCJOqxzhMg__603664addb3416170efd513609bf83cb.jpg",
        main: 1
    },
    {
        name: "Злодейка 99-го уровня",
        URL: "https://www.anilibria.tv/release/akuyaku-reijou-level-99-watashi-wa-ura-boss-desu-ga-maou-dewa-arimasen.html",
        img: "img/злодейка 99-го уровня.jpg",
        main: 1
    },
    {
        name: "Мой телохранитель",
        URL: "https://www.anilibria.tv/release/ojou-to-banken-kun.html",
        img: "https://www.anilibria.tv/storage/releases/posters/9561/zmsXkmzvmVhwbwxY__8fe968fa1d15957c16a7f2747c4425d4.jpg",
        main: 1
    },
    {
        name: "Этот герой неуязвим, но очень осторожен",
        URL: "https://anilibria.zone/online/ehtot_geroj_neujazvim_no_ochen_ostorozhen_sezon_1_2019_1080_hd/10-1-0-256",
        img: "img/Этот герой неуязвим, но очень осторожен.jpg",
        main: 1
    },
    {
        name: "Эта фарфоровая кукла влюбилась",
        URL: "https://www.anilibria.tv/release/sono-bisque-doll-wa-koi-wo-suru.html",
        img: "https://www.anilibria.tv/storage/releases/posters/9122/qNbPeJITcPEKToGU__1916d5e2cf72d1e72fbde4aefadb8b33.jpg",
        main: 1
    },
    {
        name: "салатник чудаков",
        URL: "https://www.anilibria.tv/release/henjin-no-salad-bowl.html",
        img: "https://www.anilibria.tv/storage/releases/posters/9689/g8oc5KzlVdhRqOBo__364fecb0561e9d03a561a580eca62f8d.jpg",
        main: 1
    },
    {
        name: "Неразумный ангел в танце с демоном",
        URL: "https://www.anilibria.tv/release/oroka-na-tenshi-wa-akuma-to-odoru.html",
        img: "https://www.anilibria.tv/storage/releases/posters/9619/iO1IycS7PfyB5a96__1091b00356102f8e0defd2eb251c3ee5.jpg",
        main: 1
    },
    {
        name: "МЭШЛ: Магия и мускулы",
        URL: "https://www.anilibria.tv/release/mashle.html",
        img: "https://www.anilibria.tv/storage/releases/posters/9416/m7sgKrzJ0ZIMn97l__34e3469f0dac6353d515cb081e47311a.jpg",
        main: 1
    },
    {
        name: "Класс убийц",
        URL: "https://ru-7e439cdefda91c2e-fra.anilibria.sbs/release/ansatsu-kyoushitsu-klass-ubiyts.html",
        img: "https://www.anilibria.tv/storage/releases/posters/409/Xk8Lb5uUiL1TAZ5k__761829a36615ea84d8af65e3fa8d6b26.jpg",
        main: 1
    },






    //soon------------------------------------------------------------------------------
    {
        name: "Ёко из Сэнгоку",
        URL: "https://www.anilibria.tv/release/sengoku-youko.html",
        img: "https://www.anilibria.tv/storage/releases/posters/9634/yYYXMt50oM75YNHB__d6bab6b3b042d48a551054a2c6e15687.jpg",
        main: 3
    },
    {
        name: "Заботы запертой принцессы вампиров",
        URL: "https://www.anilibria.tv/release/hikikomari-kyuuketsuki-no-monmon.html",
        img: "https://www.anilibria.tv/storage/releases/posters/9552/jR0JAdkgenbI2tsc__224485904f24d944e6b0a6dbf9332d29.jpg",
        main: 3
    },
    {
        name: "Рагна Багровый",
        URL: "https://www.anilibria.tv/release/ragna-crimson.html",
        img: "https://www.anilibria.tv/storage/releases/posters/9554/reQYxCCOShMJdZd1__ac0b79dc25b18339177cf11bad95ebd2.jpg",
        main: 3
    },
    {
        name: "Провожающая в последний путь Фрирен",
        URL: "https://www.anilibria.tv/release/sousou-no-frieren.html",
        img: "https://www.anilibria.tv/storage/releases/posters/9542/R1ep1mdSXtUsAhgD__cf83260f7c4329bd4a768fefb4bedd25.jpg",
        main: 3
    },
    {
        name: "Небо в цвету!",
        URL: "https://www.anilibria.tv/release/appare-ranman.html",
        img: "https://www.anilibria.tv/storage/releases/posters/8589/ek1Cm7HPQkya6gXj__9c310c923ff2e02aa03c6d5717edb4c0.jpg",
        main: 3
    },

    {
        name: "Перевоплотился в седьмого принца, так что я буду совершенствовать свою магию, как захочу",
        URL: "https://www.anilibria.tv/release/tensei-shitara-dainana-ouji-datta-node-kimama-ni-majutsu-wo-kiwamemasu.html",
        img: "img/Перевоплотился в седьмого принца, так что я буду совершенствовать свою магию, как захочу.jpg",
        main: 3
    },
    {
        name: "Дюрарара!!",
        URL: "https://www.anilibria.tv/release/durarara.html",
        img: "img/Дюрарара!!.jpg",
        main: 3
    },
    {
        name: "Дюрарара!! x2 / DRR 2",
        URL: "https://www.anilibria.tv/release/drr-x2.html",
        img: "img/Дюрарара!! x2.jpg",
        main: 3
    },
    {
        name: "Мириады цветов фантомного мира",
        URL: "https://www.anilibria.tv/release/musaigen-no-phantom-world.html",
        img: "img/Мириады цветов фантомного мира.jpg",
        main: 3
    },
    {
        name: "Волчица и пряности: Торговец встречает мудрую волчицу",
        URL: "https://www.anilibria.tv/release/ookami-to-koushinryou-merchant-meets-the-wise-wolf.html",
        img: "img/Торговец встречает мудрую волчицу.jpg",
        main: 3
    },
    {
        name: "Одна комната, солнечный свет, ангел",
        URL: "https://www.anilibria.tv/release/one-room-hiatari-futsuu-tenshi-tsuki.html",
        img: "img/Одна комната, солнечный свет, ангел.jpg",
        main: 3
    },
    {
        name: "Добро пожаловать в класс превосходства",
        URL: "https://www.anilibria.tv/release/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e.html",
        img: "img/Добро пожаловать в класс превосходства.jpg",
        main: 3
    },

    {
        name: "Я, владыка демонов, взял эльфийку-рабыню в жёны. ",
        URL: "https://www.anilibria.tv/release/maou-no-ore-ga-dorei-elf-wo-yome-ni-shitanda-ga-dou-medereba-ii.html",
        img: "img/взял эльфийку-рабыню в жёны.jpg",
        main: 3
    },
    {
        name: "Адский рай",
        URL: "https://www.anilibria.tv/release/jigokuraku.html",
        img: "img/Адский рай.jpg",
        main: 3
    },
    {
        name: "Перевоплотился в седьмого принца, так что я буду совершенствовать свою магию, как захочу",
        URL: "https://www.anilibria.tv/release/tensei-shitara-dainana-ouji-datta-node-kimama-ni-majutsu-wo-kiwamemasu.html",
        img: "img/Перевоплотился в седьмого принца так что я буду совершенствовать свою магию, как захочу.jpg",
        main: 3
    },
    {
        name: "Лунное путешествие приведёт к новому миру 2",
        URL: "https://www.anilibria.tv/release/tsuki-ga-michibiku-isekai-douchuu.html",
        img: "img/Лунное путешествие приведёт к новому миру 2.jpg",
        main: 3
    },
    {
        name: "Мир по-прежнему красив",
        URL: "https://anilibria.today/anime/mir-po-prezhnemu-krasiv.html",
        img: "img/Мир по-прежнему красив.webp",
        main: 3
    },
    {
        name: "Ангел по соседству",
        URL: "https://anilibria.today/anime/mir-po-prezhnemu-krasiv.html",
        img: "https://static-libria.weekstorm.us/storage/releases/posters/9334/cl1SY8vAlwrPCnzq__3611e6b98c91395cc85d7e8b7ddc21a3.jpg",
        main: 3
    },
];










//не трогать

pages.forEach(anime => {
    let animeList = null;
    if (anime.main == 1) {
        animeList = document.getElementById("lents");
    } else if (anime.main == 2) {
        animeList = document.getElementById("watch_lents");
    } else if (anime.main == 3) {
        animeList = document.getElementById("soon_lents");
    }

    // Проверка, что элемент найден
    if (!animeList) {
        console.warn(`No element found for anime with main value ${anime.main}`);
        return;
    }

    let animeDiv = document.createElement("div");
    let animeLink = document.createElement("a");
    let animeTitle = document.createElement("h3");
    let animeImg = document.createElement("img");

    animeDiv.classList.add("element");
    animeTitle.textContent = anime.name;
    animeImg.src = anime.img;
    animeImg.alt = anime.name;
    animeLink.href = anime.URL;

    animeDiv.appendChild(animeLink);
    animeList.appendChild(animeDiv);
    animeLink.appendChild(animeImg);
    animeLink.appendChild(animeTitle);
});
});