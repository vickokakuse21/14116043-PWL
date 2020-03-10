function startTime() {
  var today = new Date();
  var jam = today.getHours();
  body = document.getElementsByTagName("body")[0]
  if (jam >= 22) {
    body.classList.add("dark-mode")
  } else {
    body.classList.remove("dark-mode")
  }
}
startTime();