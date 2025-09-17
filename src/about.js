import about from "./about.png";
import { clean } from "./index.js";

export function aboutP() {
  clean();
  const container = document.createElement("div");
  container.innerHTML =
    "<div><h3>About Us</h3>The sea is our soul.</br> &nbsp;&nbsp; &nbsp;&nbsp;We specialize in shrimp and seafood dishes that celebrate the ocean’s bounty — fresh, flavorful, and unforgettable. From sizzling garlic shrimp to creamy seafood pasta, every plate is crafted with care and a splash of coastal charm.</br></br>&nbsp;&nbsp;&nbsp; &nbsp; Our kitchen is inspired by seaside traditions and bold flavors, bringing you a menu that’s both comforting and adventurous. Whether you're a lifelong seafood lover or just dipping your toes in, we’ve got something to make your taste buds dance.</br>Dive in. The ocean’s calling.</p></div>";
  //container.classList = "card";
  container.id = "ABT";

  const aboutImg = document.createElement("img");
  aboutImg.src = about;
  container.appendChild(aboutImg);
  content.appendChild(container);
}
