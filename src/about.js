import about from "./about.png";
import { clean } from "./index.js";

export function aboutP(){
   clean()
    const container = document.createElement("div");
    container.innerHTML= "<h3>About Us</h3>";
    container.classList = "card";
    
    const aboutImg = document.createElement("img");
    aboutImg.src = about ;
    container.appendChild(aboutImg);
    content.appendChild(container);
    
}