const handleThemeUpdate = (cssVars) => {
    const root = document.querySelector(':root');
    const keys = Object.keys(cssVars);
    keys.forEach(key => {
        root.style.setProperty(key, cssVars[key]);
    });
}
const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return [r, g, b]
}
function dynamicPrimaryColor(primaryColor) {
    'use strict'

    primaryColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            document.querySelector('html').style.setProperty('--primary-rgb', hex2rgb(e.target.value));
        });
    });
}
function darkdynamicPrimaryColor(darkprimaryColor) {
    'use strict'

    darkprimaryColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            document.querySelector('html').style.setProperty('--primary-rgb', hex2rgb(e.target.value));
        });
    });
}

function imageBgdynamicPrimaryColor(imageprimaryColor) {
    'use strict'

    imageprimaryColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            document.querySelector('html').style.setProperty('--transparent-bg-rgb', hex2rgb(e.target.value));
        });
    });
}
function transparentdynamicPrimaryColor(primaryColor) {
    'use strict'

    primaryColor.forEach((item) => {
        item.addEventListener('input', (e) => {

            document.querySelector('html').style.setProperty('--primary-rgb', hex2rgb(e.target.value));
        });
    });
}

(function () {
    'use strict'

    // Light theme color picker
    const dynamicPrimaryLight = document.querySelectorAll('input.color-primary-light');

    dynamicPrimaryColor(dynamicPrimaryLight);

    // dark theme color picker
    const DarkDynamicPrimaryLight = document.querySelectorAll('input.color-primary-dark');

    darkdynamicPrimaryColor(DarkDynamicPrimaryLight);

    // tranparent theme color picker
    const transparentDynamicPrimaryLight = document.querySelectorAll('input.color-primary-transparent');

    transparentdynamicPrimaryColor(transparentDynamicPrimaryLight);

    // tranparent theme bgcolor picker
    const transparentDynamicPBgLight = document.querySelectorAll('input.color-bg-transparent');

    imageBgdynamicPrimaryColor(transparentDynamicPBgLight);

    localStorageBackup();

    $('#myonoffswitch1').on('click', function () {
        document.querySelector('body')?.classList.remove('dark-mode');
        document.querySelector('body')?.classList.remove('transparent-mode');
        document.querySelector('body')?.classList.remove('bg-img1');
        document.querySelector('body')?.classList.remove('bg-img2');
        document.querySelector('body')?.classList.remove('bg-img3');
        document.querySelector('body')?.classList.remove('bg-img4');

        localStorage.removeItem('sashBgImage');
        $('#myonoffswitch1').prop('checked', true);

        localStorage.setItem('sashlightMode', true);
        localStorage.removeItem('sashdarkMode');
        localStorage.removeItem('sashtransparentMode');
    })
    $('#myonoffswitch2').on('click', function () {
        document.querySelector('body')?.classList.remove('light-mode');
        document.querySelector('body')?.classList.remove('transparent-mode');
        document.querySelector('body')?.classList.remove('bg-img1');
        document.querySelector('body')?.classList.remove('bg-img2');
        document.querySelector('body')?.classList.remove('bg-img3');
        document.querySelector('body')?.classList.remove('bg-img4');

        localStorage.setItem('sashdarkMode', true);
        localStorage.removeItem('sashlightMode');
        localStorage.removeItem('sashtransparentMode');

        localStorage.removeItem('sashBgImage');
        $('#myonoffswitch2').prop('checked', true);
    })
    $('#myonoffswitchTransparent').on('click', function () {
        document.querySelector('body')?.classList.remove('dark-mode');
        document.querySelector('body')?.classList.remove('light-mode');
        document.querySelector('body')?.classList.remove('bg-img1');
        document.querySelector('body')?.classList.remove('bg-img2');
        document.querySelector('body')?.classList.remove('bg-img3');
        document.querySelector('body')?.classList.remove('bg-img4');

        localStorage.removeItem('sashBgImage');
        $('#myonoffswitchTransparent').prop('checked', true);

        localStorage.setItem('sashtransparentMode', true);
        localStorage.removeItem('sashlightMode');
        localStorage.removeItem('sashdarkMode');
    })

})();

