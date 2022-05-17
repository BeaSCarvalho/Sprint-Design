let optionAlphabeticOrder = "";
let optionFilterBy = "";
let optionFilterElements = "";
let optionFilterRarity = "";
let optionOrderOfWeakness = "";

/*
  Number / AZ / ZA  --> Rarity, Weakness , Types  --> 3 opções * 3 = 9 opções
  Number / AZ/ ZA --> Rarity e Waekness , Rarity e Types, Weakeness e Type --> 9 opções
  Number / AZ / ZA --> Rarity, Weakness e Types --> 3 opções
  TOTALIZANDO: 21 opções de escolhas "geral"
  Como FilterBy é atrelado aos Elementos, não é necessário "filtrar os elementos"
*/

export const filtersResult = (data, selectedOption) => {
  let pokemonCollection = [];
  switch (selectedOption) {
    case 'number':
    case 'name-az':
    case 'name-za':
      optionAlphabeticOrder = selectedOption;
      break;
    case 'normal':
    case 'legendary':
    case 'mythic':
      optionFilterRarity = selectedOption;
      break;
    case 'less-weakness':
    case 'more-weakness':
      optionOrderOfWeakness = selectedOption;
      break;
    case 'type':
    case 'weaknesses':
    case 'resistant':
      optionFilterBy = selectedOption;
      break;
    default:
  }

  /* one activated filter */
  if (optionFilterElements === "" && optionFilterRarity === "" && optionOrderOfWeakness === "") {
    return alphabeticOrder(data, optionAlphabeticOrder);
  }

  /* four activated filter */
  if (optionFilterElements !== "" && optionFilterRarity !== "" && optionOrderOfWeakness !== "") {
    pokemonCollection = alphabeticOrder(data, optionAlphabeticOrder);
    pokemonCollection = filterRarity(pokemonCollection, optionFilterRarity);
    pokemonCollection = orderOfWeakness(pokemonCollection, optionOrderOfWeakness);
    pokemonCollection = filterElements(pokemonCollection, optionFilterElements);
    return pokemonCollection;
  }
  
  /* three activated filter */
  if (optionFilterRarity !== "" && optionOrderOfWeakness !== "" && optionFilterElements === "") {
    pokemonCollection = alphabeticOrder(data, optionAlphabeticOrder);
    pokemonCollection = filterRarity(pokemonCollection, optionFilterRarity);
    pokemonCollection = orderOfWeakness(pokemonCollection, optionOrderOfWeakness);
    return pokemonCollection;
  } 
  
  if (optionFilterRarity !== "" && optionOrderOfWeakness === "" && optionFilterElements !== "") {
    pokemonCollection = alphabeticOrder(data, optionAlphabeticOrder);
    pokemonCollection = filterRarity(pokemonCollection, optionFilterRarity);
    pokemonCollection = filterElements(pokemonCollection, optionFilterElements);
    return pokemonCollection;
  }

  if (optionFilterRarity === "" && optionOrderOfWeakness !== "" && optionFilterElements !== "") {
    pokemonCollection = alphabeticOrder(data, optionAlphabeticOrder);
    pokemonCollection = orderOfWeakness(pokemonCollection, optionOrderOfWeakness);
    pokemonCollection = filterElements(pokemonCollection, optionFilterElements);
    return pokemonCollection;
  }

  /* two activated filter */
  if (optionFilterElements !== ""){
    return alphabeticOrder(filterElements(data, selectedOption));
  } 
  if (optionFilterRarity !== ""){
    return alphabeticOrder(filterRarity(data, selectedOption));
  } 
  if (optionOrderOfWeakness !== "") {
    return alphabeticOrder(orderOfWeakness(data, selectedOption));
  }
};

export const alphabeticOrder = (data, selectedOption) => {
  if (selectedOption === "number") {
    return data.sort((a, b) => (a.num > b.num ? 1 : -1));
  }
  if (selectedOption === "name-az") {
    return data.sort((a, b) => (a.name > b.name ? 1 : -1));
  }
  if (selectedOption === "name-za") {
    return data.sort((a, b) => (a.name > b.name ? -1 : 1));
  }
};

const filterRarity = (data, selectedOption) => {
  return data.filter((item) => {
    return item.rarity == selectedOption;
  });
};

const orderOfWeakness = (data, selectedOrder) => {
  if (selectedOrder === "less-weakness") {
    return data.sort((a, b) =>
      a.weaknesses.length > b.weaknesses.length ? 1 : -1
    );
  } else if (selectedOrder === "more-weakness") {
    return data.sort((a, b) =>
      a.weaknesses.length > b.weaknesses.length ? -1 : 1
    );
  }
};

const filterElements = (data, selectedValueAttribute) => {
  optionFilterElements = selectedValueAttribute;
  switch (optionFilterBy) {
    case "type":
      return data.filter((item) => {
        return item.type.includes(selectedValueAttribute);
      });
    case "weaknesses":
      return data.filter((item) => {
        return item.weaknesses.includes(selectedValueAttribute);
      });
    case "resistant":
      return data.filter((item) => {
        return item.resistant.includes(selectedValueAttribute);
      });
  }
};

export const searchByName = (data, condition) => {
  return data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(condition.toLowerCase())
  );
};

export const percentagePerFilter = (resultOfFilters, totalOfPokemons) => {
  const percentageOfPokemons = (resultOfFilters / totalOfPokemons) * 100;
  const roundedNumber = Math.round(percentageOfPokemons * 100) / 100;
  return roundedNumber;
};

export const cleanFilters = () => {
  optionAlphabeticOrder = "";
  optionFilterBy = "";
  optionFilterElements = "";
  optionFilterRarity = "";
  optionOrderOfWeakness = "";
}