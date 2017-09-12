/* global FloatLabels Typed */
(function() {
    "use strict";

    function roundToTwo(num) {    
        return +(Math.round((num + 0.00001) * 100) / 100);
    }

    // Let's have a beer!
    console.log("Sinon, on peut aussi discuter autour d'un 🍵 ou d'une 🍺 !");

    // Floating labels
    var floatlabels = new FloatLabels( "form", {
        style: 2
    });

    // Show modal
    function showModal() {
        var showFrm  = document.getElementById("showForm");
        var showAbt  = document.getElementById("showAbout");
        var closeBtn = document.getElementsByClassName("close");
        var visibleContactClass = "visible-contact";
        var visibleAboutClass   = "visible-about";
        var isEscape = false;

        showFrm.addEventListener("click", function(e){
            e.preventDefault();
            document.body.classList.add(visibleContactClass);
        });

        showAbt.addEventListener("click", function(e){
            e.preventDefault();
            document.body.classList.add(visibleAboutClass);
        });

        Array.from(closeBtn).forEach(function(e){
            e.addEventListener("click", function(e){
                e.preventDefault();
                document.body.classList.remove(visibleContactClass, visibleAboutClass);
            });
        });

        document.onkeydown = function(e) {
            e = e || window.event;
            if (typeof key !== "undefined") {
                isEscape = (e.key === "Escape" || e.key === "Esc");
            } else {
                isEscape = (e.keyCode === 27);
            }
            if (isEscape) {
                document.body.classList.remove(visibleContactClass, visibleAboutClass);
            }
        };
    }

    // Move background
    function moveBg() {
        var backgroundImage = document.querySelector(".bg img");

        if (backgroundImage) {
            var moveTimer;
            document.body.onmousemove = function(e){
                clearTimeout(moveTimer);
                moveTimer = setTimeout(function() {
                    var pageX = e.pageX - (window.innerWidth / 2);
                    var pageY = e.pageY - (window.innerHeight / 2);
                    var newX = roundToTwo(-5 * pageX / window.innerWidth);
                    var newY = roundToTwo(-5 * pageY / window.innerHeight);
                    backgroundImage.style.transform = "translate3d("+newX+"px,"+newY+"px,0)";
                }, 10);
            };
        }
    }

    // Type
    var options = {
        strings: ["body {background-color: gray}"],
        typeSpeed: 40
    }

    var typed = new Typed("#code", options);



    function typeAndStyle() {
        var styleEl = document.createElement('style');
        var css = 'body { background-color: gray }';

        document.head.appendChild(styleEl);

        console.log(styleEl.sheet);

        styleEl.sheet.insertRule(css, styleEl.sheet.cssRules.length);

    }
    
    window.onorientationchange = function() {
        document.body.scrollTop = 0;
    };

    window.ontouchmove = function() {
        return false;
    };

    window.onload = function() {
        showModal();
        moveBg();
        typeAndStyle();
    };
})();