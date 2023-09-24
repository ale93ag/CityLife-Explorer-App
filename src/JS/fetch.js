
import { formatCityName } from "./formatCityName.js"

let city = "";

// ******DECLARATION VARIABLE********

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
};

  //  ******* FETCH API ********


const getData = async function () {
    const getScore = await fetch(
      `https://api.teleport.org/api/urban_areas/slug:${city}/scores/`
    );
  
    const dataScore = await getScore.json();
  

      // ***** DOM MANIPULATION ******

  if (getScore.status != 404) {
    summary.innerHTML = `<h2><p>${dataScore.summary}</p><h2>`;
    category.innerHTML = "";
    nameScore.innerHTML = "CITY SCORE";
    score.innerHTML = dataScore.teleport_city_score.toFixed(2);
    dataScore.categories.forEach((x) => {
      category.insertAdjacentHTML(
        "afterbegin",
        `<h3>${x.name}<br> ${x.score_out_of_10.toFixed(1)}<br><h3>`
      );


      const containerAllElement = document.createElement("div");
      containerAllElement.classList.add("containerAllElement")
      const divScore = document.createElement("div");
      divScore.classList.add("divScore")
      divScore.appendChild(nameScore);
      divScore.appendChild(score);
      const descriptionElement = document.createElement("div");
      descriptionElement.classList.add("descriptionElement")
      descriptionElement.appendChild(summary);
      descriptionElement.appendChild(category);
      
      containerAllElement.appendChild(descriptionElement);
      containerAllElement.appendChild(divScore);
      



      main.appendChild(containerAllElement)

    });
    
  } else {
    errorCatching(summary,
      `<h3>Città non trovata. Controlla eventuali errori di battitura. <br> Ricorda di scrivere il nome della città in inglese.<br>  Se nessuno di questi problemi è presente, forse la città non è presente nel nostro database..<h3>`
    );
    clearCard();
  }
};

// Funzioni per controllare gli errori*****
const errorCatching = (summary, warningMessage) => {
  summary.innerHTML = `<p>${warningMessage}</p>`;
  return warningMessage;
};

const errorVoid = () => {
  if (!input.value) {
    errorCatching(summary, `<h1>SCRIVI UNA CITTA'<h1>`);
    clearCard();
  }
};


btn.addEventListener("click", function () {
  city = formatCityName(input.value);
  errorVoid(input);
  getData();
 
});



  // TODO: 
  // modificare design
  // 
  

