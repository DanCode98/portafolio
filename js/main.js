$('document').ready(function () {

    const profesion = baffle(".profesion");
    profesion.set({
        characters: '█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░',
        speed: 90
    });
    profesion.start();
    profesion.reveal(3000);
    $('#tagline').t({
        beep: false,
        caret: '<span style="color:hotpink;">•</span>',
        typing: function (elm, chr) {
            if (chr.match(/\-trigger/))
                $('#pow-txt').show().delay(500).fadeOut(0);
        }
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.length > 1 && document.querySelector(targetId)) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const techCards = document.querySelectorAll('.tech-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remover active de todos los botones
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Agregar active al botón clickeado
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            techCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});