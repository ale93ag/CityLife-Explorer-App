import { formatCityName } from "./formatCityName.js";
import { getData } from "./fetchData.js"; // Importa la funzione getData dal modulo fetchData.js

let city = "";

// Dichiarazione delle variabili
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
  score.classList.remove("pulse"); // Rimuovi la classe 'pulse' per interrompere l'animazione
};

// Funzioni per controllare gli errori
const errorCatching = (summary, warningMessage) => {
  summary.innerHTML = `<p>${warningMessage}</p>`;
  return warningMessage;
};

const errorVoid = () => {
  if (!input.value) {
    errorCatching(
      summary,
      `<h1>SCRIVI UNA CITTA'</h1>`
    );
    clearCard();
  }
};

btn.addEventListener("click", async function () {
  city = formatCityName(input.value);
  errorVoid(input);

  // Utilizza la funzione importata getData dal modulo fetchData.js
  const dataScore = await getData(city);

  // Gestisci i dati ottenuti
  if (dataScore) {
    // Mostra i dati
    summary.innerHTML = `<h2><p>${dataScore.summary}</p></h2>`;
    category.innerHTML = "";
    nameScore.innerHTML = "CITY SCORE";
    score.innerHTML = dataScore.teleport_city_score.toFixed(2);
    score.classList.add("pulse"); // Aggiungi la classe 'pulse' per l'animazione

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
  } else {
    errorCatching(
      summary,
      `<h3>Città non trovata. Controlla eventuali errori di battitura. <br> Ricorda di scrivere il nome della città in inglese.<br>  Se nessuno di questi problemi è presente, forse la città non è presente nel nostro database..<h3>`
    );
    clearCard();
  }
});







  


