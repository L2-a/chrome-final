const API_KEY = "ced15d0b18672e1d0df1651998a9ac54";

function getConditionIcon(condition) {
  switch (condition) {
    case "Thunderstorm":
      return "đŠī¸";
      break;
    case "Drizzle":
      return "đĻī¸";
      break;
    case "Rain":
      return "â";
      break;
    case "Snow":
      return "đ¨ī¸";
      break;
    case "Atmosphere":
      return "đ";
      break;
    case "Clear":
      return "âī¸";
      break;
    case "Clouds":
      return "âī¸";
      break;
  }
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = ` ${data.main.temp}â      ${
        data.weather[0].main
      } ${getConditionIcon(`${data.weather[0].main}`)}`;
    });
}

function onGeoError() {
  alert("We Can't find Your location. ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
