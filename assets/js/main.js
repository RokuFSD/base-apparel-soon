const input = document.getElementById("email");
const errorText = document.querySelector(".error-text");
const errorImg = document.querySelector(".error-icon");

const validateEmail = () => {
  if (!input.validity.valid) {
    errorText.innerHTML = "Please provide a valid email";
    errorImg.style.display = "block";
    input.classList.add("error");
  } else {
    errorImg.style.display = "none";
    errorText.innerHTML = "";
    input.classList.remove("error");
  }
};
