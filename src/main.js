// import { example } from './data.js';
// console.log(example);
// console.log(POTTER)
import POTTER from './data/potter/potter.js';// importar los datos desde la carpeta potter.js

import { functionGryffindor } from './data.js';// Importar la función qe está en data.js
functionGryffindor(POTTER); // a la funcion  le agrega los datos de POTTER.

import { functionSlytherin } from './data.js';// Importar la función qe está en data.js
functionSlytherin(POTTER);

import { functionRavenclaw } from './data.js';// Importar la función qe está en data.js
functionRavenclaw(POTTER);

import { functionHufflepuff } from './data.js';// Importar la función qe está en data.js
functionHufflepuff(POTTER);

import { functionStudent } from './data.js';// Importar la función qe está en data.js
functionStudent(POTTER);

import { functionStaff } from './data.js';// Importar la función qe está en data.js
functionStaff(POTTER);

import { functionUnicorn } from './data.js';// Importar la función qe está en data.js
functionUnicorn(POTTER);

import { functionDragon } from './data.js';// Importar la función qe está en data.js
functionDragon(POTTER);

import { functionPhoenix } from './data.js';// Importar la función qe está en data.js
functionPhoenix(POTTER);

import { functionPure } from './data.js';// Importar la función qe está en data.js
functionPure(POTTER);

import { functionHalf } from './data.js';// Importar la función qe está en data.js
functionHalf(POTTER);

import { functionMugle } from './data.js';// Importar la función qe está en data.js
functionMugle(POTTER);

// boton filtrar por gryffindor
const btnGriffindor = document.getElementById('btnGriffindor');
btnGriffindor.addEventListener("click", () => {
  const container = document.getElementById('container');
  container.innerHTML = " "

  for (let i = 0; POTTER.length; i++) {

    container.innerHTML += `<div class="caja">
  <img src=${functionGryffindor(POTTER)[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${functionGryffindor(POTTER)[i].name}
  <li class= "descripcion">Specie: ${functionGryffindor(POTTER)[i].species}
  <li class= "descripcion">House: ${functionGryffindor(POTTER)[i].house}
  <li class= "descripcion">Core: ${functionGryffindor(POTTER)[i].wand.core}
  <li class= "descripcion">Patronus: ${functionGryffindor(POTTER)[i].patronus} 
  </div>`
  }
});

// boton filtrar por Hufflepuff 
const btnHufflepuff = document.getElementById('hufflepuff');
btnHufflepuff.addEventListener("click", () => {
  const container = document.getElementById('container');
  container.innerHTML = " ";

  for (let i = 0; POTTER.length; i++) {

    container.innerHTML = `<div class="caja">

  <img src= ${functionHufflepuff(POTTER)[i].image} class = "imagenes">
  <li class="descripcion" >Name: ${functionHufflepuff(POTTER)[i].name} 
  <li class= "descripcion">Specie: ${functionHufflepuff(POTTER)[i].species}
  <li class= "descripcion">House: ${functionHufflepuff(POTTER)[i].house}
  <li class= "descripcion">Core: ${functionHufflepuff(POTTER)[i].wand.core}
  <li class= "descripcion">Patronus: ${functionHufflepuff(POTTER)[i].patronus} 
  </div>`
  }
});

// boton filtrar por Ravenclaw
const btnRavenclaw = document.getElementById('ravenclaw');
btnRavenclaw.addEventListener("click", () => {
  const container = document.getElementById('container');
  container.innerHTML = " ";

  for (let i = 0; POTTER.length; i++) {

    container.innerHTML += `<div class ="caja">
  <img src = ${functionRavenclaw(POTTER)[i].image} class= "imagenes">
  <li class ="descripcion" >Name: ${functionRavenclaw(POTTER)[i].name}
  <li class = "descripcion">Specie: ${functionRavenclaw(POTTER)[i].species}
  <li class = "descripcion">House: ${functionRavenclaw(POTTER)[i].house}
  <li class = "descripcion">Core: ${functionRavenclaw(POTTER)[i].wand.core}
  <li class = "descripcion">Patronus: ${functionRavenclaw(POTTER)[i].patronus}
 
  </div>`

  }

});

