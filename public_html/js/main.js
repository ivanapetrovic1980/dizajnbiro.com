//$(document).ready(function () {
//    $('.slider').bxSlider({
//        mode: 'fade',
//        auto: false
//    });
//
//});

$(document).ready(function () {


    $(".owl-carousel").owlCarousel({
        autoplay: true,
        margin: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1

            },
            480: {
                items: 2

            },
            768: {
                items: 3

            },
            992: {
                items: 4

            },
            1200: {
                items: 5

            }
        }

//      autoplayHoverPause: true
    });

    $('.carousel').carousel();



//navbar toggler dugme
    $('.navbar-toggler').click(function () {
        $('nav span').toggleClass('fa-angle-double-down');
        $('nav span').addClass('fa-angle-double-up');
    });


//SMOOTH SCROOLING
// Select all links with hashes
    $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function (event) {
                // On-page links
                if (
                        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                        &&
                        location.hostname == this.hostname
                        ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            }
                            ;
                        });
                    }
                }
            });



//probna funkcija
    function scrollToTop() {
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();
        var pozicija = $('#katalozi').offset().top;

        if (pozicija < scroll + windowHeight - 100) {
            $('#scrollToTop').removeClass('d-none');
            $('#scrollToTop').addClass('d-inline');
        } else {
            $('#scrollToTop').addClass('d-none');
            $('#scrollToTop').removeClass('d-inline');
        }
        
    }

//    scrollToTop();

    $(window).scroll(function () {
        scrollToTop();
    });







});


