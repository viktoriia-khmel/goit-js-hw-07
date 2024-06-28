"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;

  const password = event.target.elements.password.value;

  const userSubmitted = {};

  if (email.length === 0 || password.length === 0) {
    alert("All form fields must be filled in");
    return;
  } else
    (userSubmitted.email = email.trim()),
      (userSubmitted.password = password.trim()),
      console.log(userSubmitted);
  form.reset();
}
