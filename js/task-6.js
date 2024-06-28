"use strict";

const boxes = document.querySelector("#boxes");

const buttonCreate = document.querySelector(".blue");

const buttonDelete = document.querySelector(".red");

const input = document.querySelector(".input");

const box = document.querySelectorAll(".box");

buttonCreate.addEventListener("click", createBoxes);

// buttonCreate.addEventListener("click", clearField);

buttonDelete.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = "";

  amount = input.value;

  if (amount > 0 && amount <= 100) {
    boxes.classList.add("boxes");

    let size = 30;

    const fragment = document.createElement("div");

    fragment.style.display = "flex";
    fragment.style.flexWrap = "wrap";
    fragment.style.gap = "44px";

    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement("div");

      box.style.width = size + "px";
      box.style.height = size + "px";
      size += 10;
      box.style.backgroundColor = getRandomHexColor();

      fragment.append(box);
    }
    boxes.append(fragment);

    input.value = "";
  }
}

// function clearField() {
//   input.value = "";
// }

function destroyBoxes() {
  boxes.innerHTML = "";
  boxes.classList.remove("boxes");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
