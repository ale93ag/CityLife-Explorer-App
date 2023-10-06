// imageData.js

// Rimuovi l'import duplicato di style.css
// import '../CSS/style.css';

// Aggiorna gli import delle immagini utilizzando 'require'
export const carouselInner = document.querySelector('.carousel-inner');
export const images = [
    require('../Img/citta1.jpg'),
    require('../Img/citta2.jpg'),
    // Aggiungi gli altri percorsi delle immagini come sopra
];

export let currentImageIndex = 0;

export function showNextImage() {
    // Rimuove l'immagine attuale dal carosello
    carouselInner.innerHTML = '';

    // Creo un nuovo elemento img e lo aggiungo al carosello
    const image = document.createElement('img');
    image.src = images[currentImageIndex];
    image.alt = 'Città';

    carouselInner.appendChild(image);

    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Eseguo la funzione showNextImage ogni 5 secondi
setInterval(showNextImage, 3500);

// Eseguo la funzione showNextImage una volta all'inizio
showNextImage();






