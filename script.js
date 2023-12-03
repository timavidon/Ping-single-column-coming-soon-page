const form = document.querySelector("form");
const submitBtn = document.querySelector(".button");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let email = emailInput.value.trim();
  if (!validateEmail(email)) {
    emailInput.setAttribute("aria-invalid", "true");
  } else {
    emailInput.setAttribute("aria-invalid", "false");
  }
});

const validateEmail = (email) => {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailPattern.test(email);
};
