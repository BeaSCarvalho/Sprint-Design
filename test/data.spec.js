import {
  searchByName,
  filterBy,
  alphabeticOrder,
  orderOfWeakness,
  percentagePerFilter,
} from "../src/data.js";

const pokemonsForTest = [
  {
    num: "001", 
    name: "bulbasaur",
    type: ["grass", "poison"],
    weaknesses: ["fire", "ice", "flying", "psychic"],
  },
  {
    num: "025", 
    name: "pikachu",
    type: ["eletric"],
    weaknesses: ["ground"],
  },
  {
    num: "149", 
    name: "dragonite",
    type: ["dragon", "flying"],
    weaknesses: ["ice", "rock", "dragon", "fairy"],
  },
  {
    num: "183", 
    name: "marill",
    type: ["water", "fairy"],
    weaknesses: ["eletric", "grass", "poison"],
  },
  {
    num: "200", 
    name: "misdreavus",
    type: ["ghost"],
    weaknesses: ["ghost", "dark"],
  },
  {
    num: "203", 
    name: "girafarig",
    type: ["normal", "psychic"],
    weaknesses: ["bug", "dark"],
  },
  {
    num: "205", 
    name: "forretress",
    type: ["bug", "steel"],
    weaknesses: ["fire"],
  },
  {
    num: "213", 
    name: "shuckle",
    type: ["bug", "rock"],
    weaknesses: ["water", "rock", "steel"],
  },
  {
    num: "220", 
    name: "swinub",
    type: ["ice", "ground"],
    weaknesses: ["fire", "water", "grass", "fighting"],
  },
  {
    num: "229", 
    name: "houndoom",
    type: ["dark", "fire"],
    weaknesses: ["water", "fighting", "ground", "rock"],
  },
];

describe("searchByName", () => {
  it("is a function", () => {
    expect(typeof searchByName).toBe("function");
  });

  it('should return bulbasaur when typed "bulbasaur"', () => {
    expect(searchByName(pokemonsForTest, "bulbasaur")).toEqual([pokemonsForTest[0]]);
  });
});

describe("filterBy", () => {
  it("is a function", () => {
    expect(typeof filterBy).toBe("function");
  });

  it("should return pokemons filtered by type = bug", () => {
    expect(filterBy(pokemonsForTest, "type", "bug")).toEqual([
      pokemonsForTest[6],
      pokemonsForTest[7]
    ]);
  });
  
  it("should return pokemons filtered by weaknesses = fire", () => {
    expect(filterBy(pokemonsForTest, "weaknesses", "fire")).toEqual([
      pokemonsForTest[0],
      pokemonsForTest[6],
      pokemonsForTest[8]
    ]);
  });
});

const pokemonForTestAZ = [
  {
  num: "001", 
  name: "bulbasaur",
  type: ["grass", "poison"],
  weaknesses: ["fire", "ice", "flying", "psychic"],
  },
  {
  num: "149",
  name: "dragonite",
  type: ["dragon", "flying"],
  weaknesses: ["ice", "rock", "dragon", "fairy"],
  },
  {
  num: "205", 
  name: "forretress",
  type: ["bug", "steel"],
  weaknesses: ["fire"],
  },
  {
  num: "203", 
  name: "girafarig",
  type: ["normal", "psychic"],
  weaknesses: ["bug", "dark"],
  },
  {
  num: "229", 
  name: "houndoom",
  type: ["dark", "fire"],
  weaknesses: ["water", "fighting", "ground", "rock"],
  },
  {
  num: "183", 
  name: "marill",
  type: ["water", "fairy"],
  weaknesses: ["eletric", "grass", "poison"],
  },
  {
  num: "200", 
  name: "misdreavus",
  type: ["ghost"],
  weaknesses: ["ghost", "dark"],
  },
  {
  num: "025", 
  name: "pikachu",
  type: ["eletric"],
  weaknesses: ["ground"],
  },
  {
  num: "213", 
  name: "shuckle",
  type: ["bug", "rock"],
  weaknesses: ["water", "rock", "steel"],
  },
  {
  num: "220", 
  name: "swinub",
  type: ["ice", "ground"],
  weaknesses: ["fire", "water", "grass", "fighting"],
  }
];

describe("alphabeticOrder", () => {
  it("is a function", () => {
    expect(typeof alphabeticOrder).toBe("function");
  });

  it("should return pokemons sorted by number", () => {
    expect(alphabeticOrder(pokemonsForTest, "number")).toEqual([
      pokemonsForTest[0],
      pokemonsForTest[1],
      pokemonsForTest[2],
      pokemonsForTest[3],
      pokemonsForTest[4],
      pokemonsForTest[5],
      pokemonsForTest[6],
      pokemonsForTest[7],
      pokemonsForTest[8],
      pokemonsForTest[9]
    ]);
  });

  it("should return pokemons sorted by name A-Z", () => {
    expect(alphabeticOrder(pokemonsForTest, "name-az")).toEqual(pokemonForTestAZ);
  });  

  it("should return pokemons sorted by name Z-A", () => {
    expect(alphabeticOrder(pokemonsForTest, "name-za")).toEqual(pokemonForTestAZ.reverse())
  });
});

const pokemonForTestLessWeakness = [
  {weaknesses: ["fire"]},
  {weaknesses: ["ground"]},
  {weaknesses: ["bug", "dark"]},
  {weaknesses: ["ghost", "dark"]},
  {weaknesses: ["water", "rock", "steel"]},
  {weaknesses: ["eletric", "grass", "poison"]},
  {weaknesses: ["water", "fighting", "ground", "rock"]},
  { weaknesses: ["fire", "water", "grass", "fighting"]},
  {weaknesses: ["ice", "rock", "dragon", "fairy"]},
  {weaknesses: ["fire", "ice", "flying", "psychic"]}
];  

const pokemonForTestMoreWeakness = [
  {weaknesses: ["water", "fighting", "ground", "rock"]},
  {weaknesses: ["fire", "water", "grass", "fighting"]},
  {weaknesses: ["ice", "rock", "dragon", "fairy"]},
  {weaknesses: ["fire", "ice", "flying", "psychic"]},
  {weaknesses: ["water", "rock", "steel"]},
  {weaknesses: ["eletric", "grass", "poison"]},
  {weaknesses: ["bug", "dark"]},
  {weaknesses: ["ghost", "dark"]},
  {weaknesses: ["fire"]},
  {weaknesses: ["ground"]}  
];

describe("orderOfWeakness", () => {
  it("is a function", () => {
    expect(typeof orderOfWeakness).toBe("function");
  });

  it("should return pokemons ordered by the least amount of weaknesses", () => {
    expect(orderOfWeakness(pokemonForTestLessWeakness, "less-weakness")).toStrictEqual(pokemonForTestLessWeakness);
  });  
      
  it("should return pokemons ordered by the highest amount of weaknesses", () => {
    expect(orderOfWeakness(pokemonForTestMoreWeakness, "more-weakness")).toStrictEqual(pokemonForTestMoreWeakness);   
  });
});

const pokemonsBugs = [
  {
    num: "205",
    name: "forretress",
    type: ["bug", "steel"],
    weaknesses: ["fire"],
  },
  {
    num: "213",
    name: "shuckle",
    type: ["bug", "rock"],
    weaknesses: ["water", "rock", "steel"],
  }
]

describe("percentagePerFilter", () => {
  it("is a function", () => {
    expect(typeof percentagePerFilter).toBe("function");
  });

  it("should return 20% for pokemon type=bug", () => {
    expect(percentagePerFilter(pokemonsBugs.length, pokemonsForTest.length)).toEqual(20);
  });
});

