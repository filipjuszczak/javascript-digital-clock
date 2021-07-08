const hourSpan = document.querySelector(".hour-span");
const minuteSpan = document.querySelector(".minute-span");
const secondSpan = document.querySelector(".second-span");

const updateClock = () => {
  const currentTime = new Date();
  const hour = currentTime.getHours() < 10 ? "0" + currentTime.getHours() : currentTime.getHours();
  const minute = currentTime.getMinutes() < 10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes();
  const second = currentTime.getSeconds() < 10 ? "0" + currentTime.getSeconds() : currentTime.getSeconds();

  hourSpan.textContent = hour;
  minuteSpan.textContent = minute;
  secondSpan.textContent = second;
};

window.onload = setInterval(updateClock, 1000);
