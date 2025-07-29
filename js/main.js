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