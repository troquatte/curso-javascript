"use strict";

const container = document.querySelector(".container");

container.append("<p>Olá Dener</p>");

const newDiv = document.createElement("div");
newDiv.innerText = "Olá Dener";

container.appendChild(newDiv);
