document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("¡Bienvenido a CA Performance! Vamos a entrenar.");
    });
  });
});
