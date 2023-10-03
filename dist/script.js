$(function () {
  $(".error").hide();
  $(".weather").hide();
  $(".weather *").hide();
  $(".error *").fadeToggle();
  $(".search").animate({ width: "80vw" }, 500);
  $(".search input").animate({ opacity: 1 }, 500);
  $("input").keypress(function (e) {
    const enter = e.keyCode ? e.keyCode : e.which;
    if (enter == "13" && this.value == "weather") {
      $(".weather *").fadeToggle(1000);
      $(".weather").slideToggle();
    } else if (enter == "13" && this.value == "error") {
      $(".error *").fadeToggle(1000);
      $(".error").slideToggle();
    }
  });
});
