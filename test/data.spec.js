// importamos la función `example`
import { functionGryffindor } from "../src/data";
Gryffindor[
  {
    name: 'Harry Potter',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
  
  },
  {
    name: 'Hermione Granger',
    species: 'human',
    gender: 'female',
    house: 'Gryffindor',
  
  },
  {
    name: 'Ron Weasley',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
  
  },
  {
    name: 'Minerva McGonagall',
    species: 'human',
    gender: 'female',
    house: 'Gryffindor',
  
  },
  {
    name: 'Rubeus Hagrid',
    species: 'half-giant',
    gender: 'male',
    house: 'Gryffindor',
  },
  {
    name: 'Neville Longbottom',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
   
  },
  {
    name: 'Ginny Weasley',
    gender: 'female',
    house: 'Gryffindor',
  },
  {
    name: 'Sirius Black',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
  },
  {
    name: 'Remus Lupin',
    species: 'werewolf',
    house: 'Gryffindor',
 
  },
  {
    name: 'Arthur Weasley',
    species: 'human',
    house: 'Gryffindor',
    
  }

];


describe('functionGryffindor', () => {

  it('debería ser una función', () => {
    expect(typeof functionGryffindor).toBe('function');
  });

  describe('functionGryffindor', (Gryffindor) => {
    // escribe aquí tu test
  });
});
