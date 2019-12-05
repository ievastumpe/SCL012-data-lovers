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
}



