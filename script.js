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
