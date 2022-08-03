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
var numeroActual, indice;




// Funciones del juego
function numerosRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generaNumerosJugador() {
  for (let i = 0; i < 15; i++) {
    numerosJugador.push(numerosRandom(1, 90));
  }

  numerosJugador.forEach(element => tarjetaJugador.innerHTML += `<p class="numeros">${element}</p>`);
}

function generaNumerosCPU() {
  for (let i = 0; i < 15; i++) {
    numerosCPU.push(numerosRandom(1, 90));
  }

  numerosCPU.forEach(element => tarjetaCPU.innerHTML += `<p class="numeros">${element}</p>`);
}



// Eventos
//Termina de cargar el contenido y pinta todo lo necesario del juego
document.addEventListener("DOMContentLoaded", () => {
  indice = 89;
  for (let m = 1; m < 91; m++) {
    numerosBombo.push(m);
  }
  console.log(numerosBombo); //Quitar al final
  console.log(indice); //Quitar al final
  tarjetaJugador.innerHTML = "";
  tarjetaCPU.innerHTML = "";
  numeroSacado.innerHTML = "";

  inicioBombo.style.display = 'block';
  numeroBombo.style.display = 'none';
  win.style.display = 'none';

  generaNumerosJugador();
  generaNumerosCPU();
});

inicioBombo.addEventListener('click', function(){
  
});

numeroBombo.addEventListener('click', function(){
  
});


// todos.addEventListener('click', function(){
//   location.reload();
// })