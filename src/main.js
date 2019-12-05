// import { example } from './data.js';
//console.log(example);
//console.log(POTTER) 
import  POTTER  from './data/potter/potter.js';// importar los datos desde la carpeta potter.js

import  {functionGryffindor,}  from './data.js';// Importar la función qe está en data.js
functionGryffindor(POTTER); // a la funcion example le agrega los datos de POTTER.

import  {functionSlytherin}  from './data.js';
functionSlytherin(POTTER);

import  {functionRavenclaw}  from './data.js';
functionRavenclaw(POTTER);

import  {functionHufflepuff}  from './data.js';
functionHufflepuff(POTTER);

import  {functionStudent}  from './data.js';
functionStudent(POTTER);

import  {functionStaff}  from './data.js';
functionStaff (POTTER);





console.log(POTTER);


let btnGriffindor = document.getElementById("btnGriffindor");
btnGriffindor.addEventListener("click", mostrarGriffindor);

function mostrarGriffindor() {
  var img = document.createElement("img");
  img.src = "photoHarry.jpg";
  document.getElementById("personajes").innerHTML = "Hello Harry";
}



  //document.createElement("personajesCasaGriffindor");
  //para.innerHTML = "CLICK ME";                  
  //document.body.appendChild(para);  