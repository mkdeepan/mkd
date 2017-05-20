(function ($) {
    $.create = function (tag, id) {
        elm = document.createElement(tag.toUpperCase());
        if (typeof (id) != "undefined") elm.id = id;
        return $(elm);
    }; // $.create()
}(jQuery));