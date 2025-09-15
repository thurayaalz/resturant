import shrimp from "./shrimp1.png";
import fish from "./fish1.png";
import sides from "./sides.png";

//fish
const fishDish = document.createElement("div");
fishDish.classList = "card";
fishDish.innerHTML =
"<h3 class='dish1'>Fish Dishes</h3><h5>Soy sauce, Honey, peanut butter, seseme oil</h5>";
const fish1 = document.createElement("img");
fish1.src = fish;
fishDish.appendChild(fish1);

//sides
const sidesDish = document.createElement("div");
sidesDish.classList = "card";
sidesDish.innerHTML = "<h3>Sides</h3><h5>Salad, jalapino, bread</h5>";
const sideimg = document.createElement("img");
sideimg.src = sides ;
sidesDish.appendChild(sideimg);

// shrimp
const dish1 = document.createElement("img");
dish1.src = shrimp;
dish1.classList = "dish1";

const shrimpDish = document.createElement("div");
shrimpDish.classList = "card";
shrimpDish.innerHTML = "<h3>Fried Shrimp</h3><h5>Honey, black garlic, lemon</h5>";
shrimpDish.appendChild(dish1);

//design
const cardHolder = document.createElement("div");
cardHolder.classList = "cardHolder";
cardHolder.append(shrimpDish, fishDish, sidesDish);
const contentErea = document.querySelector("#content");
contentErea.appendChild(cardHolder);

//background
const backG = document.createElement("img");
backG.src = shrimp;
backG.classList = "backimg";
contentErea.appendChild(backG);
