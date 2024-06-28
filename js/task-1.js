"use strict";

const categoriesAmount = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesAmount.length);

const headings = document.querySelectorAll(".category-name");

const itemsAmount = document.querySelectorAll(".elements-list");

categoriesAmount.forEach((item) => {
  const heading = item.querySelector(".category-name");
  const itemsAmount = item.querySelectorAll(".element");
  console.log("Category: ", heading.textContent);
  console.log("Elements: ", itemsAmount.length);
});
