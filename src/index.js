import "./style.css";
import "./cards.js";
import { aboutP } from "./about.js";
import {home} from "./cards.js";
home()
const homeBtn = document.querySelector(".homeBtn").addEventListener("click" , ()=>{
//got to home page
console.log("does this work?");
home()
});

const menuBtn = document.querySelector(".menuBtn").addEventListener("click" , ()=>{
    // go to menu
    console.log("does this work?");

});

const aboutBtn = document.querySelector(".aboutBtn").addEventListener("click" , ()=>{
    // go to about us
    console.log("does this work?");
    aboutP();
});
const contactBtn = document.querySelector(".contactBtn").addEventListener("click" , ()=>{
    // go to about us
    console.log("does this work?");

});