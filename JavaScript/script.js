// Définir l'index de l'image actuelle
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image'); // Récupère toutes les images
const totalImages = images.length;

// Fonction pour afficher l'image à l'index courant
function showImage(index) {
    // S'assurer que l'index est dans les limites
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }

    // Cacher toutes les images
    images.forEach((image, i) => {
        image.style.display = 'none'; // Cache toutes les images
    });

    // Afficher l'image à l'index courant
    images[currentIndex].style.display = 'block';
}

// Fonction pour passer à l'image suivante
document.querySelector('.next').addEventListener('click', () => {
    showImage(currentIndex + 1);
});

// Fonction pour revenir à l'image précédente
document.querySelector('.prev').addEventListener('click', () => {
    showImage(currentIndex - 1);
});

// Initialiser le carrousel (afficher la première image)
showImage(currentIndex);
