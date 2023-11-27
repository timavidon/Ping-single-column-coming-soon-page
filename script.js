const form = document.querySelector("form");
const submitBtn = document.querySelector(".button");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let email = emailInput.innerHTML;
  if (!validateEmail(email)) {
    emailInput.classList.toggle("error");
    errorMessage.classList.toggle("hidden");
  }
});

const validateEmail = (email) => {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailPattern.test(email);
};
