// Variables 
var password = document.getElementById('password');
var password_eye = document.getElementById('password_eye');
var modeIcon = document.getElementById('mode');
var toggle_bar = document.getElementById('menu_toggle_bar');


// Password
password_eye.addEventListener('click' , function () {
    if (password.type === 'password') {
        password.type ='text';
        password_eye.classList.add('fa-eye')
        password_eye.classList.remove('fa-eye-slash')
    }else {
        password.type ='password'
        password_eye.classList.remove('fa-eye')
        password_eye.classList.add('fa-eye-slash')
    }
})


// ModeIcon 
modeIcon.addEventListener('click', function () {
    document.body.classList.toggle('darkMode');

    if (modeIcon.classList.contains('fa-moon')) {
        modeIcon.classList.add('fa-sun');
        modeIcon.classList.remove('fa-moon');
    }else{
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
})

// Sidemenu
toggle_bar.addEventListener('click', function () {
    document.getElementById('sideMenu').classList.toggle('active')
})

// jQuery 
$(function () {
    // Menu Fixed
    $(window).on('scroll', function () {
        var scrollSize = $(window).scrollTop()
            // Menu Fixed
        if (scrollSize > 65) {
            $('nav').addClass('active')
        } else {
            $('nav').removeClass('active')
        }

        // Bact to Top
        if (scrollSize > 700) {
            $('#backtoTop').show(400);
        } else {
            $('#backtoTop').hide(400);
        }
    })
    $('#backtoTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        });
    })

    // Preloader
    $(window).on('load', function () {
        $('#preloader').fadeOut(1000);
     })
  
    // Slick Activation
    $('.banner_slider').slick({
        prevArrow: '<i class="fa-solid fa-chevron-left banner_slider_icon"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right banner_slider_icon"></i>',
        dots: true,
        dotsClass: 'banner_slider_dots',
        // fade: true,
        // cssEase: 'linear';
        
    });

})