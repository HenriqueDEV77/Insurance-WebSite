
let currentIndex = 0;
const images = document.querySelectorAll('.navio');

function changeImage(n) {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + n + images.length) % images.length;
    images[currentIndex].classList.add('active');
}

document.querySelector('.bx-menu').addEventListener('click', function() {
    const nav = document.querySelector('.navegação');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
});

