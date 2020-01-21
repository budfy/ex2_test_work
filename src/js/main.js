$(function () {

  //------------------------------- language switch -------------------------------
  $(".switch__link").click(function () {
    $('.header__lang-switch').find(".switch__link--current").removeClass("switch__link--current");
    $(this).addClass("switch__link--current");
  });

  $(".js--burger").click(function () {
    $('.js--burger').toggleClass("header__burger-menu--active");
    $('.js--navbar').toggleClass("navbar--active");
  });

  //------------------------------- scroll to section -------------------------------
  $("a[href^='#']").click(function () {
    let target = $(this).attr('href');
    $("html, body").animate({
      scrollTop: $(target).offset().top - 50
    }, {
      easing: "swing",
      duration: 1000
    });
  });

  $("input[type='radio']").click(
    function () {
      let flag = $(this).attr("for");
      let inputValue = $("#" + flag).val();
      if (flag == "user__val-1" || "user__val-2") {
        $('#' + flag).removeAttr('disabled');
      }
      if (inputValue == '') {
        $('#' + flag).removeAttr('disabled');
      }
    });


});