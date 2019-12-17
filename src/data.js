// Funcion que muestra los jugadores por casa(Gryffindor)
export const functionGryffindor = (data) => {
  const filtrarGryffindor = data.filter(elemento => (elemento.house === 'Gryffindor'));
  console.log(filtrarGryffindor);
  return filtrarGryffindor;
};

// Funcion que muestra los jugadores por casa(Slytherin)
export const functionSlytherin = (data) => {
  const filtrarSlytherin = data.filter(elemento => (elemento.house === 'Slytherin'));
  console.log(filtrarSlytherin);
  return filtrarSlytherin;
};

// Funcion que muestra los jugadores por casa(Ravenclaw)
export const functionRavenclaw = (data) => {
  const filtrarRavenclaw = data.filter(elemento => (elemento.house === 'Ravenclaw'));
  console.log(filtrarRavenclaw);
  return filtrarRavenclaw;
};

// Funcion que muestra los jugadores por casa(Hufflepuff)
export const functionHufflepuff = (data) => {
  const filtrarHufflepuff = data.filter(elemento => (elemento.house === 'Hufflepuff'));
  console.log(filtrarHufflepuff);
  return filtrarHufflepuff;
};

// Funcion que muestra los jugadores que sean estudiantes 
export const functionStudent = (data) => {
  const filtrarStudent = data.filter(elemento => (elemento.hogwartsStudent === true));
  console.log(filtrarStudent);
  return filtrarStudent;
};

// Funcion que muestra a los jugadores que sean del staff 
export const functionStaff = (data) => {
  const filtrarStaff = data.filter(elemento => (elemento.hogwartsStaff === true));
  console.log(filtrarStaff);
  return filtrarStaff;
};

// Funcion que muestra a los jugadores que tengan core Unicorn tail-hair
export const functionUnicorn = (data) => {
  const filtrarUnicorn = data.filter(elemento => (elemento.wand.core === 'unicorn tail-hair'));
  console.log(filtrarUnicorn);
  return filtrarUnicorn;
};

// Funcion que muestra a los jugadores que tengan core dragon heartstring
export const functionDragon = (data) => {
  const filtrarDragon = data.filter(elemento => (elemento.wand.core === 'dragon heartstring'));
  console.log(filtrarDragon);
  return filtrarDragon;
};

// funcion que muestra a los jugadores que tengan core de phoenix feather
export const functionPhoenix = (data) => {
  const filtrarPhoenix = data.filter(elemento => (elemento.wand.core === 'phoenix feather'));
  console.log(filtrarPhoenix);
  return filtrarPhoenix;
};
 
//funcion que muestra a los jugadores que tengan ancestry pure-blood
export const functionPure = (data) => {
  const filtrarPure = data.filter(elemento => (elemento.ancestry === 'pure-blood'));
  console.log(filtrarPure);
  return filtrarPure;
};
 
// funcion que muestra los jugadores que tengan ancestry half-blood
export const functionHalf = (data) => {
  const filtrarHalf = data.filter(elemento => (elemento.ancestry === 'half-blood'));
  console.log(filtrarHalf);
  return filtrarHalf;
};

// funcion que muestra a los jugadores que tengan ancestry muggleborn
export const functionMugle = (data) => {
  const filtrarMugle = data.filter(elemento => (elemento.ancestry === 'muggleborn'));
  console.log(filtrarMugle);
  return filtrarMugle; 
};


// funcion para sort
export const functionSort = (data) => {
  const personajes = data.sort(elemento.name);
  personajes.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  })
};
