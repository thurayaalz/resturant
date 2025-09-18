import "./style.css";
import "./cards.js";
import shrimp from "./shrimp1.png";
import { aboutP } from "./about.js";
import { home } from "./cards.js";

home();

const backG = document.createElement("img");
backG.src = shrimp;
backG.classList = "backimg";
const back = document.querySelector("#back");
back.appendChild(backG);

export function clean() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

const homeBtn = document
  .querySelector(".homeBtn")
  .addEventListener("click", () => {
    home();
  });

const menuBtn = document
  .querySelector(".menuBtn")
  .addEventListener("click", () => {
  });

const aboutBtn = document
  .querySelector(".aboutBtn")
  .addEventListener("click", () => {
    aboutP();
  });
const contactBtn = document
  .querySelector(".contactBtn")
  .addEventListener("click", () => {
  });
