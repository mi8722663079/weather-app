$(function () {
  $(".error").hide();
  $(".weather").hide();
  $(".weather *").hide();
  $(".error *").fadeToggle();
});
$("input").on("click", () => {
  $(".weather").slideToggle();
  $(".weather *").fadeToggle();
});
$("input").on("input", () => {
  $(".error").slideToggle();
  $(".error *").fadeToggle();
});
