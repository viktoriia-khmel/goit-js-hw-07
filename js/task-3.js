"use strict";

class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    let str1 = `${this.#value}+${str}`;
    this.#value = str1.split("+").join("");
  }

  padStart(str) {
    let str2 = `${str}+${this.#value}`;
    this.#value = str2.split("+").join("");
  }

  padBoth(str) {
    let str3 = `${str}+${this.#value}+${str}`;
    this.#value = str3.split("+").join("");
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
