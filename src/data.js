// Funcion que muestra los jugadores por casa(Gryffindor)
export const functionGryffindor = (POTTER) => { 
  
 //const filtrarGryffindor = POTTER.filter(POTTER => (POTTER.house=== "Gryffindor" ));
 for(let i=0; i < POTTER.length; i++){

  const filtrarGryffindor = POTTER.filter(POTTER => (POTTER.house=== "Gryffindor" ));
  return filtrarGryffindor;
};
 }
 
  
// Funcion que muestra los jugadores por casa(Slytherin)
export const functionSlytherin = (POTTER) => {
   

const filtrarSlytherin = POTTER.filter(POTTER => (POTTER.house=== "Slytherin" ));
console.log(filtrarSlytherin);
return filtrarSlytherin;
};
// Funcion que muestra los jugadores por casa(Ravenclaw)
export const functionRavenclaw = (POTTER) =>{
  const filtrarRavenclaw= POTTER.filter(POTTER =>(POTTER.house==="Ravenclaw"));
  console.log(filtrarRavenclaw);
  return filtrarRavenclaw;
};
// Funcion que muestra los jugadores por casa(Hufflepuff)
export const functionHufflepuff= (POTTER) => {
  const filtrarHufflepuff= POTTER.filter(POTTER =>(POTTER.house==="Hufflepuff"));
  console.log(filtrarHufflepuff);
  return filtrarHufflepuff;
};
//Funcion que muestra los jugadores que sean estudiantes 
export const functionStudent = (POTTER) => {
  const filtrarStudent= POTTER.filter(POTTER =>(POTTER.hogwartsStudent=== true));
  console.log(filtrarStudent);
  return filtrarStudent;
};
// Funcion que muestra a los jugadores que sean del staff 
export const functionStaff = (POTTER) => {
  
  const filtrarStaff=POTTER.filter(POTTER=>(POTTER.hogwartsStaff===true));
  console.log(filtrarStaff);
  return filtrarStaff;

};
export const functionUnicorn = (POTTER) => {
  const filtrarUnicorn = POTTER.filter(POTTER=>(POTTER.wand.core==="unicorn tail-hair"));
  console.log(filtrarUnicorn);
  return filtrarUnicorn;
};
export const functionDragon =(POTTER) => {
  const filtrarDragon= POTTER.filter(POTTER => (POTTER.wand.core==="dragon heartstring"));
  console.log(filtrarDragon);
  return filtrarDragon;

};
export const functionPhoenix= (POTTER) => {
  const filtrarPhoenix = POTTER.filter(POTTER=>(POTTER.wand.core==="phoenix feather"));
  console.log(filtrarPhoenix);
  return filtrarPhoenix;
};
 
export const functionPure= (POTTER) => {
  const filtrarPure = POTTER.filter(POTTER=>(POTTER.ancestry==="pure-blood"));
  console.log(filtrarPure);
  return filtrarPure;
};
 
export const functionHalf= (POTTER) => {
  const filtrarHalf = POTTER.filter(POTTER=>(POTTER.ancestry==="half-blood"));
  console.log(filtrarHalf);
  return filtrarHalf;
};

export const functionMugle= (POTTER) => {
let filtrarMugle =POTTER.filter(POTTER=>(POTTER.ancestry==="muggleborn"));
  console.log(filtrarMugle);
  return filtrarMugle;
  
};

//export const funtionMap = (POTTER) =>
