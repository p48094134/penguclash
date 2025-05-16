Отлично! Давайте создадим базовый одностраничный сайт для "PenguClash.ru".
Я сделаю структуру HTML, CSS и немного JavaScript для интерактивности.

**Структура файлов будет такая:**

```
penguclash/
├── index.html
├── style.css
├── script.js
└── img/      <-- Папка для изображений (пока будет пустой, вы добавите свои)
```

Вот код для каждого файла:

---

**1. `index.html`**

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="PenguClash - эпическая битва пингвинов! Присоединяйтесь к ледяным сражениям.">
    <meta name="keywords" content="пингвины, битва, игра, онлайн, PenguClash, аркада">
    <title>PenguClash - Битва Пингвинов!</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="img/favicon.png" type="image/png"> <!-- Замените favicon.png на свой фавикон -->
</head>
<body>

    <header>
        <div class="container">
            <div class="logo">
                <img src="img/logo.png" alt="PenguClash Logo" id="logo-img"> <!-- Замените logo.png на свой логотип -->
                <h1>PenguClash</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">О Игре</a></li>
                    <li><a href="#features">Особенности</a></li>
                    <li><a href="#gallery">Галерея</a></li>
                    <li><a href="#join">Присоединиться</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="hero">
        <div class="container">
            <h2>Эпическая Битва Пингвинов!</h2>
            <p>Приготовьтесь к ледяным сражениям, веселью и славе в мире PenguClash!</p>
            <a href="#join" class="btn btn-primary">Играть Сейчас!</a>
        </div>
    </section>

    <main>
        <section id="about" class="content-section">
            <div class="container">
                <h2>Что такое PenguClash?</h2>
                <p>PenguClash - это захватывающая многопользовательская аркада, где отважные пингвины сражаются за ледяное господство! Выбирайте своего уникального пингвина-героя, осваивайте хитроумные тактики и докажите, кто здесь главный на айсберге. Вас ждут динамичные бои, красочные локации и море веселья!</p>
                <img src="img/about-penguins.png" alt="Веселые пингвины в PenguClash" class="section-image">
                 <!-- Замените img/about-penguins.png -->
            </div>
        </section>

        <section id="features" class="content-section bg-light">
            <div class="container">
                <h2>Ключевые Особенности</h2>
                <div class="features-grid">
                    <div class="feature-item">
                        <img src="img/icon-hero.png" alt="Иконка героя" class="feature-icon"> <!-- Замените иконку -->
                        <h3>Уникальные Герои</h3>
                        <p>Десятки пингвинов с различными способностями и стилями игры.</p>
                    </div>
                    <div class="feature-item">
                        <img src="img/icon-arena.png" alt="Иконка арены" class="feature-icon"> <!-- Замените иконку -->
                        <h3>Разнообразные Арены</h3>
                        <p>Сражайтесь на ледяных полях, в снежных крепостях и на скользких горках.</p>
                    </div>
                    <div class="feature-item">
                        <img src="img/icon-modes.png" alt="Иконка режимов" class="feature-icon"> <!-- Замените иконку -->
                        <h3>Захватывающие Режимы</h3>
                        <p>От классического "каждый за себя" до командных битв за флаг.</p>
                    </div>
                    <div class="feature-item">
                        <img src="img/icon-friends.png" alt="Иконка друзей" class="feature-icon"> <!-- Замените иконку -->
                        <h3>Играй с Друзьями</h3>
                        <p>Создавайте команды и соревнуйтесь с игроками со всего мира.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="gallery" class="content-section">
            <div class="container">
                <h2>Галерея Льда и Огня (Пингвиньего)</h2>
                <div class="gallery-grid">
                    <img src="img/gallery1.jpg" alt="Скриншот игры PenguClash 1"> <!-- Замените -->
                    <img src="img/gallery2.jpg" alt="Скриншот игры PenguClash 2"> <!-- Замените -->
                    <img src="img/gallery3.jpg" alt="Скриншот игры PenguClash 3"> <!-- Замените -->
                    <img src="img/gallery4.jpg" alt="Скриншот игры PenguClash 4"> <!-- Замените -->
                </div>
            </div>
        </section>

        <section id="join" class="content-section bg-dark text-light">
            <div class="container">
                <h2>Готовы к Битве?</h2>
                <p>Присоединяйтесь к тысячам игроков и начните свое ледяное приключение в PenguClash уже сегодня!</p>
                <p>Следите за новостями в наших социальных сетях:</p>
                <div class="social-links">
                    <a href="#" target="_blank" class="social-icon">VK</a> <!-- Замените # на ссылку -->
                    <a href="#" target="_blank" class="social-icon">Telegram</a> <!-- Замените # на ссылку -->
                    <a href="#" target="_blank" class="social-icon">YouTube</a> <!-- Замените # на ссылку -->
                </div>
                <a href="#" class="btn btn-primary btn-large">Скачать Игру (Скоро!)</a>
                 <!-- Замените # на ссылку на скачивание или страницу игры -->
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; <span id="current-year"></span> PenguClash. Все права защищены. Сделано с ❤️ для пингвинов.</p>
            <p>Дизайн и разработка: <a href="https://github.com/ВАШ_НИКНЕЙМ_НА_GITHUB" target="_blank">Ваше Имя/Ник</a></p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

