const h = document.getElementById("hour");
const m = document.getElementById("min");
const s = document.getElementById("sec");
const cdn = document.querySelector(".dn");

function currentTime() {
  let hours = new Date().getHours();
  let mins = new Date().getMinutes();
  let secs = new Date().getSeconds();
  let dn = "AM";
  if (hours > 12) {
    hours = hours - 12;
    dn = "PM";
  }
  h.innerText = hours;
  m.innerText = mins;
  s.innerText = secs;
  cdn.innerText = dn;

  setTimeout(() => {
    currentTime();
  }, 1000);
}

currentTime();
