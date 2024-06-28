"use strict";

const controls = document.querySelector("#controls");

const boxes = document.querySelector("#boxes");

const buttonCreate = document.querySelector(".blue");

const buttonDelete = document.querySelector(".red");

const input = document.querySelector(".input");

const box = document.querySelectorAll(".box");

buttonCreate.addEventListener("click", createBoxes);

// buttonCreate.addEventListener("click", handleColor);

buttonCreate.addEventListener("click", clearField);

buttonDelete.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = input.value;

  // const box = `<div class="box"></div>`;

  if (amount > 0 && amount <= 100) {
    boxes.classList.add("boxes");
    for (let i = 0; i < amount; i += 1) {
      // boxes.innerHTML += box;
      // boxes.classList.add("boxes");

      const box = document.createElement("div");
      box.style.width = `30 + ${i * 10}px`;
      box.style.height = `30 + ${i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();

      boxes.appendChild(box);
    }
  }
}

function clearField() {
  input.value = "";
}

function destroyBoxes() {
  boxes.innerHTML = "";
  boxes.classList.remove("boxes");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// function handleColor() {
//   for (let b of box) {
//     let color = getRandomHexColor();
//     b.style.backgroundColor = color;
//   }
// }
