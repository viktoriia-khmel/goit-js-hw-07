"use strict";

const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

input.addEventListener("input", inputHandler);

function inputHandler() {
  if (input.value.trim().length === 0) {
    output.textContent = "Anonymous";
  } else {
    output.textContent = input.value.trim();
  }
}