// triggers on changing the color picker
function changePrimaryColor() {
    'use strict'

    $('#myonoffswitch3').prop('checked', true);
    $('#myonoffswitch6').prop('checked', true);
    checkOptions();

    var userColor = document.getElementById('colorID').value;
    localStorage.setItem('sashprimaryColor', hex2rgb(userColor));

    // removing dark theme properties
    localStorage.removeItem('sashdarkPrimary')
    localStorage.removeItem('sashtransparentBgColor');
    localStorage.removeItem('sashtransparentThemeColor');
    localStorage.removeItem('sashtransparentPrimary');
    localStorage.removeItem('sashtransparentBgImgPrimary');
    localStorage.removeItem('sashtransparentBgImgprimaryTransparent');
    localStorage.removeItem('sashdarkprimaryTransparent');
    document.querySelector('body').classList.add('light-mode');
    document.querySelector('body').classList.remove('transparent-mode');
    document.querySelector('body').classList.remove('dark-mode');
    localStorage.removeItem('sashBgImage');

    $('#myonoffswitch1').prop('checked', true);
    names()

    localStorage.setItem('sashlightMode', true);
    localStorage.removeItem('sashdarkMode');
    localStorage.removeItem('sashtransparentMode');
}

function darkPrimaryColor() {
    'use strict'
    var userColor = document.getElementById('darkPrimaryColorID').value;
    localStorage.setItem('sashdarkPrimary', hex2rgb(userColor));

    $('#myonoffswitch5').prop('checked', true);
    $('#myonoffswitch8').prop('checked', true);
    checkOptions();

    // removing light theme data 
    localStorage.removeItem('sashprimaryColor')
    localStorage.removeItem('sashprimaryHoverColor')
    localStorage.removeItem('sashprimaryBorderColor')
    localStorage.removeItem('sashprimaryTransparent');
    localStorage.removeItem('sashtransparentBgImgPrimary');
    localStorage.removeItem('sashtransparentBgImgprimaryTransparent');

    localStorage.removeItem('sashtransparentBgColor');
    localStorage.removeItem('sashtransparentThemeColor');
    localStorage.removeItem('sashtransparentPrimary');
    localStorage.removeItem('sashBgImage');

    document.querySelector('body').classList.add('dark-mode');
    document.querySelector('body').classList.remove('light-mode');
    document.querySelector('body').classList.remove('transparent-mode');

    $('#myonoffswitch2').prop('checked', true);
    names()

    localStorage.setItem('sashdarkMode', true);
    localStorage.removeItem('sashlightMode');
    localStorage.removeItem('sashtransparentMode');
}

function transparentPrimaryColor() {
    'use strict'

    $('#myonoffswitch3').prop('checked', false);
    $('#myonoffswitch6').prop('checked', false);
    $('#myonoffswitch5').prop('checked', false);
    $('#myonoffswitch8').prop('checked', false);

    var userColor = document.getElementById('transparentPrimaryColorID').value;
    localStorage.setItem('sashtransparentPrimary', hex2rgb(userColor));

    // removing light theme data 
    localStorage.removeItem('sashdarkPrimary');
    localStorage.removeItem('sashprimaryColor')
    localStorage.removeItem('sashprimaryHoverColor')
    localStorage.removeItem('sashprimaryBorderColor')
    localStorage.removeItem('sashprimaryTransparent');
    localStorage.removeItem('sashtransparentBgImgPrimary');
    localStorage.removeItem('sashtransparentBgImgprimaryTransparent');
    document.querySelector('body').classList.add('transparent-mode');
    document.querySelector('body').classList.remove('light-mode');
    document.querySelector('body').classList.remove('dark-mode');
    document.querySelector('body')?.classList.remove('bg-img1');
    document.querySelector('body')?.classList.remove('bg-img2');
    document.querySelector('body')?.classList.remove('bg-img3');
    document.querySelector('body')?.classList.remove('bg-img4');

    $('#myonoffswitchTransparent').prop('checked', true);
    checkOptions();
    names()

    localStorage.setItem('sashtransparentMode', true);
    localStorage.removeItem('sashlightMode');
    localStorage.removeItem('sashdarkMode');
}

