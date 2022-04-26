
$(function() {
    $("#info-button").on("click", function() {
        $("#information-container").removeClass("hidden");
    });

    $("#back-button").on("click", function() {
        $("#information-container").addClass("hidden");
    });
});