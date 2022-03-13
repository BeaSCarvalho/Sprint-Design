import { 
  searchByName,
  filterByType, 
  filterByWeakness,
  alphabeticOrder,
  orderOfWeakness,
  percentagePerFilter,

} from '../src/data.js';

const pokemonsForTest = [
  {
  num: "001",
  name: "bulbasaur",
  type: ["grass","poison"],
  weaknesses: ["fire","ice","flying","psychic"]  
  },
  {
  num: "025",
  name: "pikachu",
  type: ["eletric"],
  weaknesses: ["ground"]
  },
  {
  num: "149",
  name: "dragonite",
  type: ["dragon","flying"],
  weaknesses: ["ice","rock","dragon","fairy"]
  },
  {
  num: "183",
  name: "marill",
  type: ["water","fairy"],
  weaknesses: ["eletric","grass","poison"]  
  },
  {
  num: "200",
  name: "misdreavus",
  type: ["ghost"],
  weaknesses: ["ghost","dark"]   
  },
  {
  num: "203",
  name: "girafarig",
  type: ["normal","psychic"],
  weaknesses: ["bug","dark"]    
  },
  {
  num: "205",
  name: "forretress",
  type: ["bug","steel"],
  weaknesses: ["fire"]
  },
  {
  num: "213",
  name: "shuckle",
  type: ["bug","rock"],
  weaknesses: ["water","rock","steel"]   
  },
  {
  num: "220",
  name: "swinub",
  type: ["ice","ground"],
  weaknesses: ["fire","water","grass","fighting"]    
  },
  {
  num: "229",
  name: "houndoom",
  type: ["dark","fire"],
  weaknesses: ["water","fighting","ground","rock"]  
  },
];

describe('searchByName', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('should return bulbasaur when typed "bulbasaur"', () => {
    expect(searchByName(pokemonsForTest, "bulbasaur")).toEqual([
      {
      num: "001",
      name: "bulbasaur",
      type: ["grass","poison"],
      weaknesses: ["fire","ice","flying","psychic"]  
      }
    ]);
  });
});    

describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('should return pokemons filtered by type = bug', () => {
    expect(filterByType(pokemonsForTest, "bug")).toEqual([
      {      
      num: "205",
      name: "forretress",
      type: ["bug","steel"],
      weaknesses: ["fire"]
      },
      {
      num: "213",
      name: "shuckle",
      type: ["bug","rock"],
      weaknesses: ["water","rock","steel"]   
      }
    ]);
  });
});

describe('filterByWeakness', () => {
  it('is a function', () => {
    expect(typeof filterByWeakness).toBe('function');
  });

  it('should return pokemons filtered by weaknesses = fire', () => {
    expect(filterByWeakness(pokemonsForTest, "fire")).toEqual([
      {
      num: "001",
      name: "bulbasaur",
      type: ["grass","poison"],
      weaknesses: ["fire","ice","flying","psychic"]  
      },
      {
      num: "205",
      name: "forretress",
      type: ["bug","steel"],
      weaknesses: ["fire"]
      },
      {
      num: "220",
      name: "swinub",
      type: ["ice","ground"],
      weaknesses: ["fire","water","grass","fighting"]    
      },    
    ]);
  });
});