function transparentBgImgPrimaryColor() {
    'use strict'

    $('#myonoffswitch3').prop('checked', false);
    $('#myonoffswitch6').prop('checked', false);
    $('#myonoffswitch5').prop('checked', false);
    $('#myonoffswitch8').prop('checked', false);

    var userColor = document.getElementById('transparentBgImgPrimaryColorID').value;
    localStorage.setItem('sashtransparentBgImgPrimary', hex2rgb(userColor));
    if (
        document.querySelector('body')?.classList.contains('bg-img1') == false &&
        document.querySelector('body')?.classList.contains('bg-img2') == false &&
        document.querySelector('body')?.classList.contains('bg-img3') == false &&
        document.querySelector('body')?.classList.contains('bg-img4') == false
    ) {
        document.querySelector('body')?.classList.add('bg-img1');
        localStorage.setItem('sashBgImage', 'bg-img1')
    }
    // removing light theme data 
    localStorage.removeItem('sashdarkPrimary');
    localStorage.removeItem('sashprimaryColor')
    localStorage.removeItem('sashprimaryHoverColor')
    localStorage.removeItem('sashprimaryBorderColor')
    localStorage.removeItem('sashprimaryTransparent');
    localStorage.removeItem('sashdarkprimaryTransparent');
    localStorage.removeItem('sashtransparentPrimary')
    localStorage.removeItem('sashtransparentprimaryTransparent');
    document.querySelector('body').classList.add('transparent-mode');
    document.querySelector('body')?.classList.remove('light-mode');
    document.querySelector('body')?.classList.remove('dark-mode');

    $('#myonoffswitchTransparent').prop('checked', true);
    checkOptions();
    names();

    localStorage.setItem('sashtransparentMode', true);
    localStorage.removeItem('sashlightMode');
    localStorage.removeItem('sashdarkMode');
}


function transparentBgColor() {
    'use strict'

    $('#myonoffswitch3').prop('checked', false);
    $('#myonoffswitch6').prop('checked', false);
    $('#myonoffswitch5').prop('checked', false);
    $('#myonoffswitch8').prop('checked', false);

    var userColor = document.getElementById('transparentBgColorID').value;
    localStorage.setItem('sashtransparentBgColor', hex2rgb(userColor));
    localStorage.removeItem('sashtransparentBgImgPrimary');
    localStorage.removeItem('sashtransparentBgImgprimaryTransparent');

    // removing light theme data 
    localStorage.removeItem('sashdarkPrimary');
    localStorage.removeItem('sashprimaryColor')
    localStorage.removeItem('sashprimaryHoverColor')
    localStorage.removeItem('sashprimaryBorderColor')
    localStorage.removeItem('sashprimaryTransparent');
    localStorage.removeItem('sashBgImage');
    document.querySelector('body').classList.add('transparent-mode');
    document.querySelector('body').classList.remove('light-mode');
    document.querySelector('body').classList.remove('dark-mode');
    document.querySelector('body')?.classList.remove('bg-img1');
    document.querySelector('body')?.classList.remove('bg-img2');
    document.querySelector('body')?.classList.remove('bg-img3');
    document.querySelector('body')?.classList.remove('bg-img4');

    $('#myonoffswitchTransparent').prop('checked', true);
    checkOptions();

    localStorage.setItem('sashtransparentMode', true);
    localStorage.removeItem('sashlightMode');
    localStorage.removeItem('sashdarkMode');
}


function bgImage(e) {
    'use strict'

    $('#myonoffswitch3').prop('checked', false);
    $('#myonoffswitch6').prop('checked', false);
    $('#myonoffswitch5').prop('checked', false);
    $('#myonoffswitch8').prop('checked', false);
    let imgID = e.getAttribute('class');
    localStorage.setItem('sashBgImage', imgID);

    // removing light theme data 
    localStorage.removeItem('sashdarkPrimary');
    localStorage.removeItem('sashprimaryColor')
    localStorage.removeItem('sashtransparentBgColor');
    localStorage.removeItem('sashtransparentThemeColor');
    localStorage.removeItem('sashtransparentprimaryTransparent');
    document.querySelector('body').classList.add('transparent-mode');
    document.querySelector('body')?.classList.remove('light-mode');
    document.querySelector('body')?.classList.remove('dark-mode');

    $('#myonoffswitchTransparent').prop('checked', true);
    checkOptions();

    localStorage.setItem('sashtransparentMode', true);
    localStorage.removeItem('sashlightMode');
    localStorage.removeItem('sashdarkMode');
}

