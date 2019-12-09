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


for (let i=0; i<POTTER.length; i++){
  let newBtn = document.createElement("button");
  newBtn.setAttribute("class", "indPtr");
  let newImg = document.createElement("img");
  let imgPotter = (POTTER[i].image);
  newImg.setAttribute('src', imgPotter);
   
  newBtn.appendChild(newImg);
  let nameP = document.createElement("p");
  let namePotter = document.createTextNode(POTTER[i].name);
  nameP.appendChild(namePotter);
  newBtn.appendChild(nameP);

  container.appendChild(newBtn);
}