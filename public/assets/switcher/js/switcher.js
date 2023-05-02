// Swticher Cookie Base
/**
 * Styleswitch stylesheet switcher built on jQuery
 * Under an Attribution, Share Alike License
 * By Kelvin Luck ( http://www.kelvinluck.com/ )
 * Thanks for permission! 
 **/

// DEMO Swticher Base
jQuery('.demo-icon').click(function () {
    if ($('.demo_changer').hasClass("active")) {
        $('.demo_changer').animate({ "inset-inline-end": "-270px" }, function () {
            $('.demo_changer').toggleClass("active");
        });
    } else {
        $('.demo_changer').animate({ "inset-inline-end": "0px" }, function () {
            $('.demo_changer').toggleClass("active");
        });
    }

});
if ((document.querySelector('.sidebar-right1') !== null)) {
    //p-scroll bar
    const ps5 = new PerfectScrollbar('.sidebar-right1', {
        useBothWheelAxes: true,
        suppressScrollX: true,
    });

}

mainContent = document.querySelector('.main-content');
logIn = document.querySelector(".login-img .page")

// Switcher Close //
if ((mainContent !== null)) {
    mainContent.addEventListener("click", function () {
        if ($('.demo_changer').hasClass("active")) {
            $('.demo_changer').animate({ "inset-inline-end": "-270px" }, function () {
                $('.demo_changer').toggleClass("active");
            });
        }
    });
}

    // COVER IMAGE
    $(".cover-image").each(function () {
        var attr = $(this).attr('data-bs-image-src');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css('background', 'url(' + attr + ') center center');
        }
    });

if ((logIn !== null)) {
    logIn.addEventListener("click", function () {
        if ($('.demo_changer').hasClass("active")) {
            $('.demo_changer').animate({ "inset-inline-end": "-270px" }, function () {
                $('.demo_changer').toggleClass("active");
            });
        }
    });
}