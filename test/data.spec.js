// importamos la función `example`
import { functionGryffindor } from "../src/data";
gryffindor[
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
    name: 'Remus Lupin',
    species: 'werewolf',
    gender: 'male',
    house: 'Gryffindor', 
  },
  {
    name: 'Arthur Weasley',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',
  }
]

describe('functionGryffindor', () => {

  it('debería ser una función', () => {
    expect(typeof functionGryffindor).toBe('function');
  });

  //describe('', () => {
    // escribe aquí tu test
  //});
});
