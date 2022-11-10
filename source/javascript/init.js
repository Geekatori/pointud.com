(function () {
    'use strict';

    $('section').each(function () {
        $('[data-type="clearance"]').each(function () {
            clearanceValidity($(this));
            const valveType = $(this).attr('data-valve');
            shimSuggestion($('[data-type="measured"][data-valve=' + valveType + ']'));
        });

        $('[data-type="clearance"]').on('input', function () {
            clearanceValidity($(this));
            const valveType = $(this).attr('data-valve');
            shimSuggestion($('[data-type="measured"][data-valve=' + valveType + ']'));
        });

        $('[data-type="measured"]').on('input', function () {
            shimSuggestion($(this));
            // clearanceValidity($('[data-type="clearance"][data-valve=' + valveType + ']'));
        });
    });

    function clearanceValidity(el) {
        const current = el.val();
        const min = el.attr('data-min');
        const max = el.attr('data-max');

        // console.log(current);

        if (current < min || current > max) {
            el.removeClass('bg-success');
            el.addClass('bg-danger');
        } else {
            el.removeClass('bg-danger');
            el.addClass('bg-success');
        }
    }

    function shimSuggestion(el) {
        const currentShim = el.val();
        const valveType = el.attr('data-valve');
        const clearanceMin = $('[data-type="clearance"][data-valve=' + valveType + ']').attr('data-min');
        const clearanceMax = $('[data-type="clearance"][data-valve=' + valveType + ']').attr('data-max');
        const clearanceMeasured = $('[data-type="clearance"][data-valve=' + valveType + ']').val();
        const suggested = $('[data-type="suggested"][data-valve=' + valveType + ']');

        const shimSuggested = parseFloat(currentShim) + parseFloat(clearanceMeasured) - (parseFloat(clearanceMin) + parseFloat(clearanceMax)) / 2;

        if (!isNaN(shimSuggested)) {
            suggested.val(Math.round((shimSuggested + Number.EPSILON) * 1000) / 1000);
        }
    }
})();
