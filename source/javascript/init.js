/* global FloatLabels */
(function() {

    window.onload = function() {
        // Remove "loading" class once the page has fully loaded.
        document.body.className = '';
        showModal();
        moveBg();
    }

    // Prevent scrolling on touch.
    window.ontouchmove = function() {
        return false;
    }

    // Fix scroll position on orientation change.
    window.onorientationchange = function() {
        document.body.scrollTop = 0;
    }

    // Let's have a beer!
    console.log('Sinon, on peut aussi discuter autour d\'un 🍵 ou d\'une 🍺 !');

    // Floating labels
    var floatlabels = new FloatLabels( 'form', {
        style: 2
    });

    // Show modal
    function showModal() {
        var showFrm  = document.getElementById('showForm');
        var showAbt  = document.getElementById('showAbout');
        var closeBtn = document.getElementsByClassName('close');

        var visibleContactClass = 'visible-contact';
        var visibleAboutClass   = 'visible-about';

        showFrm.addEventListener('click', function(e){
            e.preventDefault();
            document.body.classList.add(visibleContactClass);
        });

        showAbt.addEventListener('click', function(e){
            e.preventDefault();
            document.body.classList.add(visibleAboutClass);
        });

        Array.from(closeBtn).forEach(function(e){
            e.addEventListener('click', function(e){
                e.preventDefault();
                document.body.classList.remove(visibleContactClass, visibleAboutClass);
            });
        })

        document.onkeydown = function(e) {
            e = e || window.event;
            var isEscape = false;
            if ('key' in e) {
                isEscape = (e.key == 'Escape' || e.key == 'Esc');
            } else {
                isEscape = (e.keyCode == 27);
            }
            if (isEscape) {
                document.body.classList.remove(visibleContactClass, visibleAboutClass);
            }
        }
    }

    // Move background
    function moveBg() {
        var movementStrength = 25;
        var height = movementStrength / window.innerHeight;
        var width = movementStrength / window.innerWidth;
        var backgroundImage = document.querySelector('.bg img');

        document.body.mousemove = function(){
            var pageX = e.pageX - (width / 2);
            var pageY = e.pageY - (height / 2);
            var newvalueX = width * pageX * -1 - 25;
            var newvalueY = height * pageY * -1 - 50;
            backgroundImage.style.transform = 'transform(" newvalueX + "px, " + newvalueY + "px, 0)';
        }
    }
})();