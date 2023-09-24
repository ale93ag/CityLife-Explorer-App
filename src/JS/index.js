// Aggiungo qui gli URL delle  immagini
const carouselInner = document.querySelector('.carousel-inner');
const images = [
    './src/Img/citta1.jpg',
    './src/Img/citta2.jpg',
    './src/Img/citta3.jpg',
    './src/Img/citta4.jpg',
    './src/Img/citta5.jpg',
    './src/Img/citta6.jpg',
    './src/Img/citta8.jpg',
    './src/Img/citta9.jpg',
    './src/Img/citta10.jpg',
    './src/Img/citta11.jpg'
    
    
];
let currentImageIndex = 0;

function showNextImage() {
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








