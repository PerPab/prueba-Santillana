import { elementos } from './lista.js'



let carta = document.getElementById('carta');
let btn = document.getElementById('btn-girar');

function obtenerNumeroAleatorio() {
    return Math.floor(Math.random() * 5);
}

function animar() {
    carta.classList.add('animate__animated', 'animate__flip', 'animate__repeat-1')
}


function comienzo() {
    carta.innerHTML = '';
    let numeroAleatorio = obtenerNumeroAleatorio();
    carta.classList.add('animate__animated', 'animate__flip')
    carta.addEventListener('animationend', () => {
        carta.classList.remove('animate__animated', 'animate__flip')
        carta.innerHTML = `<img id='img' class='imagen' src="./img/img-${elementos[numeroAleatorio]}.PNG">`
    })
    carta.addEventListener('animationend', () => {
        carta.classList.add('animate__animated', 'animate__tada')
        document.getElementById('tada').play();
    })

}

btn.addEventListener('click', comienzo)











