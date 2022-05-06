import {
  searchByName,
  filterBy,
  alphabeticOrder,
  orderOfWeakness,
  percentagePerFilter,
  filterRarity
} from "../src/pages/filters/js/data.js";

const pokemonsForTest = [
  {
    num: "001",
    name: "bulbasaur",
    type: ["grass", "poison"],
    weaknesses: ["fire", "ice", "flying", "psychic"],
    resistant: ["water", "electric", "grass", "fighting", "fairy"]
  },
  {
    num: "025",
    name: "pikachu",
    type: ["eletric"],
    weaknesses: ["ground"],
    resistant:["electric", "flying", "steel"]
  },
  {
    num: "149",
    name: "dragonite",
    type: ["dragon", "flying"],
    weaknesses: ["ice", "rock", "dragon", "fairy"],
    resistant: ["fire", "water", "grass", "fighting", "ground"]
  },
  {
    num: "183",
    name: "marill",
    type: ["water", "fairy"],
    weaknesses: ["eletric", "grass", "poison"],
    resistant: ["fire", "water", "ice", "fighting", "bug"]
  },
  {
    num: "200",
    name: "misdreavus",
    type: ["ghost"],
    weaknesses: ["ghost", "dark"],
    resistant: ["normal","fighting", "poison", "bug"]
  },
  {
    num: "203",
    name: "girafarig",
    type: ["normal", "psychic"],
    weaknesses: ["bug", "dark"],
    resistant: ["psychic"]
  },
  {
    num: "205",
    name: "forretress",
    type: ["bug", "steel"],
    weaknesses: ["fire"],
    resistant: ["normal", "grass", "ice", "poison", "psychic"]
  },
  {
    num: "213",
    name: "shuckle",
    type: ["bug", "rock"],
    weaknesses: ["water", "rock", "steel"],
    resistant: ["normal", "poison"]
  },
  {
    num: "220",
    name: "swinub",
    type: ["ice", "ground"],
    weaknesses: ["fire", "water", "grass", "fighting"],
    resistant: ["electric", "poison"]
  },
  {
    num: "229",
    name: "houndoom",
    type: ["dark", "fire"],
    weaknesses: ["water", "fighting", "ground", "rock"],
    resistant: ["fire", "grass", "ice", "psychic", "ghost"]
  },
];

describe("searchByName", () => {
  it("is a function", () => {
    expect(typeof searchByName).toBe("function");
  });

  it('should return bulbasaur when typed "bulbasaur"', () => {
    expect(searchByName(pokemonsForTest, "bulbasaur")).toEqual([
      pokemonsForTest[0],
    ]);
  });
});

describe("filterBy", () => {
  it("is a function", () => {
    expect(typeof filterBy).toBe("function");
  });

  it("should return pokemons filtered by type = bug", () => {
    expect(filterBy(pokemonsForTest, "type", "bug")).toEqual([
      pokemonsForTest[6],
      pokemonsForTest[7],
    ]);
  });

  it("should return pokemons filtered by weaknesses = fire", () => {
    expect(filterBy(pokemonsForTest, "weaknesses", "fire")).toEqual([
      pokemonsForTest[0],
      pokemonsForTest[6],
      pokemonsForTest[8],
    ]);
  });

  it("should return pokemons filtered resistant = psychic", () => {
    expect(filterBy(pokemonsForTest, "resistant", "psychic")).toEqual([
      pokemonsForTest[5],
      pokemonsForTest[6],
      pokemonsForTest[9],
    ]);
  });  
});

