/* global FloatLabels ga */
(function() {

    window.onload = function() {
        // Remove "loading" class once the page has fully loaded.
        document.body.className = '';
        showModal();
        downloadResume();
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
    var floatlabels = new FloatLabels( 'form', {
        style: 2
    });

    // Show modal
    function showModal(){
        var showFrm  = document.getElementById('showForm');
        var showAbt  = document.getElementById('showAbout');
        var closeBtn = document.getElementsByClassName('close');

        var visibleContactClass = 'visible-contact';
        var visibleAboutClass   = 'visible-about';

        showFrm.addEventListener('click', function(e){
            e.preventDefault();
            document.body.classList.add(visibleContactClass);
            ga('send', {
              hitType: 'event',
              eventCategory: 'Modal',
              eventAction: 'show',
              eventLabel: 'Show Contact'
            });
        });

        showAbt.addEventListener('click', function(e){
            e.preventDefault();
            document.body.classList.add(visibleAboutClass);
            ga('send', {
              hitType: 'event',
              eventCategory: 'Modal',
              eventAction: 'show',
              eventLabel: 'Show About'
            });
        });

        Array.from(closeBtn).forEach(function(e){
            e.addEventListener('click', function(e){
                e.preventDefault();
                document.body.classList.remove(visibleContactClass, visibleAboutClass);
            });
        })
    }

    // Download Resume GA
    function downloadResume() {
        var dlCvBtn = document.getElementById('download-resume');

        dlCvBtn.addEventListener('click', function(){
            ga('send', {
              hitType: 'event',
              eventCategory: 'Pdf',
              eventAction: 'download',
              eventLabel: 'Download Resume'
            });
        });
    }
})();