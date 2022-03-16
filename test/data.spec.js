import {
  searchByName,
  filterByType,
  filterByWeakness,
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
    expect(typeof filterByType).toBe("function");
  });

  it('should return bulbasaur when typed "bulbasaur"', () => {
    expect(searchByName(pokemonsForTest, "bulbasaur")).toEqual([0]);
  });
});

describe("filterByType", () => {
  it("is a function", () => {
    expect(typeof filterByType).toBe("function");
  });

  it("should return pokemons filtered by type = bug", () => {
    expect(filterByType(pokemonsForTest, "bug")).toEqual([0,7]);
  });
});

describe("filterByWeakness", () => {
  it("is a function", () => {
    expect(typeof filterByWeakness).toBe("function");
  });

  it("should return pokemons filtered by weaknesses = fire", () => {
    expect(filterByWeakness(pokemonsForTest, "fire")).toEqual([0,6,8]);
  });
});

describe("alphabeticOrder", () => {
  it("is a function", () => {
    expect(typeof alphabeticOrder).toBe("function");
  });

  it("should return pokemons sorted by name A-Z", () => {
    expect(alphabeticOrder(pokemonsForTest, "name-az")).toEqual([0,2,6,5,9,3,4,1,7,8]);
  });

  it("should return pokemons sorted by name Z-A", () => {
    expect(alphabeticOrder(pokemonsForTest, "name-za")).toEqual([8,7,1,4,3,9,5,6,2,0]);
  });

  it("should return pokemons sorted by number", () => {
    expect(alphabeticOrder(pokemonsForTest, "number")).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });
});

describe("orderOfWeakness", () => {
  it("is a function", () => {
    expect(typeof orderOfWeakness).toBe("function");
  });

  it("should return pokemons ordered by the least amount of weaknesses", () => {
    expect(orderOfWeakness(pokemonsForTest, "less-weakness")).toEqual([6,1,5,4,7,3,9,8,2,0]);
  });

  it("should return pokemons ordered by the highest amount of weaknesses", () => {
    expect(orderOfWeakness(pokemonsForTest, "more-weakness")).toEqual([9,8,2,0,7,3,5,4,6,1]);
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
    const totalOfPokemons = pokemonsForTest.length;
    expect(percentagePerFilter(pokemonsBugs, totalOfPokemons)).toEqual(20);
  });
});

