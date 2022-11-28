$(document).ready(function() {
    $('#slides').superslides({
        play: 5000,
        animation: 'fade',
        pagination: false,
    });

    var typed = new Typed(".typed", {
        strings: ["Web Developer", "CS Student", "Software Developer", "Hobbyist Developer"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
});