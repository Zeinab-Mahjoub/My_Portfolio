$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

var scroll = window.requestAnimationFrame ||
    function (callback) { window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewPort(element)){
            element.classList.add('is-visible');
        }
    });
    scroll(loop);
}

loop();

function isElementInViewPort(el) {
    if (typeof jQuery === "function" && el instanceof jQuery){
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return(
        (rect.top <= 0
        && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.getElement.clientHeight) &&
        rect.top <=(window.innerHeight || document.getElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.getElement.clientHeight))
    );
}

//-------------------      process bar      --------------------

$(function() {

    var $meters = $(".bar > span");
    var $section = $('.skills-wrapper');
    var $queue = $({});

    function loadDaBars() {
        $meters.each(function() {
            var $el = $(this);
            var origWidth = $el.width();
            $el.width(0);
            $queue.queue(function(next) {
                $el.animate({width: origWidth}, 700, next);
            });
        });
    }

    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            loadDaBars();
            // unbind event not to load scroll again
            $(document).unbind('scroll');
        }
    });

});
//-------------------------------

$(window).bind('scroll', function() {
    if ($(window).scrollTop() > ($(window).height())) {
        $('CANVAS').hide();
    }
    else {
        $('CANVAS').show();
    }
});

//----------------------------------
$(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > (window.innerHeight) + 200) {
            $('body').addClass('changeColor')
        } else {
            $('body').removeClass('changeColor')
        }
    });
});

//-----------------     text effect     -----------------
let x = 0;
let textEffect = "Hi, \n I'm Zeinab, \n\ web developer.".split('');
let container = document.getElementById("effect");
console.log(textEffect)

function animate() {
    if (x < textEffect.length) {
        const ch = textEffect[x];
        let el;
        if (ch === '\n') {
            el = document.createElement('br');
        }
        else {
            el = document.createElement('span');
            el.innerText = ch;
            if (x === 10) {
                el.style.fontSize = "6.5rem";
                el.style.color = "#ff00b2";
                el.style.textShadow = "-10px -8px 0px #0de8e8";
            }
        }
        container.append(el);
        x++;
    }
}

setInterval(animate, 80);