describe('alphabeticOrder', () => {
  it('is a function', () => {
    expect(typeof alphabeticOrder).toBe('function');
  });

  it('should return pokemons sorted by name A-Z', () => {
    expect(alphabeticOrder(pokemonsForTest,"name-az")).toEqual([
      {
      num: "001",
      name: "bulbasaur",
      type: ["grass","poison"],
      weaknesses: ["fire","ice","flying","psychic"]  
      },
      {
      num: "149",
      name: "dragonite",
      type: ["dragon","flying"],
      weaknesses: ["ice","rock","dragon","fairy"]
      }, 
      {
      num: "205",
      name: "forretress",
      type: ["bug","steel"],
      weaknesses: ["fire"]
      },
      {
      num: "203",
      name: "girafarig",
      type: ["normal","psychic"],
      weaknesses: ["bug","dark"]    
      },
      {
      num: "229",
      name: "houndoom",
      type: ["dark","fire"],
      weaknesses: ["water","fighting","ground","rock"]  
      },
      {
      num: "183",
      name: "marill",
      type: ["water","fairy"],
      weaknesses: ["eletric","grass","poison"]  
      },
      {
      num: "200",
      name: "misdreavus",
      type: ["ghost"],
      weaknesses: ["ghost","dark"]   
      },
      {
      num: "025",
      name: "pikachu",
      type: ["eletric"],
      weaknesses: ["ground"]
      },
      {
      num: "213",
      name: "shuckle",
      type: ["bug","rock"],
      weaknesses: ["water","rock","steel"]   
      },
      {
      num: "220",
      name: "swinub",
      type: ["ice","ground"],
      weaknesses: ["fire","water","grass","fighting"]    
      }
    ]);
  });

  it('should return pokemons sorted by name Z-A', () => {
    expect(alphabeticOrder(pokemonsForTest,"name-za")).toEqual([
      {
      num: "220",
      name: "swinub",
      type: ["ice","ground"],
      weaknesses: ["fire","water","grass","fighting"]    
      },
      {
      num: "213",
      name: "shuckle",
      type: ["bug","rock"],
      weaknesses: ["water","rock","steel"]   
      },
      {
      num: "025",
      name: "pikachu",
      type: ["eletric"],
      weaknesses: ["ground"]
      },
      {
      num: "200",
      name: "misdreavus",
      type: ["ghost"],
      weaknesses: ["ghost","dark"]   
      },
      {
      num: "183",
      name: "marill",
      type: ["water","fairy"],
      weaknesses: ["eletric","grass","poison"]  
      },
      {
      num: "229",
      name: "houndoom",
      type: ["dark","fire"],
      weaknesses: ["water","fighting","ground","rock"]  
      },
      {
      num: "203",
      name: "girafarig",
      type: ["normal","psychic"],
      weaknesses: ["bug","dark"]    
      },
      {
      num: "205",
      name: "forretress",
      type: ["bug","steel"],
      weaknesses: ["fire"]
      },
      {
      num: "149",
      name: "dragonite",
      type: ["dragon","flying"],
      weaknesses: ["ice","rock","dragon","fairy"]
      },
      {
      num: "001",
      name: "bulbasaur",
      type: ["grass","poison"],
      weaknesses: ["fire","ice","flying","psychic"]  
      }
    ]);
  }); 
  
  it('should return pokemons sorted by number', () => {
    expect(alphabeticOrder(pokemonsForTest,"number")).toEqual([
      {
      num: "001",
      name: "bulbasaur",
      type: ["grass","poison"],
      weaknesses: ["fire","ice","flying","psychic"]  
      },
      {
      num: "025",
      name: "pikachu",
      type: ["eletric"],
      weaknesses: ["ground"]
      },
      {
      num: "149",
      name: "dragonite",
      type: ["dragon","flying"],
      weaknesses: ["ice","rock","dragon","fairy"]
      },
      {
      num: "183",
      name: "marill",
      type: ["water","fairy"],
      weaknesses: ["eletric","grass","poison"]  
      },
      {
      num: "200",
      name: "misdreavus",
      type: ["ghost"],
      weaknesses: ["ghost","dark"]   
      },
      {
      num: "203",
      name: "girafarig",
      type: ["normal","psychic"],
      weaknesses: ["bug","dark"]    
      },
      {
      num: "205",
      name: "forretress",
      type: ["bug","steel"],
      weaknesses: ["fire"]
      },
      {
      num: "213",
      name: "shuckle",
      type: ["bug","rock"],
      weaknesses: ["water","rock","steel"]   
      },
      {
      num: "220",
      name: "swinub",
      type: ["ice","ground"],
      weaknesses: ["fire","water","grass","fighting"]    
      },
      {
      num: "229",
      name: "houndoom",
      type: ["dark","fire"],
      weaknesses: ["water","fighting","ground","rock"]  
      },
    ]);  
  }); 
});

