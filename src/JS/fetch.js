// fetch.js

// Funzione per gestire la connessione con il backend e ottenere i dati
export async function fetchData(city) {
    try {
      const getScore = await fetch(
        `https://api.teleport.org/api/urban_areas/slug:${city}/scores/`
      );
  
      if (!getScore.ok) {
        return { error: "<h3>Città non trovata. Controllare se c'è un errore di battitura. Ricordate che dovete usare i nomi delle città in inglese. Se nessuno di questi problemi è presente, forse la città non è presente nel nostro database.</h3>" };
      }
  
      const dataScore = await getScore.json();
      return dataScore;
    } catch (error) {
      return { error: error.message };
    }
  }
  
  // Funzione per gestire gli errori di dati
  export function handleDataError(summary, errorMessage) {
    summary.innerHTML = `<p>${errorMessage}</p>`;
  }
  
  
  
  
  