"use strict";

const form = document.forms.namedItem("select-checkbox");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

let checkedValues = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  submit.innerHTML = checkedValues;
});

form.checkbox.forEach((element) => {
  element.addEventListener("change", (event) => {
    hasChecked(event, element);
    change.innerHTML = checkedValues;
  });
});

const hasChecked = (event, element) => {
  const { target } = event;

  if (target.checked) {
    return checkedValues.push(element.value);
  }

  if (!target.checked) {
    return checkedValues.map((checkdValue, index) => {
      if (element.value === checkdValue) {
        return checkedValues.splice(index, 1);
      }
    });
  }
};
