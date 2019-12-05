// Funcion que muestra los jugadores por casa(Gryffindor)
export const functionGryffindor = (POTTER) => { 
  
 const filtrarGryffindor = POTTER.filter(POTTER => (POTTER.house=== "Gryffindor" ));
 
 console.log (filtrarGryffindor);
  return 'functionData';
};
// Funcion que muestra los jugadores por casa(Slytherin)
export const functionSlytherin = (POTTER) => {

const filtrarSlytherin = POTTER.filter(POTTER => (POTTER.house=== "Slytherin" ));
console.log(filtrarSlytherin);
};





