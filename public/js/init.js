(function ($) {

    $(document).ready(function () {
        $(".button-collapse").sideNav();
    });

    $('.parallax').parallax();

    $('input.autocomplete').autocomplete({
        data: {
            "One": null,
            "Two": null,
            "Three": null
        },
        limit: 5,
        onAutocomplete: function (val) {},
        minLength: 1
    });

})(jQuery);
