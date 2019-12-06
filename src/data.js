// Funcion que muestra los jugadores por casa(Gryffindor)
export const functionGryffindor = (POTTER) => { 
  
 const filtrarGryffindor = POTTER.filter(POTTER => (POTTER.house=== "Gryffindor" ));
  
 
  return functionGryffindor;
};
// Funcion que muestra los jugadores por casa(Slytherin)
export const functionSlytherin = (POTTER) => {

const filtrarSlytherin = POTTER.filter(POTTER => (POTTER.house=== "Slytherin" ));
console.log(filtrarSlytherin);
return functionSlytherin;
};
// Funcion que muestra los jugadores por casa(Ravenclaw)
export const functionRavenclaw = (POTTER) =>{
  const filtrarRavenclaw= POTTER.filter(POTTER =>(POTTER.house==="Ravenclaw"));
  console.log(filtrarRavenclaw);
  return functionRavenclaw;
};
// Funcion que muestra los jugadores por casa(Hufflepuff)
export const functionHufflepuff= (POTTER) => {
  const filtrarHufflepuff= POTTER.filter(POTTER =>(POTTER.house==="Hufflepuff"));
  console.log(filtrarHufflepuff);
  return functionHufflepuff;
};
//Funcion que muestra los jugadores que sean estudiantes 
export const functionStudent = (POTTER) => {
  const filtrarStudent= POTTER.filter(POTTER =>(POTTER.hogwartsStudent=== true));
  console.log(filtrarStudent);
  return functionStudent;
};
// Funcion que muestra a los jugadores que sean del staff 
export const functionStaff = (POTTER) => {
  
  const filtrarStaff=POTTER.filter(POTTER=>(POTTER.hogwartsStaff===true));
  console.log(filtrarStaff);
  return functionStaff;

};
export const functionUnicorn = (POTTER) => {
  const filtrarUnicorn = POTTER.filter(POTTER=>(POTTER.wand.core==="unicorn tail-hair"));
  console.log(filtrarUnicorn);
  return functionUnicorn;
};
export const functionDragon =(POTTER) => {
  const filtrarDragon= POTTER.filter(POTTER => (POTTER.wand.core==="dragon heartstring"));
  console.log(filtrarDragon);
  return functionDragon;

};
export const functionPhoenix= (POTTER) => {
  const filtrarPhoenix = POTTER.filter(POTTER=>(POTTER.wand.core==="phoenix feather"));
  console.log(filtrarPhoenix);
  return functionPhoenix;
};
 
export const functionPure= (POTTER) => {
  const filtrarPure = POTTER.filter(POTTER=>(POTTER.ancestry==="pure-blood"));
  console.log(filtrarPure);
  return functionPure;
};
 
export const functionHalf= (POTTER) => {
  const filtrarHalf = POTTER.filter(POTTER=>(POTTER.ancestry==="half-blood"));
  console.log(filtrarHalf);
  return functionHalf;
};

export const functionMugle= (POTTER) => {
let filtrarMugle =POTTER.filter(POTTER=>(POTTER.ancestry==="muggleborn"));
  console.log(filtrarMugle);
  return filtrarMugle;
  
};

//export const funtionMap = (POTTER) =>
