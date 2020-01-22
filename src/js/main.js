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

  $('.percentage__custom').click(function () {
    $('.percentage__custom #percentage-4').prop('checked', true);
    $('.percentage__custom #user__val-1').removeAttr('disabled').focus();
  })
  $('.percentage__custom #user__val-1').on('focusin', function () {
    return 0;
  });
  $('.percentage__custom #user__val-1').on('focusout', function () {
    $(this).prop('disabled', true);
  });

  $('.level__custom').click(function () {
    $('.level__custom #level-4').prop('checked', true);
    $('.level__custom #user__val-2').removeAttr('disabled').focus();
  })
  $('.level__custom #user__val-2').on('focusin', function () {
    return 0;
  });
  $('.level__custom #user__val-2').on('focusout', function () {
    $(this).prop('disabled', true);
  });

  $('button[type="submit"]').click(
    function () {
      let percentage = $('input[name="percentage"]:checked').val(),
          percentageUser = $('#user__vaL-1').val(),
          level = $('input[name="level"]:checked').val(),
          levelUser = $('#user__vaL-2').val(),
          email = $('#email').val(),
    
      if (percentage.length <1) {
        alert("select percentage");
      }

      if (level.length <1) {
        alert("select level");
      }

      if (percentage == 4 && percentageUser.length <1) {
        alert("input your percentage or select other");
      }
      if (level == 4 && levelUser.length <1) {
        alert("input your level or select other");
      }
      if (email.length <1) {
        alert("input email");
      }
    }
  )
});