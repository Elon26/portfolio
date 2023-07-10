const works = [
    {
        id: "dfgd32432dsf3wq2",
        name: "Интернет-магазин Популярная техника",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2Fwebstore.jpg?alt=media&token=32d5d46c-4d3c-43d9-a672-457d2fd6a41b",
        stack: "React + Redux + TypeScript + Firebase",
        repository: "https://github.com/Elon26/my-shop",
        deploy: "https://elon26.github.io/my-shop/",
        description: "Опубликованная версия интернет-магазина содержит тестовую базу данных, состоящую из 4 категорий, 16 подкатегорий и 160 товаров, также ней исключён функционал оплаты товара, в остальном представленная версия полностью соответствует рабочей. В проекте реализованы следующие страницы - Главная, Страницы категории / подкатегории / товара, Корзина, Страницы авторизации / регистрации и Страница администратора, с сопутствующим функционалом. Для доступа на страницу администратора, где настроен функционал создания, редактирования и удаления товаров, используйте логин admin@bk.ru и пароль Admin@2612 (более подробное описание приложения представлено в Readme-файле репозитория)."
    },
    {
        id: "dfkjd32432dxf3wq2",
        name: "Интернет-магазин Султан",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2Fsultan.jpg?alt=media&token=0be249c2-b8c8-4ac5-8c16-362a5547b0ea",
        stack: "React + Redux + TypeScript + Firebase + JEST + React Testing Library",
        repository: "https://github.com/Elon26/sultan-webshop",
        deploy: "https://elon26.github.io/sultan-webshop/",
        adminPanel: "https://elon26.github.io/sultan-webshop/admin",
        description: "Опубликованная версия интернет-магазина содержит тестовую базу данных, состоящую из 21 товара, также в данной версии исключён функционал оплаты товара, в остальном представленная версия полностью соответствует рабочей. В проекте реализованы страницы - Главная, Каталог, Корзина, и Страница администратора, со всем сопутствующим функционалом. Для доступа на страницу администратора, где настроен функционал создания, редактирования и удаления товаров, используйте ссылку выше (более подробное описание приложения представлено в Readme-файле репозитория)."
    },
    {
        id: "dfkjd32432dsf3wq2",
        name: "Кинопортал (аналог ivi.ru)",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2Fivi.jpg?alt=media&token=c1af8fbf-50c8-4e34-a906-5aab8b2e1bb4",
        stack: "React + Redux + TypeScript + Storybook + Next.JS + JEST + React Testing Library + Docker",
        repository: "https://github.com/Elon26/dns-movies-new",
        install: "https://github.com/Elon26/dns-movies-new#%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BE%D0%BA-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B8-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0",
        description: "Проект является fullstack-приложением по поиску фильмов и сериалов, вдохновленным порталами ivi.ru и Кинопоиск. Поскольку проект содержит полностью самописный backend с большим количеством функционала, его публикация на демострационном ресурсе не представляется возможным. Для ознакомления разверните проект на своём устройстве, согласно инструкции, представленной в репозитории (см. ссылку выше). Приложение представляет собой полноценный кинопортал, в котором собран и объединён лучший функционал ivi.ru и Кинопоиск. Подробное описание функционала представлено в Readme-файле репозитория."
    },
    {
        id: "dfgd32432dsf3wq7",
        name: "Лэндинг HEALTHY SWITCHER",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FhealthyFood.jpg?alt=media&token=807ef676-60df-4843-9c37-67ef0f84c092",
        stack: "HTML5 + CSS3 + React + Firebase",
        repository: "https://github.com/Elon26/healthy-food",
        deploy: "https://elon26.github.io/healthy-food/",
        description: "Проект представляет собой классический Landing Page. В проекте, помимо классической адаптивной верстки, реализован Звёздный рейтинг с возможностью голосования и базой данных голосов, хранящейся в облачной базе Firebase, а также с предотвращением повторного голования при помощи LocalStorage. Помимо этого, реализованы слайдер, спойлеры, кастомный хук для условного рендеринга компонентов в зависимости от ширины экрана, и ряд других интерактивных элементов."
    },
    {
        id: "dfgd32432dsf3wq8",
        name: "Лэндинг Атлант Газ",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FatlantGas.jpg?alt=media&token=b79e97ad-054b-4b96-bc45-c615438c0dcb",
        stack: "HTML5 + CSS3 + React",
        repository: "https://github.com/Elon26/atlant-gas",
        deploy: "https://elon26.github.io/atlant-gas/",
        description: "Проект представляет собой классический Landing Page c красивым и технически нетривиальным дизайном. В проекте, помимо классической адаптивной верстки, реализована форма с валидацией вводимых данных, маской для ввода телефона и отправкой данных на электронную почту при помощи сервиса EmailJS. Помимо этого, реализованы всплывающие окна, слайдер, спойлеры, кастомный хук для условного рендеринга компонентов в зависимости от ширины экрана, и ряд других интерактивных элементов."
    },
    {
        id: "dfgd32432dsf3wq9",
        name: "Лэндинг Elite Fire",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FeliteFire.jpg?alt=media&token=e21261d1-1760-436b-9a70-a6cd53a61773",
        stack: "HTML5 + CSS3 + JavaScript",
        repository: "https://github.com/Elon26/eliteFire",
        deploy: "https://elon26.github.io/eliteFire/",
        description: "Проект реализован на чистом JavaScript и представляет собой Landing Page с дизайном средней сложности. В проекте, помимо классической адаптивной верстки, реализован ряд интерактивных элементов: несколько слайдеров, кастомные чекбоксы и кастомный ползунок. Основную сложность проекта составляла проработка адаптива дизайна для изображений, большая часть которых частично задана через фон, частично через изображения внутри контента."
    },
    {
        id: "dfgd32432dsf3wq10",
        name: "Лэндинг Conquest",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2Fconquest.jpg?alt=media&token=2c698981-b810-45e6-8e3d-d0174f1b719a",
        stack: "HTML5 + CSS3 + JavaScript",
        repository: "https://github.com/Elon26/conquest",
        deploy: "https://elon26.github.io/conquest/",
        description: "Проект реализован на чистом JavaScript и представляет собой Landing Page с простым дизайном. В проекте, помимо классической адаптивной верстки, реализован слайдер и ряд других интерактивных элементов."
    }
];

export default works;
