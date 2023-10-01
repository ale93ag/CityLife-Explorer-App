// domManipulation.js

import { formatCityName } from "./formatCityName.js";
import { getData, handleDataError } from "./fetch.js"; // Importa la nuova funzione handleDataError
import { showLoadingIndicator, hideLoadingIndicator } from "./loading.js";

let city = "";

const summary = document.querySelector(".summary");
const category = document.querySelector(".category");
const input = document.querySelector("input");
const score = document.querySelector(".score");
const nameScore = document.querySelector(".nameScore");
const btn = document.querySelector("button");
const main = document.querySelector("main");

let clearCard = function () {
  category.innerHTML = "";
  nameScore.innerHTML = "";
  score.innerHTML = "";
  score.classList.remove("pulse");
};

btn.addEventListener("click", async function () {
  city = formatCityName(input.value);

  if (!input.value) {
    // Utilizza la nuova funzione handleDataError per gestire l'errore
    handleDataError(summary, "<h3>SCRIVI UNA CITTA'</h3>");
    clearCard();
    return; // Interrompi l'esecuzione se non c'è un input valido
  }

  showLoadingIndicator();

  const dataScore = await getData(city);

  hideLoadingIndicator();

  if (dataScore.error) {
    // Utilizza la nuova funzione handleDataError per gestire l'errore
    handleDataError(summary, dataScore.error);
    clearCard();
  } else {
    summary.innerHTML = `<h2><p>${dataScore.summary}</p></h2>`;
    category.innerHTML = "";
    nameScore.innerHTML = "CITY SCORE";
    score.innerHTML = dataScore.teleport_city_score.toFixed(2);
    score.classList.add("pulse");

    dataScore.categories.forEach((x) => {
      category.insertAdjacentHTML(
        "afterbegin",
        `<h3><span class="name">${x.name}</span> <span class="scores">${x.score_out_of_10.toFixed(
          1
        )}</span></h3>`
      );

      const containerAllElement = document.createElement("div");
      containerAllElement.classList.add("containerAllElement");
      const divScore = document.createElement("div");
      divScore.classList.add("divScore");
      divScore.appendChild(nameScore);
      divScore.appendChild(score);
      const descriptionElement = document.createElement("div");
      descriptionElement.classList.add("descriptionElement");
      descriptionElement.appendChild(summary);
      descriptionElement.appendChild(category);

      containerAllElement.appendChild(descriptionElement);
      containerAllElement.appendChild(divScore);

      main.appendChild(containerAllElement);
    });
  }
});









  


