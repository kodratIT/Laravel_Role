let html = document.querySelector('html');

//Switcher Styles
function switcherEvents() {
    'use strict';

    // LIGHT THEME START
    $(document).on("click", '#myonoffswitch1', function () {
        if (this.checked) {
            $('body').addClass('light-mode');
            $('#myonoffswitch3').prop('checked', true);
            $('#myonoffswitch6').prop('checked', true);
            $('body').removeClass('transparent-mode');
            $('body').removeClass('dark-mode');

            $('body')?.removeClass('color-menu');
            $('body')?.removeClass('gradient-menu');
            $('body')?.removeClass('dark-menu');
            $('body')?.removeClass('color-header');
            $('body')?.removeClass('gradient-header');
            $('body')?.removeClass('dark-header');

            // remove dark theme properties	
            localStorage.removeItem('sashdarkPrimary')

            // remove light theme properties
            localStorage.removeItem('sashprimaryColor')
            localStorage.removeItem('sashprimaryHoverColor')
            localStorage.removeItem('sashprimaryBorderColor')
            document.querySelector('html').style.removeProperty('--primary-bg-color', localStorage.darkPrimary);
            document.querySelector('html').style.removeProperty('--primary-bg-hover', localStorage.darkPrimary);
            document.querySelector('html').style.removeProperty('--primary-bg-border', localStorage.darkPrimary);
            document.querySelector('html').style.removeProperty('--dark-primary', localStorage.darkPrimary);

            // removing dark theme properties
            localStorage.removeItem('sashdarkPrimary')
            localStorage.removeItem('sashtransparentBgColor');
            localStorage.removeItem('sashtransparentThemeColor');
            localStorage.removeItem('sashtransparentPrimary');
            localStorage.removeItem('sashdarkprimaryTransparent');

            localStorage.removeItem('sashcolormenu');
            localStorage.removeItem('sashgradientmenu');
            localStorage.removeItem('sashdarkmenu');
            localStorage.removeItem('sashcolorheader');
            localStorage.removeItem('sashgradientheader');
            localStorage.removeItem('sashdarkheader');


            $('#myonoffswitch1').prop('checked', true);
            $('#myonoffswitch2').prop('checked', false);
            $('#myonoffswitchTransparent').prop('checked', false);
            localStorage.removeItem('sashtransparentBgImgPrimary');
            localStorage.removeItem('sashtransparentBgImgprimaryTransparent');

            checkOptions();
            const root = document.querySelector(':root');
            root.style = "";
            names()
        } else {
            $('body').removeClass('light-mode');
            localStorage.removeItem("sashlight-mode");
        }
        localStorageBackup();
    });
    // LIGHT THEME END

    // DARK THEME START
    $(document).on("click", '#myonoffswitch2', function () {
        if (this.checked) {
            $('body').addClass('dark-mode');

            $('#myonoffswitch5').prop('checked', true);
            $('#myonoffswitch8').prop('checked', true);
            $('body').removeClass('light-mode');
            $('body').removeClass('transparent-mode');

            $('body')?.removeClass('color-menu');
            $('body')?.removeClass('gradient-menu');
            $('body')?.removeClass('light-menu');
            $('body')?.removeClass('color-header');
            $('body')?.removeClass('gradient-header');
            $('body')?.removeClass('header-light');

            // remove light theme properties
            localStorage.removeItem('sashprimaryColor')
            localStorage.removeItem('sashprimaryHoverColor')
            localStorage.removeItem('sashprimaryBorderColor')
            localStorage.removeItem('sashdarkPrimary')
            document.querySelector('html').style.removeProperty('--primary-bg-color', localStorage.darkPrimary);
            document.querySelector('html').style.removeProperty('--primary-bg-hover', localStorage.darkPrimary);
            document.querySelector('html').style.removeProperty('--primary-bg-border', localStorage.darkPrimary);
            document.querySelector('html').style.removeProperty('--dark-primary', localStorage.darkPrimary);

            // removing light theme data 
            localStorage.removeItem('sashprimaryColor')
            localStorage.removeItem('sashprimaryHoverColor')
            localStorage.removeItem('sashprimaryBorderColor')
            localStorage.removeItem('sashprimaryTransparent');

            $('#myonoffswitch1').prop('checked', false);
            $('#myonoffswitch2').prop('checked', true);
            $('#myonoffswitchTransparent').prop('checked', false);
            //
            checkOptions();

            localStorage.removeItem('sashtransparentBgColor');
            localStorage.removeItem('sashtransparentThemeColor');
            localStorage.removeItem('sashtransparentPrimary');
            localStorage.removeItem('sashtransparentBgImgPrimary');
            localStorage.removeItem('sashtransparentBgImgprimaryTransparent');


            localStorage.removeItem('sashcolormenu');
            localStorage.removeItem('sashgradientmenu');
            localStorage.removeItem('sashlightmenu');
            localStorage.removeItem('sashcolorheader');
            localStorage.removeItem('sashgradientheader');
            localStorage.removeItem('sashlightheader');

            const root = document.querySelector(':root');
            root.style = "";
            names()
        } else {
            $('body').removeClass('dark-mode');
            localStorage.removeItem("sashdark-mode");
        }
        localStorageBackup()
    });
    // DARK THEME END

    // TRANSPARENT THEME START
    $(document).on("click", '#myonoffswitchTransparent', function () {
        if (this.checked) {
            $('body').addClass('transparent-mode');
            $('#myonoffswitch3').prop('checked', false);
            $('#myonoffswitch4').prop('checked', false);
            $('#myonoffswitch19').prop('checked', false);
            $('#myonoffswitch6').prop('checked', false);
            $('#myonoffswitch7').prop('checked', false);
            $('#myonoffswitch5').prop('checked', false);
            $('#myonoffswitch8').prop('checked', false);
            $('#myonoffswitch20').prop('checked', false);
            $('body').removeClass('dark-mode');
            $('body').removeClass('light-mode');

            $('body')?.removeClass('color-menu');
            $('body')?.removeClass('light-menu');
            $('body')?.removeClass('dark-menu');
            $('body')?.removeClass('gradient-menu');
            $('body')?.removeClass('color-header');
            $('body')?.removeClass('gradient-header');
            $('body')?.removeClass('header-light');
            $('body')?.removeClass('dark-header');

            // remove light theme properties
            localStorage.removeItem('sashprimaryColor')
            localStorage.removeItem('sashprimaryHoverColor')
            localStorage.removeItem('sashprimaryBorderColor')

            // removing light theme data 
            localStorage.removeItem('sashdarkPrimary');
            localStorage.removeItem('sashprimaryColor')
            localStorage.removeItem('sashprimaryHoverColor')
            localStorage.removeItem('sashprimaryBorderColor')
            localStorage.removeItem('sashprimaryTransparent');
            localStorage.removeItem('sashtransparentPrimary');
            localStorage.removeItem('sashdarkprimaryTransparent');
            localStorage.removeItem('sashtransparentBgImgPrimary');
            localStorage.removeItem('sashtransparentBgImgprimaryTransparent');



            localStorage.removeItem('sashcolormenu');
            localStorage.removeItem('sashgradientmenu');
            localStorage.removeItem('sashdarkmenu');
            localStorage.removeItem('sashlightmenu');
            localStorage.removeItem('sashcolorheader');
            localStorage.removeItem('sashgradientheader');
            localStorage.removeItem('sashdarkheader');
            localStorage.removeItem('sashlightheader');

            $('#myonoffswitch2').prop('checked', false);
            $('#myonoffswitch1').prop('checked', false);
            $('#myonoffswitchTransparent').prop('checked', true);
            //
            checkOptions();

            const root = document.querySelector(':root');
            root.style = "";
            names()
        } else {
            $('body').removeClass('transparent-mode');
            localStorage.removeItem("sashtransparent-mode");
        }
        localStorageBackup()
        $('body').removeClass('bg-img1');
        $('body').removeClass('bg-img2');
        $('body').removeClass('bg-img3');
        $('body').removeClass('bg-img4');
    });
    // TRANSPARENT THEME END

    // BACKGROUND IMAGE STYLE START

    $(document).on("click", '#bgimage1', function () {
        $('body').addClass('bg-img1');
        $('body').removeClass('bg-img2');
        $('body').removeClass('bg-img3');
        $('body').removeClass('bg-img4');

        $('#myonoffswitch3').prop('checked', false);
        $('#myonoffswitch4').prop('checked', false);
        $('#myonoffswitch19').prop('checked', false);
        $('#myonoffswitch6').prop('checked', false);
        $('#myonoffswitch7').prop('checked', false);
        $('#myonoffswitch5').prop('checked', false);
        $('#myonoffswitch8').prop('checked', false);
        $('#myonoffswitch20').prop('checked', false);

        $('body')?.removeClass('color-menu');
        $('body')?.removeClass('light-menu');
        $('body')?.removeClass('dark-menu');
        $('body')?.removeClass('gradient-menu');
        $('body')?.removeClass('color-header');
        $('body')?.removeClass('gradient-header');
        $('body')?.removeClass('header-light');
        $('body')?.removeClass('dark-header');

        document.querySelector('body').classList.add('transparent-mode');
        document.querySelector('body').classList.remove('light-mode');
        document.querySelector('body').classList.remove('dark-mode');

        $('#myonoffswitch2').prop('checked', false);
        $('#myonoffswitch1').prop('checked', false);
        $('#myonoffswitchTransparent').prop('checked', true);

        checkOptions();
    })

    $(document).on("click", '#bgimage2', function () {
        $('body').addClass('bg-img2');
        $('body').removeClass('bg-img1');
        $('body').removeClass('bg-img3');
        $('body').removeClass('bg-img4');

        $('#myonoffswitch3').prop('checked', false);
        $('#myonoffswitch4').prop('checked', false);
        $('#myonoffswitch19').prop('checked', false);
        $('#myonoffswitch6').prop('checked', false);
        $('#myonoffswitch7').prop('checked', false);
        $('#myonoffswitch5').prop('checked', false);
        $('#myonoffswitch8').prop('checked', false);
        $('#myonoffswitch20').prop('checked', false);

        $('body')?.removeClass('color-menu');
        $('body')?.removeClass('light-menu');
        $('body')?.removeClass('dark-menu');
        $('body')?.removeClass('gradient-menu');
        $('body')?.removeClass('color-header');
        $('body')?.removeClass('gradient-header');
        $('body')?.removeClass('header-light');
        $('body')?.removeClass('dark-header');

        document.querySelector('body').classList.add('transparent-mode');
        document.querySelector('body').classList.remove('light-mode');
        document.querySelector('body').classList.remove('dark-mode');

        $('#myonoffswitch2').prop('checked', false);
        $('#myonoffswitch1').prop('checked', false);
        $('#myonoffswitchTransparent').prop('checked', true);

        checkOptions();
    })

    $(document).on("click", '#bgimage3', function () {
        $('body').addClass('bg-img3');
        $('body').removeClass('bg-img1');
        $('body').removeClass('bg-img2');
        $('body').removeClass('bg-img4');

        $('#myonoffswitch3').prop('checked', false);
        $('#myonoffswitch4').prop('checked', false);
        $('#myonoffswitch19').prop('checked', false);
        $('#myonoffswitch6').prop('checked', false);
        $('#myonoffswitch7').prop('checked', false);
        $('#myonoffswitch5').prop('checked', false);
        $('#myonoffswitch8').prop('checked', false);
        $('#myonoffswitch20').prop('checked', false);

        $('body')?.removeClass('color-menu');
        $('body')?.removeClass('light-menu');
        $('body')?.removeClass('dark-menu');
        $('body')?.removeClass('gradient-menu');
        $('body')?.removeClass('color-header');
        $('body')?.removeClass('gradient-header');
        $('body')?.removeClass('header-light');
        $('body')?.removeClass('dark-header');

        document.querySelector('body').classList.add('transparent-mode');
        document.querySelector('body').classList.remove('light-mode');
        document.querySelector('body').classList.remove('dark-mode');

        $('#myonoffswitch2').prop('checked', false);
        $('#myonoffswitch1').prop('checked', false);
        $('#myonoffswitchTransparent').prop('checked', true);

        checkOptions();
    })

    $(document).on("click", '#bgimage4', function () {
        $('body').addClass('bg-img4');
        $('body').removeClass('bg-img1');
        $('body').removeClass('bg-img2');
        $('body').removeClass('bg-img3');

        $('#myonoffswitch3').prop('checked', false);
        $('#myonoffswitch4').prop('checked', false);
        $('#myonoffswitch19').prop('checked', false);
        $('#myonoffswitch6').prop('checked', false);
        $('#myonoffswitch7').prop('checked', false);
        $('#myonoffswitch5').prop('checked', false);
        $('#myonoffswitch8').prop('checked', false);
        $('#myonoffswitch20').prop('checked', false);

        $('body')?.removeClass('color-menu');
        $('body')?.removeClass('light-menu');
        $('body')?.removeClass('dark-menu');
        $('body')?.removeClass('gradient-menu');
        $('body')?.removeClass('color-header');
        $('body')?.removeClass('gradient-header');
        $('body')?.removeClass('header-light');
        $('body')?.removeClass('dark-header');

        document.querySelector('body').classList.add('transparent-mode');
        document.querySelector('body').classList.remove('light-mode');
        document.querySelector('body').classList.remove('dark-mode');
        $('#myonoffswitch2').prop('checked', false);
        $('#myonoffswitch1').prop('checked', false);
        $('#myonoffswitchTransparent').prop('checked', true);

        checkOptions();
    })

    // BACKGROUND IMAGE STYLE END

    // RTL STYLE START
    $(document).on("click", '#myonoffswitch24', function () {
        if (this.checked) {
            $('body').addClass('rtl');

            $('#slide-left').removeClass('d-none');
            $('#slide-right').removeClass('d-none');
            $("html[lang=en]").attr("dir", "rtl");
            $('body').removeClass('ltr');
            $("head link#style").attr("href", $(this));
            (document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
            var carousel = $('.owl-carousel');
            $.each(carousel, function (index, element) {
                // element == this
                var carouselData = $(element).data('owl.carousel');
                carouselData.settings.rtl = true; //don't know if both are necessary
                carouselData.options.rtl = true;
                $(element).trigger('refresh.owl.carousel');
            });
            localStorage.setItem('sashrtl', true)
            localStorage.removeItem('sashltr')
        }
    });
    // RTL STYLE END

    // LTR STYLE START
    $(document).on("click", '#myonoffswitch23', function () {
        if (this.checked) {
            $('body').addClass('ltr');

            $('#slide-left').removeClass('d-none');
            $('#slide-right').removeClass('d-none');
            $("html[lang=en]").attr("dir", "ltr");
            $('body').removeClass('rtl');
            $("head link#style").attr("href", $(this));
            (document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
            var carousel = $('.owl-carousel');
            $.each(carousel, function (index, element) {
                // element == this
                var carouselData = $(element).data('owl.carousel');
                carouselData.settings.rtl = false; //don't know if both are necessary
                carouselData.options.rtl = false;
                $(element).trigger('refresh.owl.carousel');
            });
            localStorage.setItem('sashltr', true)
            localStorage.removeItem('sashrtl')
        }
    });
    // LTR STYLE END

    // Vertical
    $(document).on("click", '#myonoffswitch34', function () {
        if (this.checked) {
            ActiveSubmenu();
            $('body').removeClass('horizontal');
            $('body').removeClass('horizontal-hover');
            $(".main-content").removeClass("hor-content");
            $(".main-content").addClass("app-content");
            $(".main-container").removeClass("container");
            $(".main-container").addClass("container-fluid");
            $(".app-header").removeClass("hor-header");
            $(".hor-header").addClass("app-header");
            $(".app-sidebar").removeClass("horizontal-main")
            $(".main-sidemenu").removeClass("container")
            $(".slide-menu").removeClass("ps")
            $(".slide-menu").removeClass("ps--active-y")
            $('#slide-left').removeClass('d-none');
            $('#slide-right').removeClass('d-none');
            $('body').addClass('sidebar-mini');
            $('body').removeClass('default-logo');
            $('body').removeClass('center-logo');

            localStorage.setItem("sashvertical", true);
            localStorage.removeItem("sashhorizontal");
            localStorage.removeItem("sashhorizontalHover");
            localStorage.removeItem("sashclosedmenu");
            localStorage.removeItem("sashicontextmenu");
            localStorage.removeItem("sashsideiconmenu");
            localStorage.removeItem("sashhoversubmenu");
            localStorage.removeItem("sashhoversubmenu1");
            localStorage.removeItem("sashdoublemenu");
            localStorage.removeItem("sashdoublemenutabs");
            localStorage.removeItem("sashdefaultlogo");
            localStorage.removeItem("sashcenterlogo");
            responsive();

            if (!(document.querySelector('.icontext-menu') !== null)) {
                hovermenu();
            }

        } else {
            $('body').removeClass('sidebar-mini');
            localStorage.setItem("sashsidebar-mini", "False");
        }
    });
    // Vertical END

    // HORIZONTAL
    $(document).on("click", '#myonoffswitch35', function () {
        if (this.checked) {
            if (!document.querySelector('.login-img')) {
                ActiveSubmenu();
                checkHoriMenu();
                responsive();
                menuClick();
            }
            if (window.innerWidth >= 992) {
                let li = document.querySelectorAll('.side-menu li')
                li.forEach((e, i) => {
                    e.classList.remove('is-expanded')
                })
                var animationSpeed = 300;
                // first level
                var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
                var ul = parent.find('ul:visible').slideUp(animationSpeed);
                ul.removeClass('open');
                var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
                var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
                ul1.removeClass('open');
            }
            $('body').addClass('horizontal');
            $(".main-content").addClass("hor-content");
            $(".main-content").removeClass("app-content");
            $(".main-container").addClass("container");
            $(".main-container").removeClass("container-fluid");
            $(".app-header").addClass("hor-header");
            $(".hor-header").removeClass("app-header");
            $(".app-sidebar").addClass("horizontal-main")
            $(".main-sidemenu").addClass("container")
            $('body').removeClass('sidebar-mini');
            $('body').removeClass('sidenav-toggled');
            $('body').removeClass('horizontal-hover');
            $('body').removeClass('default-menu');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('double-menu');
            // // To enable no-wrap horizontal style
            $('#slide-left').removeClass('d-none');
            $('#slide-right').removeClass('d-none');
            localStorage.setItem("sashhorizontal", true);
            localStorage.removeItem("sashvertical");
            localStorage.removeItem("sashhorizontalHover");
            localStorage.removeItem("sashdefaultmenu");
            localStorage.removeItem("sashclosedmenu");
            localStorage.removeItem("sashicontextmenu");
            localStorage.removeItem("sashsideiconmenu");
            localStorage.removeItem("sashhoversubmenu");
            localStorage.removeItem("sashhoversubmenu1");
            localStorage.removeItem("sashdoublemenu");
            localStorage.removeItem("sashdoublemenutabs");
            $('#default-logo').prop('checked', true);

            document.querySelector('.horizontal .side-menu')?.classList.add('flex-nowrap')
            // To enable wrap horizontal style
            // $('#slide-left').addClass('d-none');
            // $('#slide-right').addClass('d-none');
            // document.querySelector('.horizontal .side-menu').style.flexWrap = 'wrap'

        }
    });
    // HORIZONTAL END

    // HORIZONTAL HOVER
    $(document).on("click", '#myonoffswitch111', function () {
        if (this.checked) {
            if (!document.querySelector('.login-img')) {
                checkHoriMenu();
                responsive();
            }
            if (window.innerWidth >= 992) {
                let li = document.querySelectorAll('.side-menu li')
                li.forEach((e, i) => {
                    e.classList.remove('is-expanded')
                })
                var animationSpeed = 300;
                // first level
                var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
                var ul = parent.find('ul:visible').slideUp(animationSpeed);
                ul.removeClass('open');
                var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
                var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
                ul1.removeClass('open');
            }
            $('body').addClass('horizontal-hover');
            $('body').addClass('horizontal');
            // $('#slide-left').addClass('d-none');
            // $('#slide-right').addClass('d-none');
            // document.querySelector('.horizontal .side-menu').style.flexWrap = 'wrap'
            $('#slide-left').addClass('d-none');
            $('#slide-right').addClass('d-none');
            document.querySelector('.horizontal .side-menu')?.classList.add('flex-nowrap')
            $(".main-content").addClass("hor-content");
            $(".main-content").removeClass("app-content");
            $(".main-container").addClass("container");
            $(".main-container").removeClass("container-fluid");
            $(".app-header").addClass("hor-header");
            $(".app-header").removeClass("app-header");
            $(".app-sidebar").addClass("horizontal-main")
            $(".main-sidemenu").addClass("container")
            $('body').removeClass('sidebar-mini');
            $('body').removeClass('sidenav-toggled');
            $('body').removeClass('default-menu');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('double-menu');

            localStorage.setItem("sashhorizontalHover", true);
            localStorage.removeItem("sashvertical");
            localStorage.removeItem("sashhorizontal");
            localStorage.removeItem("sashdefaultmenu");
            localStorage.removeItem("sashclosedmenu");
            localStorage.removeItem("sashicontextmenu");
            localStorage.removeItem("sashsideiconmenu");
            localStorage.removeItem("sashhoversubmenu");
            localStorage.removeItem("sashhoversubmenu1");
            localStorage.removeItem("sashdoublemenu");
            localStorage.removeItem("sashdoublemenutabs");

            $('#default-logo').prop('checked', true);
        }
    });
    // HORIZONTAL HOVER END

    // DEFAULT SIDEMENU START
    $(document).on("click", '#myonoffswitch13', function () {
        if (this.checked) {
            $('body').addClass('default-menu');
            $('body').removeClass('sidenav-toggled');
            hovermenu();
            $('body').removeClass('icontext-menu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('double-menu');
            $('body').removeClass('center-logo');
            $('body').removeClass('default-logo');
            localStorage.setItem("sashdefaultmenu", true);
            localStorage.removeItem("sashclosedmenu");
            localStorage.removeItem("sashicontextmenu");
            localStorage.removeItem("sashsideiconmenu");
            localStorage.removeItem("sashhoversubmenu");
            localStorage.removeItem("sashhoversubmenu1");
            localStorage.removeItem("sashdoublemenu");
            localStorage.removeItem("sashdoublemenutabs");
            localStorage.removeItem("sashcenterlogo");
            localStorage.removeItem("sashdefaultlogo");
        } else {
            $('body').removeClass('default-menu');
        }
    });
    // DEFAULT SIDEMENU END

    // ICON OVERLAY SIDEMENU START
    $(document).on("click", '#myonoffswitch15', function () {
        if (this.checked) {
            $('body').addClass('icon-overlay');
            hovermenu();
            iconoverlay();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('default-menu');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('double-menu');
            $('body').removeClass('center-logo');
            $('body').removeClass('default-logo');
            localStorage.setItem("sashsideiconmenu", true);
            localStorage.removeItem("sashdefaultmenu");
            localStorage.removeItem("sashicontextmenu");
            localStorage.removeItem("sashclosedmenu");
            localStorage.removeItem("sashhoversubmenu");
            localStorage.removeItem("sashhoversubmenu1");
            localStorage.removeItem("sashdoublemenu");
            localStorage.removeItem("sashdoublemenutabs");
            localStorage.removeItem("sashcenterlogo");
            localStorage.removeItem("sashdefaultlogo");
        } else {
            $('body').removeClass('icon-overlay');
            $('body').removeClass('sidenav-toggled');
        }
    });
    // ICON OVERLAY SIDEMENU END

    // ICONTEXT SIDEMENU START
    $(document).on("click", '#myonoffswitch14', function () {
        if (this.checked) {
            $('body').addClass('icontext-menu');
            icontext();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('default-menu');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('double-menu');
            $('body').removeClass('center-logo');
            $('body').removeClass('default-logo');
            localStorage.setItem("sashicontextmenu", true);
            localStorage.removeItem("sashdefaultmenu");
            localStorage.removeItem("sashclosedmenu");
            localStorage.removeItem("sashsideiconmenu");
            localStorage.removeItem("sashhoversubmenu");
            localStorage.removeItem("sashhoversubmenu1");
            localStorage.removeItem("sashdoublemenu");
            localStorage.removeItem("sashdoublemenutabs");
            localStorage.removeItem("sashcenterlogo");
            localStorage.removeItem("sashdefaultlogo");
        } else {
            $('body').removeClass('icontext-menu');
            $('body').removeClass('sidenav-toggled');
        }
    });
    // ICONTEXT SIDEMENU END

    // CLOSED SIDEMENU START
    $(document).on("click", '#myonoffswitch16', function () {
        if (this.checked) {
            $('body').addClass('closed-leftmenu');
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('default-menu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('double-menu');
            $('body').removeClass('center-logo');
            $('body').removeClass('default-logo');
            localStorage.setItem("sashclosedmenu", true);
            localStorage.removeItem("sashdefaultmenu");
            localStorage.removeItem("sashicontextmenu");
            localStorage.removeItem("sashsideiconmenu");
            localStorage.removeItem("sashhoversubmenu");
            localStorage.removeItem("sashhoversubmenu1");
            localStorage.removeItem("sashdoublemenu");
            localStorage.removeItem("sashdoublemenutabs");
            localStorage.removeItem("sashcenterlogo");
            localStorage.removeItem("sashdefaultlogo");

        } else {
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('sidenav-toggled');
            $('body').addClass('default-menu');
        }
    });
    // CLOSED SIDEMENU END

    // HOVER SUBMENU START
    $(document).on("click", '#myonoffswitch17', function () {
        if (this.checked) {
            $('body').addClass('hover-submenu');
            hovermenu();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('default-menu');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('icontext-menu');
            $('.app-sidebar').removeClass('sidemenu-scroll');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('double-menu');
            $('body').removeClass('center-logo');
            $('body').removeClass('default-logo');
            localStorage.setItem("sashhoversubmenu", true);
            localStorage.removeItem("sashdefaultmenu");
            localStorage.removeItem("sashicontextmenu");
            localStorage.removeItem("sashsideiconmenu");
            localStorage.removeItem("sashclosedmenu");
            localStorage.removeItem("sashhoversubmenu1");
            localStorage.removeItem("sashdoublemenu");
            localStorage.removeItem("sashdoublemenutabs");
            localStorage.removeItem("sashcenterlogo");
            localStorage.removeItem("sashdefaultlogo");
        } else {
            $('body').removeClass('hover-submenu');
            $('body').removeClass('sidenav-toggled');
        }
    });
    // HOVER SUBMENU END

    // HOVER SUBMENU STYLE-1 START
    $(document).on("click", '#myonoffswitch18', function () {
        if (this.checked) {
            $('body').addClass('hover-submenu1');
            hovermenu();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('default-menu');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('icontext-menu');
            $('.app-sidebar').removeClass('sidemenu-scroll');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('double-menu');
            $('body').removeClass('center-logo');
            $('body').removeClass('default-logo');
            localStorage.setItem("sashhoversubmenu1", true);
            localStorage.removeItem("sashdefaultmenu");
            localStorage.removeItem("sashicontextmenu");
            localStorage.removeItem("sashsideiconmenu");
            localStorage.removeItem("sashclosedmenu");
            localStorage.removeItem("sashhoversubmenu");
            localStorage.removeItem("sashdoublemenu");
            localStorage.removeItem("sashdoublemenutabs");
            localStorage.removeItem("sashcenterlogo");
            localStorage.removeItem("sashdefaultlogo");
        } else {
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('sidenav-toggled');
        }
    });
    // HOVER SUBMENU STYLE-1 END

    //  DOUBLEMENU STYLE START
    $(document).on("click", '#doublemenu-switch', function () {
        if (this.checked) {
            $('body').addClass('double-menu');
            doubleLayoutFn();
            $('body').removeClass('sidenav-toggled-open');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('default-menu');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('center-logo');
            $('body').removeClass('default-logo');
            localStorage.setItem("sashdoublemenu", true);
            localStorage.removeItem("sashdefaultmenu");
            localStorage.removeItem("sashicontextmenu");
            localStorage.removeItem("sashsideiconmenu");
            localStorage.removeItem("sashclosedmenu");
            localStorage.removeItem("sashhoversubmenu");
            localStorage.removeItem("sashhoversubmenu1");
            localStorage.removeItem("sashdoublemenutabs");
            localStorage.removeItem("sashcenterlogo");
            localStorage.removeItem("sashdefaultlogo");
        } else {
            $('body').removeClass('double-menu');
        }
    });
    //  DOUBLEMENU STYLE END

    //  DOUBLEMENU STYLE1 START
    $(document).on("click", '#doublemenu-switch1', function () {
        if (this.checked) {
            $('body').addClass('double-menu-tabs');
            doubleLayoutFn();
            $('body').removeClass('sidenav-toggled-open');
            $('body').removeClass('double-menu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('default-menu');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('center-logo');
            $('body').removeClass('default-logo');
            localStorage.setItem("sashdoublemenutabs", true);
            localStorage.removeItem("sashdefaultmenu");
            localStorage.removeItem("sashicontextmenu");
            localStorage.removeItem("sashsideiconmenu");
            localStorage.removeItem("sashclosedmenu");
            localStorage.removeItem("sashhoversubmenu");
            localStorage.removeItem("sashhoversubmenu1");
            localStorage.removeItem("sashdoublemenu");
            localStorage.removeItem("sashcenterlogo");
            localStorage.removeItem("sashdefaultlogo");
        } else {
            $('body').removeClass('double-menu-tabs');
        }
    });
    //  DOUBLEMENU STYLE1 END


    //  Default Logo Start
    $(document).on("click", '#default-logo', function () {
        if (this.checked) {
            $('body').addClass('default-logo');
            $('body').removeClass('center-logo');
            localStorage.setItem("sashdefaultlogo", true);
            localStorage.removeItem("sashcenterlogo");
        }
    });
    //  Default Logo End

    //  Center Logo Start
    $(document).on("click", '#center-logo', function () {
        if (this.checked) {
            $('body').addClass('center-logo');
            $('body').removeClass('default-logo');
            localStorage.setItem("sashcenterlogo", true);
            localStorage.removeItem("sashdefaultlogo");
        }
    });
    //  Center Logo End


    // LIGHT LEFTMENU START
    $(document).on("click", '#myonoffswitch3', function () {
        if (this.checked) {
            $('body').addClass('light-menu');
            $('body').removeClass('color-menu');
            $('body').removeClass('dark-menu');
            $('body').removeClass('gradient-menu');
            localStorage.setItem("sashlightmenu", true);
            localStorage.removeItem("sashcolormenu");
            localStorage.removeItem("sashdarkmenu");
            localStorage.removeItem("sashgradientmenu");
        } else {
            $('body').removeClass('light-menu');
        }
    });
    // LIGHT LEFTMENU END

    // COLOR LEFTMENU START
    $(document).on("click", '#myonoffswitch4', function () {
        if (this.checked) {
            $('body').addClass('color-menu');
            $('body').removeClass('light-menu');
            $('body').removeClass('dark-menu');
            $('body').removeClass('gradient-menu');
            localStorage.setItem("sashcolormenu", true);
            localStorage.removeItem("sashlightmenu");
            localStorage.removeItem("sashdarkmenu");
            localStorage.removeItem("sashgradientmenu");
        } else {
            $('body').removeClass('color-menu');
        }
    });
    // COLOR LEFTMENU END

    // DARK LEFTMENU START
    $(document).on("click", '#myonoffswitch5', function () {
        if (this.checked) {
            $('body').addClass('dark-menu');
            $('body').removeClass('color-menu');
            $('body').removeClass('light-menu');
            $('body').removeClass('gradient-menu');
            localStorage.setItem("sashdarkmenu", true);
            localStorage.removeItem("sashlightmenu");
            localStorage.removeItem("sashcolormenu");
            localStorage.removeItem("sashgradientmenu");
        } else {
            $('body').removeClass('dark-menu');
        }
    });
    // DARK LEFTMENU END

    // GRADIENT LEFTMENU START
    $(document).on("click", '#myonoffswitch19', function () {
        if (this.checked) {
            $('body').addClass('gradient-menu');
            $('body').removeClass('color-menu');
            $('body').removeClass('light-menu');
            $('body').removeClass('dark-menu');
            localStorage.setItem("sashgradientmenu", true);
            localStorage.removeItem("sashlightmenu");
            localStorage.removeItem("sashcolormenu");
            localStorage.removeItem("sashdarkmenu");
        } else {
            $('body').removeClass('gradient-menu');
        }
    });
    // GRADIENT LEFTMENU END

    // LIGHT HEADER START
    $(document).on("click", '#myonoffswitch6', function () {
        if (this.checked) {
            $('body').addClass('header-light');
            $('body').removeClass('color-header');
            $('body').removeClass('dark-header');
            $('body').removeClass('gradient-header');
            localStorage.setItem("sashlightheader", true);
            localStorage.removeItem("sashcolorheader");
            localStorage.removeItem("sashdarkheader");
            localStorage.removeItem("sashgradientheader");
        } else {
            $('body').removeClass('header-light');
        }
    });
    // LIGHT HEADER END

    // COLOR HEADER START
    $(document).on("click", '#myonoffswitch7', function () {
        if (this.checked) {
            $('body').addClass('color-header');
            $('body').removeClass('header-light');
            $('body').removeClass('dark-header');
            $('body').removeClass('gradient-header');
            localStorage.setItem("sashcolorheader", true);
            localStorage.removeItem("sashlightheader");
            localStorage.removeItem("sashdarkheader");
            localStorage.removeItem("sashgradientheader");
        } else {
            $('body').removeClass('color-header');
        }
    });
    // COLOR HEADER END

    // DARK HEADER START
    $(document).on("click", '#myonoffswitch8', function () {
        if (this.checked) {
            $('body').addClass('dark-header');
            $('body').removeClass('color-header');
            $('body').removeClass('header-light');
            $('body').removeClass('gradient-header');
            localStorage.setItem("sashdarkheader", true);
            localStorage.removeItem("sashlightheader");
            localStorage.removeItem("sashcolorheader");
            localStorage.removeItem("sashgradientheader");
        } else {
            $('body').removeClass('dark-header');
        }
    });
    // DARK HEADER END

    // GRADIENT HEADER START
    $(document).on("click", '#myonoffswitch20', function () {
        if (this.checked) {
            $('body').addClass('gradient-header');
            $('body').removeClass('color-header');
            $('body').removeClass('header-light');
            $('body').removeClass('dark-header');
            localStorage.setItem("sashgradientheader", true);
            localStorage.removeItem("sashlightheader");
            localStorage.removeItem("sashcolorheader");
            localStorage.removeItem("sashdarkheader");
        } else {
            $('body').removeClass('gradient-header');
        }
    });
    // GRADIENT HEADER END

    // FULL WIDTH LAYOUT START
    $(document).on("click", '#myonoffswitch9', function () {
        if (this.checked) {
            $('body').addClass('layout-fullwidth');
            $('body').removeClass('layout-boxed');
            localStorage.setItem("sashfullwidth", true);
            localStorage.removeItem("sashboxedwidth");
            checkHoriMenu();
        } else {
            $('body').removeClass('layout-fullwidth');
        }
    });
    // FULL WIDTH LAYOUT END

    // BOXED LAYOUT START
    $(document).on("click", '#myonoffswitch10', function () {
        if (this.checked) {
            $('body').addClass('layout-boxed');
            $('body').removeClass('layout-fullwidth');
            localStorage.setItem("sashboxedwidth", true);
            localStorage.removeItem("sashfullwidth");
            checkHoriMenu();
        } else {
            $('body').removeClass('layout-boxed');
        }
    });
    // BOXED LAYOUT END

    // HEADER POSITION STYLES START
    $(document).on("click", '#myonoffswitch11', function () {
        if (this.checked) {
            $('body').addClass('fixed-layout');
            $('body').removeClass('scrollable-layout');
            localStorage.setItem("sashfixed", true);
            localStorage.removeItem("sashscrollable");
        } else {
            $('body').removeClass('fixed-layout');
        }
    });
    $(document).on("click", '#myonoffswitch12', function () {
        if (this.checked) {
            $('body').addClass('scrollable-layout');
            $('body').removeClass('fixed-layout');
            localStorage.setItem("sashscrollable", true);
            localStorage.removeItem("sashfixed");
        } else {
            $('body').removeClass('scrollable-layout');
        }
    });
    // HEADER POSITION STYLES END


}
switcherEvents();

//######## SWITCHER STYLES ######## //


// ***** Horizontal Click Menu ***** //

// $('body').addClass('horizontal');


// ***** Horizontal Hover Menu ***** //

// $('body').addClass('horizontal-hover');

// ***** Horizontal center-logo  ***** //
// $('body').addClass('center-logo');


/******* Theme Style ********/

// $('body').addClass('light-mode');
// $('body').addClass('dark-mode');
// $('body').addClass('transparent-mode');

/******* RTL VERSION *******/

// $('body').addClass('rtl');


// Sidemenu layout Styles //

// ***** Icon with Text *****//
// $('body').addClass('icontext-menu');
// $('body').addClass('sidenav-toggled');
// if(document.querySelector('.icontext-menu').firstElementChild.classList.contains('login-img') !== true){
// icontext();
// }

// ***** Icon Overlay ***** //
// $('body').addClass('icon-overlay');
// $('body').addClass('sidenav-toggled');

// ***** closed-leftmenu ***** //
// $('body').addClass('closed-leftmenu');
// $('body').addClass('sidenav-toggled')

// ***** hover-submenu ***** //
// $('body').addClass('hover-submenu');
// $('body').addClass('sidenav-toggled')
// if(document.querySelector('.hover-submenu').firstElementChild.classList.contains('login-img') !== true){
// hovermenu();
// }

// ***** hover-submenu style 1 ***** //
// $('body').addClass('hover-submenu1');
// $('body').addClass('sidenav-toggled')
// if(document.querySelector('.hover-submenu1').firstElementChild.classList.contains('login-img') !== true){
// hovermenu();
// }

// ***** double-menu style  ***** //
// $('body').addClass('double-menu ');
// if(document.querySelector('.double-menu ').firstElementChild.classList.contains('login-img') !== true){
// doubleLayoutFn();
// }


// *****double-menu-tabs style  ***** //
// $('body').addClass('double-menu-tabs');
// if(document.querySelector('.double-menu-tabs').firstElementChild.classList.contains('login-img') !== true){
// doubleLayoutFn();
// }


/******** *Header-Position Styles Start* ********/

// $('body').addClass('fixed-layout');
// $('body').addClass('scrollable-layout');


/******* Full Width Layout Start ********/

// $('body').addClass('layout-fullwidth');
// $('body').addClass('layout-boxed');


/******* Header Styles ********/

// $('body').addClass('header-light');
// $('body').addClass('color-header');
// $('body').addClass('dark-header');
// $('body').addClass('gradient-header');

/******* Menu Styles ********/

// $('body').addClass('light-menu');
// $('body').addClass('color-menu');
// $('body').addClass('dark-menu');
// $('body').addClass('gradient-menu');



/******* Transparent Bg-Image Style *******/

// Bg-Image1 Style
// $('body').addClass('bg-img1');
// $('body').addClass('transparent-mode');
// $('body').removeClass('light-mode');
// $('body').removeClass('dark-mode');

// Bg-Image2 Style
// $('body').addClass('bg-img2');
// $('body').addClass('transparent-mode');
// $('body').removeClass('light-mode');
// $('body').removeClass('dark-mode');

// Bg-Image3 Style
// $('body').addClass('bg-img3');
// $('body').addClass('transparent-mode');
// $('body').removeClass('light-mode');
// $('body').removeClass('dark-mode');

// Bg-Image4 Style
// $('body').addClass('bg-img4');
// $('body').addClass('transparent-mode');
// $('body').removeClass('light-mode');
// $('body').removeClass('dark-mode');


(function () {
    "use strict";
    /***************** Horizontal has Class *********************/
    let bodyhorizontal = $('body').hasClass('horizontal');
    if (bodyhorizontal) {
        if (!document.querySelector('.login-img')) {
            ActiveSubmenu();
            checkHoriMenu();
            responsive();
            menuClick();
        }
        $('body').addClass('horizontal');
        $(".main-content").addClass("hor-content");
        $(".main-content").removeClass("app-content");
        $(".main-container").addClass("container");
        $(".main-container").removeClass("container-fluid");
        $(".app-header").addClass("hor-header");
        $(".hor-header").removeClass("app-header");
        $(".app-sidebar").addClass("horizontal-main")
        $(".main-sidemenu").addClass("container")
        $('body').removeClass('sidebar-mini');
        $('body').removeClass('sidenav-toggled');
        $('body').removeClass('horizontal-hover');
        $('body').removeClass('default-menu');
        $('body').removeClass('icontext-menu');
        $('body').removeClass('icon-overlay');
        $('body').removeClass('closed-leftmenu');
        $('body').removeClass('hover-submenu');
        $('body').removeClass('hover-submenu1');
        $('body').removeClass('double-menu-tabs');
        $('body').removeClass('double-menu');
        // // To enable no-wrap horizontal style
        $('#slide-left').removeClass('d-none');
        $('#slide-right').removeClass('d-none');
        document.querySelector('.horizontal .side-menu')?.classList.add('flex-nowrap')
        // To enable wrap horizontal style
        // $('#slide-left').addClass('d-none');
        // $('#slide-right').addClass('d-none');
        // document.querySelector('.horizontal .side-menu').style.flexWrap = 'wrap'
        setTimeout(() => {
            if (window.innerWidth >= 992) {
                let li = document.querySelectorAll('.side-menu li')
                li.forEach((e, i) => {
                    e.classList.remove('is-expanded')
                })
                var animationSpeed = 300;
                // first level
                var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
                var ul = parent.find('ul:visible').slideUp(animationSpeed);
                ul.removeClass('open');
                var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
                var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
                ul1.removeClass('open');
            }
        }, 200)
    }
    /***************** Horizontal has Class *********************/

    /***************** Light Mode *********************/
    function light() {
        "use strict";
        if (document.querySelector('body').classList.contains('light-mode')) {
            $('#myonoffswitch3').prop('checked', true);
            $('#myonoffswitch6').prop('checked', true);
        }
    }
    light();

    /***************** Light Mode *********************/

    /***************** Horizontal Hover has Class *********************/
    let bodyhorizontalHover = $('body').hasClass('horizontal-hover');
    if (bodyhorizontalHover) {
        if (!document.querySelector('.login-img')) {
            checkHoriMenu();
            responsive();
        }
        $('body').addClass('horizontal-hover');
        $('body').addClass('horizontal');
        // $('#slide-left').addClass('d-none');
        // $('#slide-right').addClass('d-none');
        // document.querySelector('.horizontal .side-menu').style.flexWrap = 'wrap'
        $('#slide-left').addClass('d-none');
        $('#slide-right').addClass('d-none');
        document.querySelector('.horizontal .side-menu')?.classList.add('flex-nowrap')
        $(".main-content").addClass("hor-content");
        $(".main-content").removeClass("app-content");
        $(".main-container").addClass("container");
        $(".main-container").removeClass("container-fluid");
        $(".app-header").addClass("hor-header");
        $(".app-header").removeClass("app-header");
        $(".app-sidebar").addClass("horizontal-main")
        $(".main-sidemenu").addClass("container")
        $('body').removeClass('sidebar-mini');
        $('body').removeClass('sidenav-toggled');
        $('body').removeClass('default-menu');
        $('body').removeClass('icontext-menu');
        $('body').removeClass('icon-overlay');
        $('body').removeClass('closed-leftmenu');
        $('body').removeClass('hover-submenu');
        $('body').removeClass('hover-submenu1');
        $('body').removeClass('double-menu-tabs');
        $('body').removeClass('double-menu');
        setTimeout(() => {
            if (window.innerWidth >= 992) {
                let li = document.querySelectorAll('.side-menu li')
                li.forEach((e, i) => {
                    e.classList.remove('is-expanded')
                })
                var animationSpeed = 300;
                // first level
                var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
                var ul = parent.find('ul:visible').slideUp(animationSpeed);
                ul.removeClass('open');
                var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
                var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
                ul1.removeClass('open');
            }
        }, 200)
    }
    /***************** Horizontal Hover has Class *********************/

    /***************** RTL has Class *********************/
    let bodyRtl = $('body').hasClass('rtl');
    if (bodyRtl) {
        $('body').addClass('rtl');

        $('#slide-left').removeClass('d-none');
        $('#slide-right').removeClass('d-none');
        $("html[lang=en]").attr("dir", "rtl");
        $('body').removeClass('ltr');
        $("head link#style").attr("href", $(this));
        (document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
        var carousel = $('.owl-carousel');
        $.each(carousel, function (index, element) {
            // element == this
            var carouselData = $(element).data('owl.carousel');
            carouselData.settings.rtl = true; //don't know if both are necessary
            carouselData.options.rtl = true;
            $(element).trigger('refresh.owl.carousel');
        });
    }
    /***************** RTL has Class *********************/

    /***************** CLOSEDMENU has Class *********************/
    let bodyclosed = $('body').hasClass('closed-leftmenu');
    if (bodyclosed) {
        $('body').addClass('closed-leftmenu');
        if (!(document.querySelector('body').classList.contains('login-img'))) {
            hovermenu();
        }
        $('body').addClass('sidenav-toggled');
    }
    /***************** CLOSEDMENU has Class *********************/

    /***************** ICONTEXT MENU has Class *********************/
    let bodyicontext = $('body').hasClass('icontext-menu');
    if (bodyicontext) {
        $('body').addClass('icontext-menu');
        if (!(document.querySelector('body').classList.contains('login-img'))) {
            icontext();
        }
        $('body').addClass('sidenav-toggled');
    }
    /***************** ICONTEXT MENU has Class *********************/

    /***************** ICONOVERLAY MENU has Class *********************/
    let bodyiconoverlay = $('body').hasClass('icon-overlay');
    if (bodyiconoverlay) {
        $('body').addClass('icon-overlay');
        if (!(document.querySelector('body').classList.contains('login-img'))) {
            hovermenu();
            iconoverlay();
        }
        $('body').addClass('sidenav-toggled');
    }
    /***************** ICONOVERLAY MENU has Class *********************/

    /***************** HOVER-SUBMENU has Class *********************/
    let bodyhover = $('body').hasClass('hover-submenu');
    if (bodyhover) {
        $('body').addClass('hover-submenu');
        if (!(document.querySelector('body').classList.contains('login-img'))) {
            hovermenu();
        }
        $('body').addClass('sidenav-toggled');
    }
    /***************** HOVER-SUBMENU has Class *********************/

    /***************** HOVER-SUBMENU 1 has Class *********************/
    let bodyhover1 = $('body').hasClass('hover-submenu1');
    if (bodyhover1) {
        $('body').addClass('hover-submenu1');
        if (!(document.querySelector('body').classList.contains('login-img'))) {
            hovermenu();
        }
        $('body').addClass('sidenav-toggled');
    }
    /***************** HOVER-SUBMENU 1 has Class *********************/

    /***************** Double-Menu has Class *********************/
    let bodydoublemenu = $('body').hasClass('double-menu');
    if (bodydoublemenu) {
        $('body').addClass('double-menu');
        if (!(document.querySelector('body').classList.contains('login-img'))) {
            doublemenu();
            $('body').removeClass('sidenav-toggled-open');
        }
    }
    /***************** Double-Menu has Class *********************/

    /***************** Double-Menu-Tabs has Class *********************/
    let bodydoublemenutabs = $('body').hasClass('double-menu-tabs');
    if (bodydoublemenutabs) {
        $('body').addClass('double-menu-tabs');
        if (!(document.querySelector('body').classList.contains('login-img'))) {
            doublemenu();
            $('body').removeClass('sidenav-toggled-open');
        }
    }
    /***************** Double-Menu-Tabs has Class *********************/
    checkOptions();
})()


// CHECK OPTIONS
function checkOptions() {
    "use strict";
    // rtl
    if (document.querySelector('body').classList.contains('rtl')) {
        $('#myonoffswitch24').prop('checked', true);
    }
    // horizontal
    if (document.querySelector('body').classList.contains('horizontal')) {
        $('#myonoffswitch35').prop('checked', true);
    }
    // horizontal-hover
    if (document.querySelector('body').classList.contains('horizontal-hover')) {
        $('#myonoffswitch111').prop('checked', true);
    }

    // light header 
    if (document.querySelector('body').classList.contains('header-light')) {
        $('#myonoffswitch6').prop('checked', true);
    }
    // color header 
    if (document.querySelector('body').classList.contains('color-header')) {
        $('#myonoffswitch7').prop('checked', true);
    }
    // gradient header 
    if (document.querySelector('body').classList.contains('gradient-header')) {
        $('#myonoffswitch20').prop('checked', true);
    }
    // dark header 
    if (document.querySelector('body').classList.contains('dark-header')) {
        $('#myonoffswitch8').prop('checked', true);
    }

    // light menu
    if (document.querySelector('body').classList.contains('light-menu')) {
        $('#myonoffswitch3').prop('checked', true);
    }
    // color menu
    if (document.querySelector('body').classList.contains('color-menu')) {
        $('#myonoffswitch4').prop('checked', true);
    }
    // gradient menu
    if (document.querySelector('body').classList.contains('gradient-menu')) {
        $('#myonoffswitch19').prop('checked', true);
    }
    // dark menu
    if (document.querySelector('body').classList.contains('dark-menu')) {
        $('#myonoffswitch5').prop('checked', true);
    }

    // Boxed style
    if (document.querySelector('body').classList.contains('layout-boxed')) {
        $('#myonoffswitch10').prop('checked', true);
    }
    // scrollable-layout style
    if (document.querySelector('body').classList.contains('scrollable-layout')) {
        $('#myonoffswitch12').prop('checked', true);
    }

    // closed-menu style
    if (document.querySelector('body').classList.contains('closed-leftmenu')) {
        $('#myonoffswitch16').prop('checked', true);
    }
    // icontext-menu style
    if (document.querySelector('body').classList.contains('icontext-menu')) {
        $('#myonoffswitch14').prop('checked', true);
    }
    // iconoverlay-menu style
    if (document.querySelector('body').classList.contains('icon-overlay')) {
        $('#myonoffswitch15').prop('checked', true);
    }
    // hover-submenu style
    if (document.querySelector('body').classList.contains('hover-submenu')) {
        $('#myonoffswitch17').prop('checked', true);
    }
    // hover-submenu1 style
    if (document.querySelector('body').classList.contains('hover-submenu1')) {
        $('#myonoffswitch18').prop('checked', true);
    }
    // double-menu style
    if (document.querySelector('body').classList.contains('double-menu')) {
        $('#doublemenu-switch').prop('checked', true);
    }
    // double-menu-tabs style
    if (document.querySelector('body').classList.contains('double-menu-tabs')) {
        $('#doublemenu-switch1').prop('checked', true);
    }

    // default-logo style
    if (document.querySelector('body').classList.contains('default-logo')) {
        $('#default-logo').prop('checked', true);
    }
    // center-logo style
    if (document.querySelector('body').classList.contains('center-logo')) {
        $('#center-logo').prop('checked', true);
    }
}
// CHECK OPTIONS END

// RESET SWITCHER TO DEFAULT
function resetData() {
    "use strict";

    $('#myonoffswitch3').prop('checked', true);
    $('#myonoffswitch6').prop('checked', true);
    $('#myonoffswitch1').prop('checked', true);
    $('#myonoffswitch9').prop('checked', true);
    $('#myonoffswitch11').prop('checked', true);
    $('#myonoffswitch13').prop('checked', true);
    $('#myonoffswitch34').prop('checked', true);
    $('#myonoffswitch23').prop('checked', true);
    $('body')?.removeClass('bg-img4');
    $('body')?.removeClass('bg-img1');
    $('body')?.removeClass('bg-img2');
    $('body')?.removeClass('bg-img3');
    $('body')?.removeClass('transparent-mode');
    $('body')?.removeClass('dark-mode');
    $('body')?.removeClass('dark-menu');
    $('body')?.removeClass('color-menu');
    $('body')?.removeClass('gradient-menu');
    $('body')?.removeClass('dark-header');
    $('body')?.removeClass('color-header');
    $('body')?.removeClass('gradient-header');
    $('body')?.removeClass('layout-boxed');
    $('body')?.removeClass('icontext-menu');
    $('body')?.removeClass('icon-overlay');
    $('body')?.removeClass('closed-leftmenu');
    $('body')?.removeClass('hover-submenu');
    $('body')?.removeClass('hover-submenu1');
    $('body').removeClass('double-menu-tabs');
    $('body').removeClass('double-menu');
    $('body')?.removeClass('sidenav-toggled');
    $('body')?.removeClass('scrollable-layout');
    $('body')?.removeClass('default-logo');
    $('body')?.removeClass('center-logo');
    $('body')?.removeClass('rtl');
    $('body')?.addClass('ltr');
    names();

    document.querySelector('html').setAttribute("dir", "ltr");

    // resetting horizontal to vertical
    $('body').removeClass('horizontal');
    $('body').removeClass('horizontal-hover');
    $(".main-content").removeClass("hor-content");
    $(".main-content").addClass("app-content");
    $(".main-container").removeClass("container");
    $(".main-container").addClass("container-fluid");
    $(".app-header").removeClass("hor-header");
    $(".hor-header").addClass("app-header");
    $(".app-sidebar").removeClass("horizontal-main")
    $(".app-sidebar").removeClass("fixed-header")
    $(".main-sidemenu").removeClass("container")
    $(".slide-menu").removeClass("ps")
    $(".slide-menu").removeClass("ps--active-y")
    $('#slide-left').removeClass('d-none');
    $('#slide-right').removeClass('d-none');
    $('body').addClass('sidebar-mini');
    $('body').removeClass('default-logo');
    $('body').removeClass('center-logo');

    //resetting RTL to LTR
    $("html[lang=en]").attr("dir", "ltr");
    $('body').removeClass('rtl');
    $("head link#style").attr("href", $(this));
    (document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
    var carousel = $('.owl-carousel');
    $.each(carousel, function (index, element) {
        // element == this
        var carouselData = $(element).data('owl.carousel');
        carouselData.settings.rtl = false; //don't know if both are necessary
        carouselData.options.rtl = false;
        $(element).trigger('refresh.owl.carousel');
    });

    if (!document.querySelector('body').classList.contains('login-img')) {
        responsive();
        ActiveSubmenu();
    }
}
    // RESET SWITCHER TO DEFAULT