import Pristine from "pristinejs";
import { calculatePremium } from "./calculation";
import { getAge } from "./date";
import { render as renderResultPage } from "./result";
import { toggleResultPage } from "./utilities";
import { createCustomValidation } from "./validations";

const selectors = {
  widget: ".js-widget",
  userInput: ".js-user-input",
  result: ".js-result",
  form: ".js-form",
  occupation: ".js-occupation-select",
  dob: ".js-dob-input",
  income: ".js-income-input",
};

let pristine = undefined;

/**
 * Validate the form on submit
 * @param {*} e
 * @returns
 */
const validateForm = (e) => {
  e.preventDefault();

  // check if the form is valid
  var isValid = pristine.validate();

  if (!isValid) {
    console.log(pristine.getErrors());

    return;
  }

  const occupationEl = document.querySelector(selectors.occupation);
  const dobEl = document.querySelector(selectors.dob);
  const incomeEl = document.querySelector(selectors.income);

  const formData = {
    occupation: occupationEl.value,
    birthdate: dobEl.value,
    age: getAge(dobEl.value),
    yearlyIncome: incomeEl.value,
  };

  renderResultPage(formData);
  toggleResultPage();
};

/**
 * Bind submit to the form
 * @param {*} form
 */
const bindings = (form) => {
  form.addEventListener("submit", validateForm);
};

/**
 * Initialize the widget
 */
const init = () => {
  const form = document.querySelector(selectors.form);
  createCustomValidation(Pristine);
  pristine = new Pristine(form, {
    // class of the parent element where the error/success class is added
    classTo: "widget-fieldset",
    errorClass: "has-error",
    successClass: "has-success",
    // class of the parent element where error text element is appended
    errorTextParent: "js-errors",
    // type of element to create for the error text
    errorTextTag: "div",
    // class of the error text element
    errorTextClass: "error",
  });

  bindings(form);
};

init();