// boton mostrar todos
const btnTodos = document.getElementById('todos');
btnTodos.addEventListener("click", () => {
  const container = document.getElementById('container');
  container.innerHTML = " "

  for (let i = 0; POTTER.length; i++) {
    container.innerHTML += `<div class ="caja">
  <img src = ${POTTER[i].image} class = "imagenes">
  <li class ="descripcion" >Name: ${(POTTER)[i].name} 
  <li class = "descripcion">Specie: ${(POTTER)[i].species}
  <li class = "descripcion">House: ${(POTTER)[i].house}
  <li class = "descripcion">Core: ${(POTTER)[i].wand.core}
  <li class = "descripcion">Patronus: ${(POTTER)[i].patronus}
 
  </div>`

  }
});

// boton filtrar por Slytherin
const btnSlytherin = document.getElementById('slytherin');
btnSlytherin.addEventListener("click", () => {
  const container = document.getElementById('container');
  container.innerHTML = " ";

  for (let i = 0; POTTER.length; i++) {

    container.innerHTML += `<div class="caja">
  <img src= ${functionSlytherin(POTTER)[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${functionSlytherin(POTTER)[i].name} 
  <li class= "descripcion">Specie: ${functionSlytherin(POTTER)[i].species}
  <li class= "descripcion">House: ${functionSlytherin(POTTER)[i].house}
  <li class= "descripcion">Core: ${functionSlytherin(POTTER)[i].wand.core}
  <li class= "descripcion">Patronus: ${functionSlytherin(POTTER)[i].patronus}
  </div>`
  }
});

// boton filtrar por student
const btnStudent = document.getElementById('student');
btnStudent.addEventListener("click", () => {
  const container = document.getElementById('container');
  container.innerHTML = " ";

  for (let i = 0; POTTER.length; i++) {

    container.innerHTML += `<div class="caja">
  <img src = ${functionStudent(POTTER)[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${functionStudent(POTTER)[i].name}
  <li class= "descripcion">Specie: ${functionStudent(POTTER)[i].species}
  <li class= "descripcion">House: ${functionStudent(POTTER)[i].house}
  <li class= "descripcion">Core: ${functionStudent(POTTER)[i].wand.core}
  <li class= "descripcion">Patronus: ${functionStudent(POTTER)[i].patronus}
  </div>`
  }
});

// boton filtrar por staff
const btnStaff = document.getElementById('staff');
btnStaff.addEventListener("click", () => {
  const container = document.getElementById('container');
  container.innerHTML = " ";

  for (let i = 0; POTTER.length; i++) {

    container.innerHTML += `<div class="caja">
  <img src = ${functionStaff(POTTER)[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${functionStaff(POTTER)[i].name}
  <li class= "descripcion">Specie: ${functionStaff(POTTER)[i].species}
  <li class= "descripcion">House: ${functionStaff(POTTER)[i].house}
  <li class= "descripcion">Core: ${functionStaff(POTTER)[i].wand.core}
  <li class= "descripcion">Patronus: ${functionStaff(POTTER)[i].patronus}
  </div>`
  }
});

// boton filtrar por Unicorn
const btnUnicorn = document.getElementById('unicorn');
btnUnicorn.addEventListener("click", () => {
  const container = document.getElementById('container');
  container.innerHTML = " ";

  for (let i = 0; POTTER.length; i++) {

    container.innerHTML += `<div class="caja">
  <img src = ${functionUnicorn(POTTER)[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${functionUnicorn(POTTER)[i].name}
  <li class= "descripcion">Specie: ${functionUnicorn(POTTER)[i].species}
  <li class= "descripcion">House: ${functionUnicorn(POTTER)[i].house}
  <li class= "descripcion">Core: ${functionUnicorn(POTTER)[i].wand.core}
  <li class= "descripcion">Patronus: ${functionUnicorn(POTTER)[i].patronus}
  </div>`
  }
});

// boton filtrar por Dragon Heartstring
const btnDragon = document.getElementById('dragon');
btnDragon.addEventListener("click", () => {
  const container = document.getElementById('container');
  container.innerHTML = " ";

  for (let i = 0; POTTER.length; i++) {

    container.innerHTML += `<div class="caja">
  <img src = ${functionDragon(POTTER)[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${functionDragon(POTTER)[i].name}
  <li class= "descripcion">Specie: ${functionDragon(POTTER)[i].species}
  <li class= "descripcion">House: ${functionDragon(POTTER)[i].house}
  <li class= "descripcion">Core: ${functionDragon(POTTER)[i].wand.core}
  <li class= "descripcion">Patronus: ${functionDragon(POTTER)[i].patronus}
  </div>`
  }
});

