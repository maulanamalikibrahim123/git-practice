
function openNav() {
  document.getElementById("myNav").style.width = "60%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


setInterval(displayClock, 500);
function displayClock() {
  document.querySelector("#time").innerHTML = new Date().toLocaleTimeString(
    "en-us",
    {hour: "numeric", hour12: "true", minute: "numeric", second: "numeric"}
  )
}