function localStorageBackup() {
    'use strict'

    // if there is a value stored, update color picker and background color
    // Used to retrive the data from local storage
    if (localStorage.sashprimaryColor) {
        if (document.getElementById('colorID')) {
            document.getElementById('colorID').value = localStorage.sashprimaryColor;
        }
        document.querySelector('html').style.setProperty('--primary-rgb', localStorage.sashprimaryColor);
        document.querySelector('body')?.classList.add('light-mode');
        document.querySelector('body')?.classList.remove('dark-mode');
        document.querySelector('body')?.classList.remove('transparent-mode');

        $('#myonoffswitch3').prop('checked', true);
        $('#myonoffswitch6').prop('checked', true);
        $('#myonoffswitch1').prop('checked', true);
    }

    if (localStorage.sashdarkPrimary) {
        if (document.getElementById('darkPrimaryColorID')) {
            document.getElementById('darkPrimaryColorID').value = localStorage.sashdarkPrimary;
        }
        document.querySelector('html').style.setProperty('--primary-rgb', localStorage.sashdarkPrimary);
        document.querySelector('body')?.classList.add('dark-mode');
        document.querySelector('body')?.classList.remove('light-mode');
        document.querySelector('body')?.classList.remove('transparent-mode');

        $('#myonoffswitch2').prop('checked', true);

    }


    if (localStorage.sashtransparentPrimary) {
        if (document.getElementById('transparentPrimaryColorID')) {
            document.getElementById('transparentPrimaryColorID').value = localStorage.sashtransparentPrimary;
        }
        document.querySelector('html').style.setProperty('--primary-rgb', localStorage.sashtransparentPrimary);
        document.querySelector('body')?.classList.add('transparent-mode');
        document.querySelector('body')?.classList.remove('dark-mode');
        document.querySelector('body')?.classList.remove('light-mode');

        $('#myonoffswitchTransparent').prop('checked', true);
    }

    if (localStorage.sashtransparentBgImgPrimary) {
        if (document.getElementById('transparentBgImgPrimaryColorID')) {
            document.getElementById('transparentBgImgPrimaryColorID').value = localStorage.sashtransparentBgImgPrimary;
        }
        document.querySelector('html').style.setProperty('--primary-rgb', localStorage.sashtransparentBgImgPrimary);
        document.querySelector('body')?.classList.add('transparent-mode');
        document.querySelector('body')?.classList.remove('dark-mode');
        document.querySelector('body')?.classList.remove('light-mode');

        $('#myonoffswitchTransparent').prop('checked', true);
    }

    if (localStorage.sashtransparentBgColor) {
        if (document.getElementById('transparentBgColorID')) {
            document.getElementById('transparentBgColorID').value = localStorage.sashtransparentBgColor;
        }
        document.querySelector('html').style.setProperty('--transparent-bg-rgb', localStorage.sashtransparentBgColor);
        document.querySelector('body').classList.add('transparent-mode');
        document.querySelector('body').classList.remove('dark-mode');
        document.querySelector('body').classList.remove('light-mode');


        $('#myonoffswitchTransparent').prop('checked', true);
    }
    if (localStorage.sashBgImage) {
        document.querySelector('body')?.classList.add('transparent-mode');
        let bgImg = localStorage.sashBgImage.split(' ')[0];
        document.querySelector('body')?.classList.add(bgImg);
        document.querySelector('body')?.classList.remove('dark-mode');
        document.querySelector('body')?.classList.remove('light-mode');

        $('#myonoffswitchTransparent').prop('checked', true);
    }
    if (localStorage.sashlightMode) {
        document.querySelector('body')?.classList.add('light-mode');
        document.querySelector('body')?.classList.remove('dark-mode');
        document.querySelector('body')?.classList.remove('transparent-mode');
        $('#myonoffswitch1').prop('checked', true);
        $('#myonoffswitch3').prop('checked', true);
        $('#myonoffswitch6').prop('checked', true);
    }
    if (localStorage.sashdarkMode) {
        document.querySelector('body')?.classList.remove('light-mode');
        document.querySelector('body')?.classList.add('dark-mode');
        document.querySelector('body')?.classList.remove('transparent-mode');
        $('#myonoffswitch2').prop('checked', true);
        $('#myonoffswitch5').prop('checked', true);
        $('#myonoffswitch8').prop('checked', true);
    }
    if (localStorage.sashtransparentMode) {
        document.querySelector('body')?.classList.remove('light-mode');
        document.querySelector('body')?.classList.remove('dark-mode');
        document.querySelector('body')?.classList.add('transparent-mode');
        $('#myonoffswitchTransparent').prop('checked', true);
        $('#myonoffswitch3').prop('checked', false);
        $('#myonoffswitch6').prop('checked', false);
        $('#myonoffswitch5').prop('checked', false);
        $('#myonoffswitch8').prop('checked', false);
    }
    if (localStorage.sashhorizontal) {
        document.querySelector('body').classList.add('horizontal')
    }
    if (localStorage.sashhorizontalHover) {
        document.querySelector('body').classList.add('horizontal-hover')
    }
    if (localStorage.sashrtl) {
        document.querySelector('body').classList.add('rtl')
    }
    if (localStorage.sashclosedmenu) {
        document.querySelector('body').classList.add('closed-leftmenu')
    }
    if (localStorage.sashicontextmenu) {
        document.querySelector('body').classList.add('icontext-menu')
    }
    if (localStorage.sashsideiconmenu) {
        document.querySelector('body').classList.add('icon-overlay')
    }
    if (localStorage.sashhoversubmenu) {
        document.querySelector('body').classList.add('hover-submenu')
    }
    if (localStorage.sashhoversubmenu1) {
        document.querySelector('body').classList.add('hover-submenu1')
    }
    if (localStorage.sashdoublemenu) {
        document.querySelector('body').classList.add('double-menu')
    }
    if (localStorage.sashdoublemenutabs) {
        document.querySelector('body').classList.add('double-menu-tabs')
    }
    if (localStorage.sashscrollable) {
        document.querySelector('body').classList.add('scrollable-layout')
    }
    if (localStorage.sashboxedwidth) {
        document.querySelector('body').classList.add('layout-boxed')
    }
    if (localStorage.sashlightheader) {
        document.querySelector('body').classList.add('header-light')
    }
    if (localStorage.sashcolorheader) {
        document.querySelector('body').classList.add('color-header')
    }
    if (localStorage.sashdarkheader) {
        document.querySelector('body').classList.add('dark-header')
    }
    if (localStorage.sashgradientheader) {
        document.querySelector('body').classList.add('gradient-header')
    }

    if (localStorage.sashlightmenu) {
        document.querySelector('body').classList.add('light-menu')
    }
    if (localStorage.sashcolormenu) {
        document.querySelector('body').classList.add('color-menu')
    }
    if (localStorage.sashdarkmenu) {
        document.querySelector('body').classList.add('dark-menu')
    }
    if (localStorage.sashgradientmenu) {
        document.querySelector('body').classList.add('gradient-menu')
    }
    if (localStorage.sashdefaultlogo) {
        document.querySelector('body').classList.add('default-logo')
    }
    if (localStorage.sashcenterlogo) {
        document.querySelector('body').classList.add('center-logo')
    }


}

