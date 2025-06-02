document.addEventListener('DOMContentLoaded', function() {
    // Завантаження хедера
    fetch('/navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            const menuToggle = document.querySelector('.menu-toggle');
            const mainNav = document.querySelector('.main-nav');

            if (menuToggle && mainNav) {
                menuToggle.addEventListener('click', function() {
                    menuToggle.classList.toggle('is-active');
                    mainNav.classList.toggle('is-active');
                });

                mainNav.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        menuToggle.classList.remove('is-active');
                        mainNav.classList.remove('is-active');
                    });
                });
            }
        })
        .catch(error => console.error('Помилка завантаження навігації:', error));

    // Завантаження футера (НОВА ЧАСТИНА)
    fetch('/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Помилка завантаження футера:', error));

    // Логіка для кліків по картках міст
    const cityCardsContainer = document.querySelector('.city-cards-container');
    if (cityCardsContainer) {
        cityCardsContainer.addEventListener('click', function(event) {
            const cityCard = event.target.closest('.city-card');
            if (cityCard && cityCard.tagName === 'A') {

            }
        });
    }
});