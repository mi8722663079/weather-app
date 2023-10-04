const search = document.querySelector("input");
const image = document.querySelector(".status img");
const main = document.querySelector(".main");
const background = getComputedStyle(main);

async function getWeather(city) {
  try {
    const weather = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=66XZLFZ7AYETUWM59UFL4TRCF&contentType=json`
    );
    const response = await weather.json();
    $(".weather *").fadeToggle();
    $(".weather").slideToggle();
    return response;
  } catch {
    $(".error *").fadeToggle();
    $(".error").slideToggle();
  }
}
$(function () {
  $(".error").hide();
  $(".weather").hide();
  $(".weather *").hide();
  $(".error *").hide();
  $(".search").animate({ width: "80vw" }, 500);
  $(".search input").animate({ opacity: 1 }, 500);
  $("input").keypress(function (e) {
    const enter = e.keyCode ? e.keyCode : e.which;

    if (enter == "13") {
      let conditions = getWeather(this.value).then((r) => {
        image.setAttribute("src", `icons/${r.days[0].icon}.svg`);
        $(".weather h1").text(r.resolvedAddress.split(",")[0]);
        $(".weather h2").text(r.currentConditions.conditions);
        $(".weather h3").text(`${r.currentConditions.temp}°`);
        $(".status p").text(
          `L: ${r.days[0].tempmin}°   H: ${r.days[0].tempmax}°`
        );
        $(".wind p").text(`wind speed: ${r.currentConditions.windspeed} m/s`);
        $(".Temp p").text(`Avg Temp: ${r.days[0].temp}°`);
        $(".vis p").text(`Avg visibility: ${r.days[0].visibility} km`);
        $(".hum p").text(`Avg humidity: ${r.days[0].humidity}%`);
        if ($(".weather h2").text().includes("Partially cloudy")) {
          $(".main").css(
            "background",
            "url(https://images.pexels.com/photos/391522/pexels-photo-391522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
          );
        } else if ($(".weather h2").text().includes("Clear")) {
          $(".main").css(
            "background",
            "url(https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
          );
        } else if ($(".weather h2").text().includes("Rain")) {
          $(".main").css(
            "background",
            "url(https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
          );
        } else if ($(".weather h2").text().includes("Snow")) {
          $(".main").css(
            "background",
            "url(https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
          );
        } else if ($(".weather h2").text().includes("Cloudy")) {
          $(".main").css(
            "background",
            "url(https://images.pexels.com/photos/3888585/pexels-photo-3888585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
          );
        }
      });
    }
  });
  $("input").on("input", () => {
    $(".error *").fadeOut();
    $(".error").slideUp();
    $(".weather *").fadeOut();
    $(".weather").slideUp();
  });
});