// to check the value is hexa or not
const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue)

const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"))
// convert hex value to 256
const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a, alpha) => {
    if (typeof a !== "undefined") { return a / 255 }
    if ((typeof alpha != "number") || alpha < 0 || alpha > 1) {
        return 1
    }
    return alpha
}
// convertion of hex code to rgba code 
function hexToRgba(hexValue, alpha) {
    'use strict'

    if (!isValidHex(hexValue)) { return null }
    const chunkSize = Math.floor((hexValue.length - 1) / 3)
    const hexArr = getChunksFromString(hexValue.slice(1), chunkSize)
    const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
    return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`
}


let myVarVal, myVarVal1, myVarVal2, myVarVal3,primaryColorVal

function names() {
    'use strict'

    primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue('--primary-rgb').trim();

    //get variable
    myVarVal = localStorage.getItem("sashprimaryColor") || localStorage.getItem("sashdarkPrimary") || localStorage.getItem("sashtransparentPrimary") || localStorage.getItem("sashtransparentBgImgPrimary") ||primaryColorVal;
    myVarVal1 = localStorage.getItem("sashprimaryColor") || localStorage.getItem("sashdarkPrimary") || localStorage.getItem("sashtransparentPrimary") || localStorage.getItem("sashtransparentBgImgPrimary") || "#05c3fb";

    if (document.querySelector('#transactions') !== null) {
        index(myVarVal, myVarVal1);
    }
}
names();
