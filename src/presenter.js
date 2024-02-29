import calcularprecio from "./calcular.js";

const first = document.querySelector("#cantidad-items");
const second = document.querySelector("#precio-items");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p> EL precio neto es: " +calcularprecio(firstNumber, secondNumber, "") + "</p>";
});
