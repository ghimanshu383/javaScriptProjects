"use strict";
const form = document.querySelector(".client-form");
const passwordEl1 = document.getElementById("password");
const passwordEl2 = document.getElementById("confirmPassword");

let isvalid = false;
let passwordMatch = false;

const validate = () => {
  isvalid = form.checkValidity();
  if (passwordEl1.value === passwordEl2.value) {
    passwordEl2.style.outline = "solid 1px green";
    passwordMatch = true;
  } else {
    passwordEl2.style.outline = "solid 1px red";
    alert("make sure that the passwords match");
  }
  console.log(isvalid);
  console.log(passwordMatch);
};

const storeData = () => {
  if (isvalid && passwordMatch) {
    const userData = {
      name: { firstName: form.firstname.value, lastName: form.lastname.value },
      email: form.email.value,
      phone: form.phone.value,
      password: form.password.value,
    };
    console.log(userData);
  }
};
const processForm = (e) => {
  e.preventDefault();
  validate();
  storeData();
};

form.addEventListener("submit", processForm);
