const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red', 'green', 'white', 'black', 'orange', 'purple', 'pink'];

body.style.background = 'violet';

button.addEventListener('click', evt => {
    body.style.background = color[Math.floor(Math.random() * color.length)];
});

