/* A small script that keeps the current year up to date */

$(document).ready(function() {
    var currentYear = new Date().getFullYear();
    $(".current-year").text(currentYear)
});