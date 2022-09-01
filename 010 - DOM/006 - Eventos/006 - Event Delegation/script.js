"use strict";

const menu = document.querySelector("#menu");

menu.addEventListener("click", (event) => {
  const { target } = event;
  const body = document.querySelector("body");

  switch (target.getAttribute("class")) {
    case "home":
      body.style.background = "blue";
      break;

    case "sobre":
      body.style.background = "red";
      break;

    case "contato":
      body.style.background = "#fff";
      break;
  }
});
