// Recupero elementos del DOM
var tarjetaJugador = document.getElementById("tarPlayer");
var tarjetaCPU = document.getElementById("tarCpu");

var inicioBombo = document.getElementById("inicio");
var numeroBombo = document.getElementById("numBombo");
var win = document.getElementById("winner");

var numeroSacado = document.getElementById("numSacado");

// Variables para el juego
var numerosBombo = [];
var numerosJugador = [];
var numerosCPU = [];
var numeroActual, contadorJugador, contadorCPU;




// Funciones del juego
function numerosRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generaNumerosJugador() {
  let numeroAleatorio;
  let id = setInterval(() => {

    numeroAleatorio = numerosRandom(1, 90);

    if (numerosJugador.length < 15) {
      if (!(numerosJugador.includes(numeroAleatorio))) {
        numerosJugador.push(numeroAleatorio);
      }
    } else {
      clearInterval(id);
      numerosJugador.forEach(element => tarjetaJugador.innerHTML += `<p class="numeros numerosTarjetaJugador">${element}</p>`);
    }
  }, 1);
}

function generaNumerosCPU() {
  let numeroAleatorio;
  let id = setInterval(() => {

    numeroAleatorio = numerosRandom(1, 90);

    if (numerosCPU.length < 15) {
      if (!(numerosCPU.includes(numeroAleatorio))) {
        numerosCPU.push(numeroAleatorio);
      }
    } else {
      clearInterval(id);
      numerosCPU.forEach(element => tarjetaCPU.innerHTML += `<p class="numeros numerosTarjetaCPU">${element}</p>`);
    }
  }, 1);
}

function verificaEnTarjetas(numeroActual) {
  let numerosTarjetaJugador = document.querySelectorAll(".numerosTarjetaJugador");
  let numerosTarjetaCPU = document.querySelectorAll(".numerosTarjetaCPU");

  if (numerosJugador.includes(numeroActual)) {
    let indice = numerosJugador.indexOf(numeroActual);
    numerosTarjetaJugador[indice].classList.toggle("active");
    contadorJugador++;
  }
  if (numerosCPU.includes(numeroActual)) {
    let indice = numerosCPU.indexOf(numeroActual);
    numerosTarjetaCPU[indice].classList.toggle("active");
    contadorCPU++;
  }
  if ((contadorJugador == 15) && (contadorCPU == 15)) {
    numeroBombo.style.display = 'none';
    win.style.display = 'block';
    win.innerHTML = "Empates!!!";
  } else if(contadorJugador == 15) {
    numeroBombo.style.display = 'none';
    win.style.display = 'block';
    win.innerHTML = "Jugador gana!!!";
  } else if (contadorCPU == 15) {
    numeroBombo.style.display = 'none';
    win.style.display = 'block';
    win.innerHTML = "CPU gana!!!";
  }
}



// Eventos
//Termina de cargar el contenido y pinta todo lo necesario del juego
document.addEventListener("DOMContentLoaded", () => {
  tarjetaJugador.innerHTML = "";
  tarjetaCPU.innerHTML = "";
  numeroSacado.innerHTML = "";
  contadorJugador = 0;
  contadorCPU = 0;

  inicioBombo.style.display = 'block';
  numeroBombo.style.display = 'none';
  win.style.display = 'none';

  generaNumerosJugador();
  generaNumerosCPU();
});

inicioBombo.addEventListener('click', function(){
  inicioBombo.style.display = 'none';
  numeroBombo.style.display = 'block';
  let id = setInterval(() => {
    numeroActual = numerosRandom(1, 90);
    if (!(numerosBombo.includes(numeroActual))) {
      clearInterval(id);
      numerosBombo.push(numeroActual);
      numeroSacado.innerHTML += `<p class="numSacado__num">${numeroActual}</p>`;
      numeroBombo.innerHTML = numeroActual;
      verificaEnTarjetas(numeroActual);
    }
  }, 1);
});

numeroBombo.addEventListener('click', function(){
  let id = setInterval(() => {
    numeroActual = numerosRandom(1, 90);
    if (!(numerosBombo.includes(numeroActual))) {
      clearInterval(id);
      numerosBombo.push(numeroActual);
      numeroSacado.innerHTML += `<p class="numSacado__num">${numeroActual}</p>`;
      numeroBombo.innerHTML = numeroActual;
      verificaEnTarjetas(numeroActual);
    }
    if (numerosBombo.length == 90) {
      clearInterval(id);
    }
  }, 1);
});


win.addEventListener('click', function(){
  location.reload();
})