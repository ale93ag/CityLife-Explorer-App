// loading.js

// All'inizio, nascondi l'indicatore di caricamento
const loadingIndicator = document.getElementById("loading");

export function showLoadingIndicator() {
  loadingIndicator.style.display = "block";
}

export function hideLoadingIndicator() {
  loadingIndicator.style.display = "none";
}
