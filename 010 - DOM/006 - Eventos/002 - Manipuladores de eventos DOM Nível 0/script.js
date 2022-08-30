"use strict";

const btn = document.querySelector("button");

btn.onclick = function alertOne() {
  alert(123);
};

btn.onclick = function alertTwo() {
  alert(456);
};
