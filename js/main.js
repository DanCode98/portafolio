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

            filterBtns.forEach(btn => btn.classList.remove('active'));
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

    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const letters = "01<>[]{};:|/\\=+-_#@$%&";
    const fontSize = 18;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
        ctx.fillStyle = "rgba(1,36,86,0.13)";
        ctx.fillRect(0, 0, width, height);
        ctx.font = fontSize + "px monospace";
        ctx.fillStyle = "#00ffea";
        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(drawMatrix, 50);
    window.addEventListener('resize', () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    });

    baffle('#coder-name').set({
        characters: '░▒▓█<>/\\|',
        speed: 60
    }).start().reveal(5000);


});