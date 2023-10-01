// domManipulation.js

import { formatCityName } from "./formatCityName.js";
import { fetchData, handleDataError } from "./fetch.js";
import { showLoadingIndicator, hideLoadingIndicator } from "./loading.js";

let city = "";
const summary = document.querySelector(".summary");
const category = document.querySelector(".category");
const input = document.querySelector("input");
const score = document.querySelector(".score");
const nameScore = document.querySelector(".nameScore");
const btn = document.querySelector("button");
const main = document.querySelector("main");

const clearCard = () => {
  category.innerHTML = "";
  nameScore.innerHTML = "";
  score.innerHTML = "";
  score.classList.remove("pulse");
};

const displayCityInfo = (dataScore) => {
  summary.innerHTML = `<h2><p>${dataScore.summary}</p></h2>`;
  category.innerHTML = "";
  nameScore.innerHTML = "CITY SCORE";
  score.innerHTML = dataScore.teleport_city_score.toFixed(2);
  score.classList.add("pulse");

  dataScore.categories.forEach((x) => {
    category.insertAdjacentHTML(
      "afterbegin",
      `<h3><span class="name">${x.name}</span> <span class="scores">${x.score_out_of_10.toFixed(1)}</span></h3>`
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
};

const handleInputAndSubmit = async () => {
  city = formatCityName(input.value);

  if (!city) {
    handleDataError(summary, "<h3>SCRIVI UNA CITTA'</h3>");
    clearCard();
    return;
  }

  showLoadingIndicator();

  const dataScore = await fetchData(city);

  hideLoadingIndicator();

  if (dataScore.error) {
    handleDataError(summary, dataScore.error);
    clearCard();
  } else {
    displayCityInfo(dataScore);
  }
};

btn.addEventListener("click", handleInputAndSubmit);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleInputAndSubmit();
  }
});












  