// boton filtrar por Phoenix feather
const btnPhoenix = document.getElementById('phoenix');
btnPhoenix.addEventListener("click", () => {
  const container = document.getElementById('container');
  container.innerHTML = " ";

  for (let i = 0; POTTER.length; i++) {

    container.innerHTML += `<div class="caja">
  <img src = ${functionPhoenix(POTTER)[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${functionPhoenix(POTTER)[i].name}
  <li class= "descripcion">Specie: ${functionPhoenix(POTTER)[i].species}
  <li class= "descripcion">House: ${functionPhoenix(POTTER)[i].house}
  <li class= "descripcion">Core: ${functionPhoenix(POTTER)[i].wand.core}
  <li class= "descripcion">Patronus: ${functionPhoenix(POTTER)[i].patronus} 
  </div>`
  }
});

// boton filtrar por Pure-blood
const btnPure = document.getElementById('pure');
btnPure.addEventListener("click", () => {
  const container = document.getElementById('container');
  container.innerHTML = " ";

  for (let i = 0; POTTER.length; i++) {

    container.innerHTML += `<div class="caja">
  <img src = ${functionPure(POTTER)[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${functionPure(POTTER)[i].name}
  <li class= "descripcion">Specie: ${functionPure(POTTER)[i].species}
  <li class= "descripcion">House: ${functionPure(POTTER)[i].house}
  <li class= "descripcion">Core: ${functionPure(POTTER)[i].wand.core}
  <li class= "descripcion">Patronus: ${functionPure(POTTER)[i].patronus}  
  </div>`
  }
});

// boton filtrar por Half-blood
const btnHalf = document.getElementById('half');
btnHalf.addEventListener("click", () => {
  const container = document.getElementById('container');
  container.innerHTML = " ";

  for (let i = 0; POTTER.length; i++) {

    container.innerHTML += `<div class="caja">
  <img src = ${functionHalf(POTTER)[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${functionHalf(POTTER)[i].name}
  <li class= "descripcion">Specie: ${functionHalf(POTTER)[i].species}
  <li class= "descripcion">House: ${functionHalf(POTTER)[i].house}
  <li class= "descripcion">Core: ${functionHalf(POTTER)[i].wand.core}
  <li class= "descripcion">Patronus: ${functionHalf(POTTER)[i].patronus}
  </div>`
  }
});

// boton filtrar por Mugleborn
const btnMuggle = document.getElementById('muggle');
btnMuggle.addEventListener("click", () => {
  const container = document.getElementById('container');
  container.innerHTML = " ";

  for (let i = 0; POTTER.length; i++) {

    container.innerHTML += `<div class="caja">
  <img src = ${functionMugle(POTTER)[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${functionMugle(POTTER)[i].name}
  <li class= "descripcion">Specie: ${functionMugle(POTTER)[i].species}
  <li class= "descripcion">House: ${functionMugle(POTTER)[i].house}
  <li class= "descripcion">Core: ${functionMugle(POTTER)[i].wand.core}
  <li class= "descripcion">Patronus: ${functionMugle(POTTER)[i].patronus}
  </div>`
  }
});

// mostrar todo en pantalla
for (let i = 0; POTTER.length; i++) {

  const container = document.getElementById('container');
  container.innerHTML += `<div class="caja">
  <img src = ${POTTER[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${(POTTER)[i].name}
  <li class= "descripcion">Specie: ${(POTTER)[i].species}
  <li class= "descripcion">House: ${(POTTER)[i].house}
  <li class= "descripcion">Core: ${(POTTER)[i].wand.core}
  <li class= "descripcion">Patronus: ${(POTTER)[i].patronus}
  </div>`
}




// boton sort 

import { functionSort } from './data.js';// Importar la función qe está en data.js
functionSort(POTTER);

const sortBtn = document.getElementById('sortBtn');
sortBtn.addEventListener("click", () => {
  const container = document.getElementById('container');
  container.innerHTML = " ";

  for (let i = 0; POTTER.length; i++) {

    container.innerHTML += `<div class="caja">
  <img src = ${functionSort(POTTER)[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${functionSort(POTTER)[i].name}
  <li class= "descripcion">Specie: ${functionSort(POTTER)[i].species}
  <li class= "descripcion">House: ${functionSort(POTTER)[i].house}
  <li class= "descripcion">Core: ${functionSort(POTTER)[i].wand.core}
  <li class= "descripcion">Patronus: ${functionSort(POTTER)[i].patronus}
  </div>`
  }
});