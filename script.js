const releaseDate = new Date("2026-10-02T00:00:00");

function pad(value) {
  return String(Math.max(0, value)).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  let diff = releaseDate.getTime() - now.getTime();

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      '<div style="width:100%"><strong style="font-size:18px">EARLY ACCESS IS LIVE</strong></div>';
    return;
  }

  const days = Math.floor(diff / 86400000);
  diff %= 86400000;
  const hours = Math.floor(diff / 3600000);
  diff %= 3600000;
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);
}

function showNotice(event) {
  event.preventDefault();
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 4200);
}

updateCountdown();
setInterval(updateCountdown, 1000);
