// importamos la función `example`
// Test a la funcion que filtra la casa Gryffindor
import { functionGryffindor } from "../src/data.js";

const gryffindor = [
  {
    name: 'Harry Potter',
    species: 'human',
    gender: 'male',
    house: 'Gryffindor',    
  }
];

  describe('functionGryffindor', () => {
    it('debería ser una funcion', () => {
      expect (typeof functionGryffindor).toBe ('function'); 
    });
       it ('deberia retornar Harry Potter', () => {
         expect (functionGryffindor(gryffindor)[0].house).toEqual('Gryffindor');
       });
  });
// Test a la funcion que filtra la casa Slytherin

  import { functionSlytherin } from "../src/data.js";

  const slytherin = [
    {
      name: 'Bellatrix Lestrange',
      species: 'human',
      gender: 'female',
      house: 'Slytherin',
      dateOfBirth: '',
    }
  ];

  describe('functionSlytherin', () => {
    it('debería ser una funcion', () => {
      expect (typeof functionSlytherin).toBe ('function'); 
    });
       it ('deberia retornar Bellatrix Lestrange', () => {
         expect (functionSlytherin(slytherin)[0].house).toEqual('Slytherin');
       });
  });

  // Test a la funcion que filtra la casa Ravenclaw

  import { functionRavenclaw } from "../src/data.js";

  const ravenclaw = [
    {
      name: 'Cho Chang',
      species: 'human',
      gender: 'female',
      house: 'Ravenclaw',
      dateOfBirth: '',
      yearOfBirth: '',
    }
  ];

  describe('functionRavenclaw', () => {
    it('debería ser una funcion', () => {
      expect (typeof functionRavenclaw).toBe ('function'); 
    });
       it ('deberia retornar Cho Chang', () => {
         expect (functionRavenclaw(ravenclaw)[0].house).toEqual('Ravenclaw');
       });
  });

  // Test a la funcion que filtra la casa Huflepuff

  import {  functionHufflepuff } from "../src/data.js";

  const huflepuff = [
    {
      name: 'Cedric Diggory',
      species: 'human',
      gender: 'male',
      house: 'Hufflepuff',
      dateOfBirth: '',
      yearOfBirth: 1977,
    }
  ];

  describe('functionHufflepuff', () => {
    it('debería ser una funcion', () => {
      expect (typeof functionHufflepuff).toBe ('function'); 
    });
       it ('deberia retornar Cedric Diggory', () => {
         expect (functionHufflepuff(huflepuff)[0].house).toEqual('Hufflepuff');
       });
  });

  // Test a la funcion por estudiantes 

  import { functionStudent } from "../src/data.js";

  const student = [
    {
      name: 'Draco Malfoy',
      species: 'human',
      patronus: '',
      hogwartsStudent: true,
      hogwartsStaff: false, 
    }
  ];

  describe('functionStudent', () => {
    it('debería ser una funcion', () => {
      expect (typeof functionStudent).toBe ('function'); 
    });
       it ('deberia retornar Draco Malfoy', () => {
         expect (functionStudent(student)[0].hogwartsStudent).toEqual(true);
       });
  });

  //Test a la funcion que filtra por Staff
  
  import { functionStaff } from "../src/data.js";

  const staff = [
    {
      name: 'Minerva McGonagall',
      patronus: 'tabby cat',
      hogwartsStudent: false,
      hogwartsStaff: true,      
    }
  ];

  describe('functionStaff', () => {
    it('debería ser una funcion', () => {
      expect (typeof functionStaff).toBe ('function'); 
    });
       it ('deberia retornar Minerva McGonagall', () => {
         expect (functionStaff(staff)[0].hogwartsStaff).toEqual(true);
       });
  });

// test a la funcion que filtra por Unicorn

import { functionUnicorn } from "../src/data.js";

const unicorn = [
  {
    name: 'Neville Longbottom',
    wand: {
      wood: 'cherry',
      core: 'unicorn tail-hair',
      length: 13,
    },
    
  }
];

describe('functionUnicorn', () => {
  it('debería ser una funcion', () => {
    expect (typeof functionUnicorn).toBe ('function'); 
  });
     it ('deberia retornar Neville Longbottom', () => {
      expect (functionUnicorn(unicorn)[0].wand.core).toEqual('unicorn tail-hair');      
     });
});

// test a la funcion que filtra por Dragon

import { functionDragon } from "../src/data.js";

const dragon = [
  {
    name: 'Bellatrix Lestrange',
    species: 'human',
    wand: {
      wood: 'walnut',
      core: 'dragon heartstring',
      length: 12.75,
    },
  }
];

describe('functionDragon', () => {
  it('debería ser una funcion', () => {
    expect (typeof functionDragon).toBe ('function'); 
  });
     it ('deberia retornar Bellatrix Lestrange', () => {
       expect (functionDragon(dragon)[0].wand.core).toEqual('dragon heartstring');
     });
});

// test a la funcion que filtra por Phoenix

import { functionPhoenix  } from "../src/data.js";

const phoenix = [
  {
    name: 'Harry Potter',
    species: 'human',
    wand: {
      wood: 'holly',
      core: 'phoenix feather',
      length: 11,
    },
  }];

describe('functionPhoenix', () => {
  it('debería ser una funcion', () => {
    expect (typeof functionPhoenix).toBe ('function'); 
  });
     it ('deberia retornar Harry Potter', () => {
       expect (functionPhoenix(phoenix)[0].wand.core).toEqual('phoenix feather');
     });
});

// test a la funcion que filtra por Pure- blood

import { functionPure } from "../src/data.js";

const pure = [
  {
    name: 'Ron Weasley',
    species: 'human',
    ancestry: 'pure-blood',
}];

describe('functionPure', () => {
  it('debería ser una funcion', () => {
    expect (typeof functionPure).toBe ('function'); 
  });
     it ('deberia retornar Ron Weasley', () => {
       expect (functionPure(pure)[0].ancestry).toEqual('pure-blood');
     });
});

// test a la funcion que filtra por 

import { functionHalf } from "../src/data.js";

const half = [
  {
    name: 'Severus Snape',
    ancestry: 'half-blood',
  
}];

describe('functionHalf', () => {
  it('debería ser una funcion', () => {
    expect (typeof functionHalf).toBe ('function'); 
  });
     it ('deberia retornar Severus Snape', () => {
       expect (functionHalf(half)[0].ancestry).toEqual('half-blood');
     });
});

// test a la funcion que filtra por 

import { functionMugle } from "../src/data.js";

const muggleborn = [
  {
    name: 'Hermione Granger',
    species: 'human',
    ancestry: 'muggleborn',
  
}];

describe('functionMugle', () => {
  it('debería ser una funcion', () => {
    expect (typeof functionMugle).toBe ('function'); 
  });
     it ('deberia retornar Severus Snape', () => {
       expect (functionMugle(muggleborn)[0].ancestry).toEqual('muggleborn');
     });
});






  