describe('orderOfWeakness', () => {
  it('is a function', () => {
    expect(typeof orderOfWeakness).toBe('function');
  });

  it('should return pokemons ordered by the least amount of weaknesses', () => {
    expect(orderOfWeakness(pokemonsForTest, "less-weakness")).toEqual([
      {
      num: "205",
      name: "forretress",
      type: ["bug","steel"],
      weaknesses: ["fire"]
      },
      {
      num: "025",
      name: "pikachu",
      type: ["eletric"],
      weaknesses: ["ground"] 
      },
      {
      num: "203",
      name: "girafarig",
      type: ["normal","psychic"],
      weaknesses: ["bug","dark"]    
      },
      {
      num: "200",
      name: "misdreavus",
      type: ["ghost"],
      weaknesses: ["ghost","dark"]   
      },
      {
      num: "213",
      name: "shuckle",
      type: ["bug","rock"],
      weaknesses: ["water","rock","steel"]   
      }, 
      {
      num: "183",
      name: "marill",
      type: ["water","fairy"],
      weaknesses: ["eletric","grass","poison"]    
      },
      {
      num: "229",
      name: "houndoom",
      type: ["dark","fire"],
      weaknesses: ["water","fighting","ground","rock"]  
      },
      {
      num: "220",
      name: "swinub",
      type: ["ice","ground"],
      weaknesses: ["fire","water","grass","fighting"]    
      },
      {
      num: "149",
      name: "dragonite",
      type: ["dragon","flying"],
      weaknesses: ["ice","rock","dragon","fairy"]
      },
      {
      num: "001",
      name: "bulbasaur",
      type: ["grass","poison"],
      weaknesses: ["fire","ice","flying","psychic"]  
      },
    ]);
  });

  it('should return pokemons ordered by the highest amount of weaknesses', () => {
    expect(orderOfWeakness(pokemonsForTest, "more-weakness")).toEqual([
      {
      num: "229",    
      name: "houndoom",
      type: ["dark","fire"],
      weaknesses: ["water","fighting","ground","rock"]  
      },
      {
      num: "220",
      name: "swinub",
      type: ["ice","ground"],
      weaknesses: ["fire","water","grass","fighting"]    
      },
      {
      num: "149",
      name: "dragonite",
      type: ["dragon","flying"],
      weaknesses: ["ice","rock","dragon","fairy"]
      },
      {
      num: "001",
      name: "bulbasaur",
      type: ["grass","poison"],
      weaknesses: ["fire","ice","flying","psychic"]  
      },
      {
      num: "213",
      name: "shuckle",
      type: ["bug","rock"],
      weaknesses: ["water","rock","steel"]   
      },
      {
      num: "183",
      name: "marill",
      type: ["water","fairy"],
      weaknesses: ["eletric","grass","poison"]  
      },
      {
      num: "203",
      name: "girafarig",
      type: ["normal","psychic"],
      weaknesses: ["bug","dark"]    
      },
      {
      num: "200",
      name: "misdreavus",
      type: ["ghost"],
      weaknesses: ["ghost","dark"]   
      },  
      {
      num: "205",
      name: "forretress",
      type: ["bug","steel"],
      weaknesses: ["fire"]
      },
      {
      num: "025",
      name: "pikachu",
      type: ["eletric"],
      weaknesses: ["ground"]
      }
    ]); 
  });  
});


/*const something = [
  {      
  num: "205",
  name: "forretress",
  type: ["bug","steel"],
  weaknesses: ["fire"]
  },
  {
  num: "213",
  name: "shuckle",
  type: ["bug","rock"],
  weaknesses: ["water","rock","steel"]   
  }
]*/

describe('percentagePerFilter', () => {
  it('is a function', () => {
    expect(typeof percentagePerFilter).toBe('function');
  });

  it('should return 20% for pokemon type=bug', () => {
    expect(percentagePerFilter(pokemonsForTest)).toEqual(20);
  });
});  
