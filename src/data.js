// Funcion que muestra los jugadores por casa(Gryffindor)
export const functionGryffindor = (POTTER) => { 
  
 const filtrarGryffindor = POTTER.filter(POTTER => (POTTER.house=== "Gryffindor" ));
 
 console.log (filtrarGryffindor);
  return 'functionGryffindor';
};
// Funcion que muestra los jugadores por casa(Slytherin)
export const functionSlytherin = (POTTER) => {

const filtrarSlytherin = POTTER.filter(POTTER => (POTTER.house=== "Slytherin" ));
console.log(filtrarSlytherin);
};
// Funcion que muestra los jugadores por casa(Ravenclaw)
export const functionRavenclaw = (POTTER) =>{
  const filtrarRavenclaw= POTTER.filter(POTTER =>(POTTER.house==="Ravenclaw"));
  console.log(filtrarRavenclaw);
};
// Funcion que muestra los jugadores por casa(Hufflepuff)
export const functionHufflepuff= (POTTER) => {
  const filtrarHufflepuff= POTTER.filter(POTTER =>(POTTER.house==="Hufflepuff"));
  console.log(filtrarHufflepuff);
};
//Funcion que muestra los jugadores que sean estudiantes 
export const functionStudent = (POTTER) => {
  const filtrarStudent= POTTER.filter(POTTER =>(POTTER.hogwartsStudent=== true));
  console.log(filtrarStudent);
};
// Funcion que muestra a los jugadores que sean del staff 
export const functionStaff = (POTTER) => {
  const filtrarStaff=POTTER.filter(POTTER=>(POTTER.hogwartsStaff===true));
  console.log(filtrarStaff);
};
export const functionUnicorn = (POTTER) => {
  const filtrarUnicorn = POTTER.filter(POTTER=>(POTTER.wand.core==="unicorn tail-hair"));
  console.log(filtrarUnicorn);

};
export const functionDragon =(POTTER) => {
  const filtrarDragon= POTTER.filter(POTTER => (POTTER.wand.core==="dragon heartstring"));
  console.log(filtrarDragon);
};
export const functionPhoenix= (POTTER) => {
  const filtrarPhoenix = POTTER.filter(POTTER=>(POTTER.wand.core==="phoenix feather"));
  console.log(filtrarPhoenix);
};
 
export const functionPure= (POTTER) => {
  const filtrarPure = POTTER.filter(POTTER=>(POTTER.ancestry==="pure-blood"));
  console.log(filtrarPure);
};
 
export const functionHalf= (POTTER) => {
  const filtrarHalf = POTTER.filter(POTTER=>(POTTER.ancestry==="half-blood"));
  console.log(filtrarHalf);
};

export const functionMugle= (POTTER) => {
  const filtrarMugle = POTTER.filter(POTTER=>(POTTER.ancestry==="muggleborn"));
  console.log(filtrarMugle);
};

