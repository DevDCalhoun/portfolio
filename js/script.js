$(document).ready(function () {
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

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    })

    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});