$(function () {
  $(".switch__link").click(function () {
   $('.header__lang-switch').find(".switch__link--current").removeClass("switch__link--current");
   $(this).addClass("switch__link--current");
  });
});