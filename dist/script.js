$(function () {
  $(".error").hide();
  $(".weather").hide();
  $(".weather *").hide();
  $(".error *").fadeToggle();

  $(".search").on("click", () => {
    $(".search").animate({ width: "80vw" });
    $(".search input").animate({ opacity: 1 });
  });
  $("input").on("click", () => {
    $(".weather").slideToggle();
    $(".weather *").fadeToggle(1000);
  });
});
