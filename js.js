"use strict";
const btn = document.querySelector(".btn-nav");
const btnChange = document.querySelector(".btn-nav-ru");

btn.addEventListener("click", changeLanguage);
function changeLanguage() {
  if (btnChange.classList.contains("hide")) {
    btn.classList.add("hide");
    btnChange.classList.remove("hide");
  }
  else{
    btn.classList.remove("hide");
    btnChange.classList.add("hide");
  }
}
btnChange.addEventListener("click", changeLanguage);


