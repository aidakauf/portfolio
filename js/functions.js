// Initialize jQuery
$(document).ready(function() {

    // If navigation trigger is clicked -> add or remove class nav--active
    $('.navigation_toggle').on('click', function(e) {
        e.preventDefault(); // Link disable
        $(this).parent().toggleClass('open'); // toggle class "open"
    });

});