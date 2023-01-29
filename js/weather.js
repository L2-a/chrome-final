const API_KEY = "ced15d0b18672e1d0df1651998a9ac54";

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
      weather.innerText = ` ${data.main.temp}℃ ${data.weather[0].main}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you. ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