---

**2. `style.css`**

[купить рефералов](https://penguclash.ru/)

```css
/* Общие стили */
:root {
    --primary-color: #00a8ff; /* Яркий синий */
    --secondary-color: #0077b6; /* Темнее синий */
    --accent-color: #ffd700; /* Золотой/желтый для акцентов */
    --light-color: #f4f4f4;
    --dark-color: #333;
    --text-color: #333;
    --light-text-color: #fdfdfd;
    --font-family: 'Arial', sans-serif; /* Выберите шрифт, который вам нравится */
    --container-width: 960px;
    --section-padding: 60px 0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-family);
    line-height: 1.6;
    color: var(--text-color);
    background-color: #fff; /* Белый фон по умолчанию */
}

.container {
    width: 90%;
    max-width: var(--container-width);
    margin: auto;
    overflow: hidden;
    padding: 0 20px;
}

h1, h2, h3 {
    margin-bottom: 20px;
    color: var(--secondary-color);
}

h1 { font-size: 2.5em; }
h2 { font-size: 2em; text-align: center; }
h3 { font-size: 1.5em; }

p {
    margin-bottom: 15px;
}

a {
    text-decoration: none;
    color: var(--primary-color);
}

a:hover {
    color: var(--secondary-color);
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto; /* Для сохранения пропорций */
    display: block; /* Убирает отступ снизу у inline-block элементов */
}

.section-image {
    max-width: 500px;
    margin: 20px auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}


/* Header */
header {
    background: var(--dark-color);
    color: var(--light-text-color);
    padding: 20px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header .logo {
    display: flex;
    align-items: center;
}

header #logo-img {
    height: 50px; /* Настройте высоту лого */
    margin-right: 15px;
}

header h1 {
    margin: 0;
    font-size: 1.8em;
    color: var(--light-text-color);
}

header nav ul {
    display: flex;
}

header nav ul li {
    margin-left: 20px;
}

header nav ul li a {
    color: var(--light-text-color);
    padding: 5px 10px;
    transition: color 0.3s ease;
}

header nav ul li a:hover, header nav ul li a.active {
    color: var(--accent-color);
    border-bottom: 2px solid var(--accent-color);
}

/* Hero Section */
#hero {
    background: url('img/hero-bg.jpg') no-repeat center center/cover; /* ЗАМЕНИТЕ img/hero-bg.jpg */
    /* Если нет картинки, можно использовать градиент */
    /* background: linear-gradient(to right, var(--primary-color), var(--secondary-color)); */
    color: var(--light-text-color);
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
}

#hero h2 {
    font-size: 3em;
    margin-bottom: 20px;
    color: var(--light-text-color); /* Убедимся, что заголовок виден на фоне */
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

#hero p {
    font-size: 1.2em;
    margin-bottom: 30px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-primary {
    background-color: var(--accent-color);
    color: var(--dark-color);
    font-weight: bold;
}

.btn-primary:hover {
    background-color: #ffc107; /* Чуть темнее акцентный */
    color: var(--dark-color);
    transform: translateY(-2px);
}

.btn-large {
    font-size: 1.2em;
    padding: 15px 30px;
}

/* Content Sections */
.content-section {
    padding: var(--section-padding);
    text-align: center; /* Для заголовков H2 */
}
.content-section .container p, .content-section .container li {
    text-align: left; /* Возвращаем обычное выравнивание для параграфов */
}


.bg-light {
    background-color: var(--light-color);
}

.bg-dark {
    background-color: var(--dark-color);
    color: var(--light-text-color);
}

.bg-dark h2, .bg-dark h3 {
    color: var(--light-text-color);
}
.bg-dark a {
    color: var(--accent-color);
}
.bg-dark a:hover {
    color: #ffc107;
}


/* Features Section */
#features .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 30px;
    text-align: center;
}

.feature-item {
    background: #fff;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.feature-item .feature-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 15px auto;
    /* Стили для иконки, если это SVG или FontAwesome: */
    /* fill: var(--primary-color); */
}

.feature-item h3 {
    margin-bottom: 10px;
    color: var(--primary-color);
}

/* Gallery Section */
#gallery .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 30px;
}

#gallery .gallery-grid img {
    width: 100%;
    height: 200px; /* Фиксированная высота для единообразия */
    object-fit: cover; /* Масштабирует изображение, сохраняя пропорции и обрезая лишнее */
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

#gallery .gallery-grid img:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}


/* Join Section */
#join .social-links {
    margin: 20px 0;
}

#join .social-icon {
    display: inline-block;
    margin: 0 10px;
    padding: 10px 15px;
    border: 1px solid var(--accent-color);
    border-radius: 5px;
    color: var(--accent-color);
    font-weight: bold;
    transition: background-color 0.3s ease, color 0.3s ease;
}

#join .social-icon:hover {
    background-color: var(--accent-color);
    color: var(--dark-color);
}

/* Footer */
footer {
    background: #222; /* Чуть светлее чем header */
    color: #ccc;
    text-align: center;
    padding: 30px 0;
}

footer p {
    margin-bottom: 5px;
    font-size: 0.9em;
}

footer a {
    color: var(--primary-color);
}
footer a:hover {
    color: var(--accent-color);
}

/* Responsive */
@media(max-width: 768px) {
    header .container {
        flex-direction: column;
    }
    header .logo {
        margin-bottom: 15px;
    }
    header nav ul {
        flex-direction: column;
        text-align: center;
    }
    header nav ul li {
        margin: 10px 0;
    }

    #hero {
        height: auto;
        padding: 80px 20px;
    }
    #hero h2 {
        font-size: 2.5em;
    }
    #hero p {
        font-size: 1em;
    }

    .features-grid {
        grid-template-columns: 1fr; /* Одна колонка на мобильных */
    }
    #gallery .gallery-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    h1 { font-size: 2em; }
    h2 { font-size: 1.8em; }
}

@media(max-width: 480px) {
    #hero h2 {
        font-size: 2em;
    }
     header #logo-img {
        height: 40px;
    }
    header h1 {
        font-size: 1.5em;
    }
    .btn {
        padding: 10px 20px;
        font-size: 0.9em;
    }
     .btn-large {
        font-size: 1em;
        padding: 12px 25px;
    }
}
```

---

**3. `script.js`**

```javascript
document.addEventListener('DOMContentLoaded', () => {
    console.log("PenguClash: Страница загружена и готова!");

    // Плавный скролл для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            // Убедимся, что это действительно ID, а не просто "#"
            if (targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Установка текущего года в футере
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Активный пункт меню при скролле (базовая реализация)
    const sections = document.querySelectorAll('section[id]');
    const navLi = document.querySelectorAll('header nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Учитываем высоту хедера, если он position: sticky
            const headerHeight = document.querySelector('header').offsetHeight; 
            if (pageYOffset >= (sectionTop - headerHeight - sectionHeight / 3) ) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
        // Если мы в самом верху, никакой пункт не активен, или можно сделать активным первый
        if (window.pageYOffset < sections[0].offsetTop - document.querySelector('header').offsetHeight) {
             navLi.forEach(a => a.classList.remove('active'));
        }
    });

    // Простая анимация для элементов при появлении (опционально)
    const observerOptions = {
        root: null, // относительно viewport
        rootMargin: '0px',
        threshold: 0.1 // элемент виден на 10%
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // observer.unobserve(entry.target); // Раскомментируйте, если анимация нужна только один раз
            } else {
                // Можно добавить обратную анимацию, если элемент уходит из вида
                // entry.target.style.opacity = 0;
                // entry.target.style.transform = 'translateY(20px)';
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Применить к нужным секциям или элементам
    document.querySelectorAll('.content-section, .feature-item, #gallery img').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(el);
    });

});
```

---

**4. Папка `img/`**

В эту папку вам нужно будет добавить свои изображения:
*   `logo.png` (или другой формат, тогда поправьте в HTML)
*   `favicon.png` (иконка для вкладки браузера)
*   `hero-bg.jpg` (фоновое изображение для главного экрана)
*   `about-penguins.png` (картинка для секции "О Игре")
*   `icon-hero.png`, `icon-arena.png`, `icon-modes.png`, `icon-friends.png` (иконки для особенностей)
*   `gallery1.jpg`, `gallery2.jpg`, `gallery3.jpg`, `gallery4.jpg` (скриншоты для галереи)

**Рекомендации по изображениям:**
*   Используйте оптимизированные изображения (сжатые без сильной потери качества), чтобы сайт загружался быстрее.
*   Подберите изображения, соответствующие тематике "PenguClash" – веселые, динамичные, с пингвинами.
*   Для иконок можно использовать SVG формат для лучшего качества и масштабируемости.

---

**Как использовать:**

1.  Создайте папку `penguclash`.
2.  Внутри нее создайте файлы `index.html`, `style.css`, `script.js` и скопируйте в них соответствующий код.
3.  Создайте папку `img` внутри `penguclash`.
4.  Наполните папку `img` вашими изображениями. Если имена файлов или их расширения отличаются, не забудьте поправить пути в `index.html` и `style.css`.
5.  Откройте `index.html` в вашем браузере, чтобы посмотреть результат.
6.  Замените `"ВАШ_НИКНЕЙМ_НА_GITHUB"` и `"Ваше Имя/Ник"` в футере на свои данные.
7.  Замените `#` в ссылках на социальные сети на реальные URL.

Этот код дает хороший старт. Вы можете дальше кастомизировать цвета, шрифты, добавлять анимации и контент по своему усмотрению. Удачи с вашим проектом PenguClash!
