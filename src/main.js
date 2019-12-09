// import { example } from './data.js';
//console.log(example);
//console.log(POTTER) 
import  POTTER  from './data/potter/potter.js';// importar los datos desde la carpeta potter.js

import  {functionGryffindor}  from './data.js';// Importar la función qe está en data.js
functionGryffindor(POTTER); // a la funcion  le agrega los datos de POTTER.

let botonHouse= document.getElementById("house")


import  {functionSlytherin}  from './data.js';// Importar la función qe está en data.js
functionSlytherin(POTTER);

import  {functionRavenclaw}  from './data.js';// Importar la función qe está en data.js
functionRavenclaw(POTTER);

import  {functionHufflepuff}  from './data.js';// Importar la función qe está en data.js
functionHufflepuff(POTTER);

import  {functionStudent}  from './data.js';// Importar la función qe está en data.js
functionStudent(POTTER);

import  {functionStaff}  from './data.js';// Importar la función qe está en data.js
functionStaff (POTTER);

import  {functionUnicorn}  from './data.js';// Importar la función qe está en data.js
functionUnicorn(POTTER);


import  {functionDragon}  from './data.js';// Importar la función qe está en data.js
functionDragon(POTTER);

import  {functionPhoenix}  from './data.js';// Importar la función qe está en data.js
functionPhoenix(POTTER);

import  {functionPure}  from './data.js';// Importar la función qe está en data.js
functionPure(POTTER);

import  {functionHalf}  from './data.js';// Importar la función qe está en data.js
functionHalf(POTTER);

import  {functionMugle}  from './data.js';// Importar la función qe está en data.js
functionMugle(POTTER);


let btnGriffindor = document.getElementById("btnGriffindor");
btnGriffindor.addEventListener("click", ()=> {
let container=document.getElementById("container");
 
container.innerHTML += `<div> </div>`
console.log(functionGryffindor(POTTER));
});
//mostrar todos los datos en pantalla

//const mostrarJugadores = POTTER.map(POTTER => `${POTTER.name} ${POTTER.house} ${POTTER.image}`);

//const nombres = document.querySelectorAll('name');
//console.log(nombres);

//let btnGriffindor = document.getElementById("btnGriffindor");
//btnGriffindor.addEventListener("click", mostrarGriffindor);

//function mostrarGriffindor() {
  //var img = document.createElement("img");
  //img.src = POTTER.image;
  //document.getElementById("container").innerHTML = "Hello Harry";

 // console.log(mostrarGriffindor);
//}

console.log(POTTER);