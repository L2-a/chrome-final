const clock = document.querySelector("#clock");
const date = document.querySelector("#date");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000);

function getDay() {
  const nowDate = new Date();
  const year = String(nowDate.getFullYear()).padStart(2, "0");
  const month = String(nowDate.getMonth() + 1).padStart(2, "0");
  const day = String(nowDate.getDate()).padStart(2, "0");
  const week = ["SON", "MON", "TUE", "WED", "THU", "FIR", "SAT"];
  const weeks = week[nowDate.getDay()];
  date.innerText = `${year}/ ${month}/ ${day} ${weeks}`;
}

getDay();
setInterval(getDay, 1000);
