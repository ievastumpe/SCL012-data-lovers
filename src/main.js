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




//boton filtrar por gryffindor
let btnGriffindor = document.getElementById("btnGriffindor");
btnGriffindor.addEventListener("click", ()=> {
let container=document.getElementById("container");
 
for(let i= 0;POTTER.length;i++){
 

  container.innerHTML += `<div class="caja">
  <img src = ${functionGryffindor(POTTER)[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${functionGryffindor(POTTER)[i].name} </br>
  <li class= "descripcion">Specie: ${functionGryffindor(POTTER)[i].species}
  <li class= "descripcion">House: ${functionGryffindor(POTTER)[i].house}
  
  </div>`
  

 }

});
//boton filtrar por Hufflepuff 
let btnHufflepuff = document.getElementById("hufflepuff");
btnHufflepuff.addEventListener("click", ()=> {
let container=document.getElementById("container");
 
for(let i= 0;POTTER.length;i++){
 

  container.innerHTML += `<div class="caja">
  <img src = ${functionHufflepuff(POTTER)[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${functionHufflepuff(POTTER)[i].name} </br>
  <li class= "descripcion">Specie: ${functionHufflepuff(POTTER)[i].species}
  <li class= "descripcion">House: ${functionHufflepuff(POTTER)[i].house}
  
  </div>`

 }

});

//boton filtrar por Ravenclaw
let btnRavenclaw = document.getElementById("ravenclaw");
btnRavenclaw.addEventListener("click", ()=> {
let container=document.getElementById("container");
 
for(let i= 0;POTTER.length;i++){
 

  container.innerHTML += `<div class="caja">
  <img src = ${functionRavenclaw(POTTER)[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${functionRavenclaw(POTTER)[i].name} </br>
  <li class= "descripcion">Specie: ${functionRavenclaw(POTTER)[i].species}
  <li class= "descripcion">House: ${functionRavenclaw(POTTER)[i].house}
  
  </div>`

 }

});


//boton filtrar por Slytherin
let btnSlytherin = document.getElementById("slytherin");
btnSlytherin.addEventListener("click", ()=> {
let container=document.getElementById("container");
 
for(let i= 0;POTTER.length;i++){
 

  container.innerHTML += `<div class="caja">
  <img src = ${functionSlytherin(POTTER)[i].image} class= "imagenes">
  <li class="descripcion" >Name: ${functionSlytherin(POTTER)[i].name} </br>
  <li class= "descripcion">Specie: ${functionSlytherin(POTTER)[i].species}
  <li class= "descripcion">House: ${functionSlytherin(POTTER)[i].house}
  
  </div>`

 }

});










//const mostrarJugadores = POTTER.map(POTTER => `${POTTER.name} ${POTTER.house}`);

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

