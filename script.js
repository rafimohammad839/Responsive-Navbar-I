const hamburger = document.getElementsByClassName('hamburger')[0];
const ulElement = document.querySelector('nav ul');

hamburger.addEventListener('click', function () {
    ulElement.classList.toggle('active');
    hamburger.classList.toggle('active');
})