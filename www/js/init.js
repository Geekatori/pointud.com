(function() {

    // Remove "loading" class once the page has fully loaded.
        window.onload = function() {
            document.body.className = '';
            showModal();
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
        console.log('Sinon, on peut aussi discuter autour d\'une 🍺 !');

    // Floating labels
    let floatlabels = new FloatLabels( 'form', {
        style: 2
    });

    // Show modal
    function showModal(){
        let showFrm  = document.getElementById('showForm');
        let showAbt  = document.getElementById('showAbout');
        let closeBtn = document.getElementsByClassName('close');

        let visibleContactClass = 'visible-contact';
        let visibleAboutClass   = 'visible-about';


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
    };
})();