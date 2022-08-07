$(document).ready(function () {
    $(".content").hide();
    $(".show_hide").on("click", function () {
      $(this).find('.fa-solid').toggleClass('active');
      $(this).next('.content').slideToggle(200);
    });
});

