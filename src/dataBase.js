const works = [
    {
        id: "dfgd32432dsf3wq2",
        name: "Интернет-магазин",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2Fwebstore.jpg?alt=media&token=32d5d46c-4d3c-43d9-a672-457d2fd6a41b",
        stack: "React + Redux + TypeScript + Firebase",
        repository: "https://github.com/Elon26/my-shop",
        deploy: "https://elon26.github.io/my-shop/",
        video: "",
        description: "Проект представляет собой полноценный интернет-магазин с тремя сущностями: категории, подкатегории и товары. На странице подкатегорий есть возможность сортировки, фильтрации и изменения количества товаров к отображению. Корзина ограничивает приобретение товаров, свыше имеющегося на остатках в БД. Также реализован функционал авторизации/регистрации и страница администратора для управления БД (создание, изменение и удаление товаров). Для доступа на страницу администратора используйте логин admin@bk.ru и пароль Admin@2612."
    },
    {
        id: "dfgd32432dsf3wq7",
        name: "Лэндинг HEALTHY SWITCHER",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FhealthyFood.jpg?alt=media&token=807ef676-60df-4843-9c37-67ef0f84c092",
        stack: "HTML5 + CSS3 + React + Firebase",
        repository: "https://github.com/Elon26/healthy-food",
        deploy: "https://elon26.github.io/healthy-food/",
        video: "",
        description: "Проект представляет собой классический Landing Page. В проекте, помимо классической адаптивной верстки, реализован Звёздный рейтинг с возможностью голосования и базой данных голосов, хранящейся в облачной базе Firebase, а также с предотвращением повторного голования при помощи LocalStorage. Помимо этого, реализованы слайдер, спойлеры, кастомный хук для условного рендеринга компонентов в зависимости от ширины экрана, и ряд других интерактивных элементов."
    },
    {
        id: "dfgd32432dsf3wq8",
        name: "Лэндинг Атлант Газ",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FatlantGas.jpg?alt=media&token=b79e97ad-054b-4b96-bc45-c615438c0dcb",
        stack: "HTML5 + CSS3 + React",
        repository: "https://github.com/Elon26/atlant-gas",
        deploy: "https://elon26.github.io/atlant-gas/",
        video: "",
        description: "Проект представляет собой классический Landing Page c красивым и технически нетривиальным дизайном. В проекте, помимо классической адаптивной верстки, реализована форма с валидацией вводимых данных, маской для ввода телефона и отправкой данных на электронную почту при помощи сервиса EmailJS. Помимо этого, реализованы всплывающие окна, слайдер, спойлеры, кастомный хук для условного рендеринга компонентов в зависимости от ширины экрана, и ряд других интерактивных элементов."
    },
    {
        id: "dfgd32432dsf3wq9",
        name: "Лэндинг Elite Fire",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FeliteFire.jpg?alt=media&token=e21261d1-1760-436b-9a70-a6cd53a61773",
        stack: "HTML5 + CSS3 + JavaScript",
        repository: "https://github.com/Elon26/eliteFire",
        deploy: "https://elon26.github.io/eliteFire/",
        video: "",
        description: "Проект реализован на чистом JavaScript и представляет собой Landing Page с дизайном средней сложности. В проекте, помимо классической адаптивной верстки, реализован ряд интерактивных элементов: несколько слайдеров, кастомные чекбоксы и кастомный ползунок. Основную сложность проекта составляла проработка адаптива дизайна для изображений, большая часть которых частично задана через фон, частично через изображения внутри контента."
    },
    {
        id: "dfgd32432dsf3wq10",
        name: "Лэндинг Conquest",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2Fconquest.jpg?alt=media&token=2c698981-b810-45e6-8e3d-d0174f1b719a",
        stack: "HTML5 + CSS3 + JavaScript",
        repository: "https://github.com/Elon26/conquest",
        deploy: "https://elon26.github.io/conquest/",
        video: "",
        description: "Проект реализован на чистом JavaScript и представляет собой Landing Page с простым дизайном. В проекте, помимо классической адаптивной верстки, реализован слайдер и ряд других интерактивных элементов."
    },
    {
        id: "dfgd32432dsf3wq3",
        name: "Социальная сеть",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FfastCompany.jpg?alt=media&token=5994c219-9a82-4fea-9b99-f9078c5642de",
        stack: "React + Redux + Firebase + Bootstrap",
        repository: "https://github.com/Elon26/fast-company",
        deploy: "https://elon26.github.io/fast-company/",
        video: "",
        description: "Проект представляет собой мини-версию социальной сети. В рамках первого входа, имеется возможность зарегистрироваться и создать анкету. Зарегистрированные пользователи могут увидеть анкеты всех прочих пользователей, зарегистрировавшихся ранее, а также оставить комментарии на страницах других пользователей. Поддерживается функционал редактирования созданных учётных данных. Страница с пользователями поддерживает сортировку по имеющимся полям (столбцам) и фильтрацию по профессиям (отдельное меню слева)."
    },
    {
        id: "dfgd32432dsf3wq4",
        name: "Todo-лист",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FtodoList.jpg?alt=media&token=c8d65178-e930-4b6b-8f77-8c804e9b91fe",
        stack: "React + Firebase",
        repository: "https://github.com/Elon26/test-womanup",
        deploy: "https://womanup-11d5e.web.app/",
        video: "",
        description: "Todo-лист с возможностью создавать, редактировать и удалять задачи. БД задач хранится на Firebase. Имеется возможность прикреплять документы к задаче. Также настроено визуальное отображение для выполненных и просроченных задач."
    },
    {
        id: "dfgd32432dsf3wq5",
        name: "Карточка студента",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FstudentCard.jpg?alt=media&token=bd18fa81-6352-43cd-a1a7-705eebe06631",
        stack: "React",
        repository: "https://github.com/Elon26/study-project-1",
        deploy: "https://elon26.github.io/study-project-1/",
        video: "",
        description: "Реализована возможность создания и редактирования базовых учетных данных пользователя."
    },
    {
        id: "dfgd32432dsf3wq6",
        name: "Галерея фильмов",
        img: "https://firebasestorage.googleapis.com/v0/b/diplom-project-es2612.appspot.com/o/portfolio%2FfilmGallery.jpg?alt=media&token=598ba4e0-8766-44dd-9911-b2939cd4eac1",
        stack: "JavaScript",
        repository: "https://github.com/Elon26/filmList",
        deploy: "https://elon26.github.io/filmList/",
        video: "",
        description: "Галерея фильмов с возможностью добавить фильм в избранное. Также реализована возможность вывода только избранных фильмов."
    }
];

export default works;
