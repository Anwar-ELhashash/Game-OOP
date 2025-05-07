"use strict";
// Importing
import { getApi } from "./ui.js";
import { homeSection, homeRowCards, categories } from "./home.js";
import { details, exitIcon } from "./details.js";

// ================== Global variables ==================
let category;

// ================== Create Instance From Api Constructor For Each Category ==================
const mmorpg = new getApi(
  "https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg"
);
const shooter = new getApi(
  "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter"
);
const sailing = new getApi(
  "https://free-to-play-games-database.p.rapidapi.com/api/games?category=sailing"
);
const permadeath = new getApi(
  "https://free-to-play-games-database.p.rapidapi.com/api/games?category=permadeath"
);
const superhero = new getApi(
  "https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero"
);
const pixel = new getApi(
  "https://free-to-play-games-database.p.rapidapi.com/api/games?category=pixel"
);

// ================== Events ==================

//        ***** Open mmorpg category When Program Start *****
(() => {
  mmorpg.getGames();
  category = mmorpg;
})();

//               ********** Choose category **********
categories.addEventListener("click", (e) => {
  if (e.target === categories.children[0].firstElementChild) {
    mmorpg.getGames();
    category = mmorpg;
  } else if (e.target === categories.children[1].firstElementChild) {
    shooter.getGames();
    category = shooter;
  } else if (e.target === categories.children[2].firstElementChild) {
    sailing.getGames();
    category = sailing;
  } else if (e.target === categories.children[3].firstElementChild) {
    permadeath.getGames();
    category = permadeath;
  } else if (e.target === categories.children[4].firstElementChild) {
    superhero.getGames();
    category = superhero;
  } else if (e.target === categories.children[5].firstElementChild) {
    pixel.getGames();
    category = pixel;
  }
});

//     ********** Show The Details Of Each Item In category **********
homeRowCards.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) {
    const id = card.getAttribute("data-id");
    category.getDetails(id);
  }
});

//     ********** Close Details Section **********
exitIcon.addEventListener("click", () => {
  homeSection.classList.toggle("d-none");
  details.classList.toggle("d-none");
});

//     ********** Loop Throw Nav Item To Add Active Class To Current Item **********
Array.from(categories.children).forEach(function (ele) {
  ele.children[0].addEventListener("click", (e) => {
    Array.from(categories.children).forEach((ele) => {
      ele.children[0].classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
