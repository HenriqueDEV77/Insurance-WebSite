const images = document.querySelectorAll('.selecionar .navio')
let currentIndex = 0;

function changeImage(direction) {
    console.log("Changing image:", direction);
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].classList.add('active');
    console.log("Current index:", currentIndex);
}
