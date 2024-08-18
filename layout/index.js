function changeName() {
  const element = document.getElementById("title");
  element.innerHTML = "New title!";
}

window.onload = function () {
  document.getElementById("button").focus();
};