const pokemonForTestAZ = [
  {
    num: "001",
    name: "bulbasaur",
    type: ["grass", "poison"],
    weaknesses: ["fire", "ice", "flying", "psychic"],
    resistant: ["water", "electric", "grass", "fighting", "fairy"]
  },
  {
    num: "149",
    name: "dragonite",
    type: ["dragon", "flying"],
    weaknesses: ["ice", "rock", "dragon", "fairy"],
    resistant: ["fire", "water", "grass", "fighting", "ground"]
  },
  {
    num: "205",
    name: "forretress",
    type: ["bug", "steel"],
    weaknesses: ["fire"],
    resistant: ["normal", "grass", "ice", "poison", "psychic"]
  },
  {
    num: "203",
    name: "girafarig",
    type: ["normal", "psychic"],
    weaknesses: ["bug", "dark"],
    resistant: ["psychic"]
  },
  {
    num: "229",
    name: "houndoom",
    type: ["dark", "fire"],
    weaknesses: ["water", "fighting", "ground", "rock"],
    resistant: ["fire", "grass", "ice", "psychic", "ghost"]
  },
  {
    num: "183",
    name: "marill",
    type: ["water", "fairy"],
    weaknesses: ["eletric", "grass", "poison"],
    resistant: ["fire", "water", "ice", "fighting", "bug"]
  },
  {
    num: "200",
    name: "misdreavus",
    type: ["ghost"],
    weaknesses: ["ghost", "dark"],
    resistant: ["normal","fighting", "poison", "bug"]
  },
  {
    num: "025",
    name: "pikachu",
    type: ["eletric"],
    weaknesses: ["ground"],
    resistant:["electric", "flying", "steel"]
  },
  {
    num: "213",
    name: "shuckle",
    type: ["bug", "rock"],
    weaknesses: ["water", "rock", "steel"],
    resistant: ["normal", "poison"]
  },
  {
    num: "220",
    name: "swinub",
    type: ["ice", "ground"],
    weaknesses: ["fire", "water", "grass", "fighting"],
    resistant: ["electric", "poison"]
  },
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
      pokemonsForTest[9],
    ]);
  });

  it("should return pokemons sorted by name A-Z", () => {
    expect(alphabeticOrder(pokemonsForTest, "name-az")).toEqual(
      pokemonForTestAZ
    );
  });

  it("should return pokemons sorted by name Z-A", () => {
    expect(alphabeticOrder(pokemonsForTest, "name-za")).toEqual(
      pokemonForTestAZ.reverse()
    );
  });
});

const pokemonForTestLessWeakness = [
  { weaknesses: ["fire"] },
  { weaknesses: ["ground"] },
  { weaknesses: ["bug", "dark"] },
  { weaknesses: ["ghost", "dark"] },
  { weaknesses: ["water", "rock", "steel"] },
  { weaknesses: ["eletric", "grass", "poison"] },
  { weaknesses: ["water", "fighting", "ground", "rock"] },
  { weaknesses: ["fire", "water", "grass", "fighting"] },
  { weaknesses: ["ice", "rock", "dragon", "fairy"] },
  { weaknesses: ["fire", "ice", "flying", "psychic"] },
];

const pokemonForTestMoreWeakness = [
  { weaknesses: ["water", "fighting", "ground", "rock"] },
  { weaknesses: ["fire", "water", "grass", "fighting"] },
  { weaknesses: ["ice", "rock", "dragon", "fairy"] },
  { weaknesses: ["fire", "ice", "flying", "psychic"] },
  { weaknesses: ["water", "rock", "steel"] },
  { weaknesses: ["eletric", "grass", "poison"] },
  { weaknesses: ["bug", "dark"] },
  { weaknesses: ["ghost", "dark"] },
  { weaknesses: ["fire"] },
  { weaknesses: ["ground"] },
];

describe("orderOfWeakness", () => {
  it("is a function", () => {
    expect(typeof orderOfWeakness).toBe("function");
  });

  it("should return pokemons ordered by the least amount of weaknesses", () => {
    expect(
      orderOfWeakness(pokemonForTestLessWeakness, "less-weakness")
    ).toStrictEqual(pokemonForTestLessWeakness);
  });

  it("should return pokemons ordered by the highest amount of weaknesses", () => {
    expect(
      orderOfWeakness(pokemonForTestMoreWeakness, "more-weakness")
    ).toStrictEqual(pokemonForTestMoreWeakness);
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
  },
];

describe("percentagePerFilter", () => {
  it("is a function", () => {
    expect(typeof percentagePerFilter).toBe("function");
  });

  it("should return 20% for pokemon type=bug", () => {
    expect(
      percentagePerFilter(pokemonsBugs.length, pokemonsForTest.length)
    ).toEqual(20);
  });
});

const pokemonRarityTest = [
  {
    name: "mew",
    ['pokemon-rarity']:"mythic"
  },
  {
    name: "celebi",
    ['pokemon-rarity']:"mythic"
  },
  {
    name: "mewtwo",
    ['pokemon-rarity']:"legendary"
  },
  {
    name: "rattata",
    ['pokemon-rarity']:"normal"
  }
];  

describe("percentagePerFilter", () => {
  it("is a function", () => {
    expect(typeof filterRarity).toBe("function");
  });

  it('should return Mew and Celebi for pokemon-rarity=mythic', () => {
    expect(filterRarity(pokemonRarityTest, "mythic")).toEqual([
      pokemonRarityTest[0],
      pokemonRarityTest[1]
    ])
  });
});  
