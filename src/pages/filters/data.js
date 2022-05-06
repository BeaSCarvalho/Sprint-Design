export const searchByName = (data, condition) => {
  const typedName = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(condition.toLowerCase())
  );
  return typedName;
};

export const filterBy = (
  data,
  selectedValueTypeOrWeakness,
  selectedValueAttribute
) => {
  switch (selectedValueTypeOrWeakness) {
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

export const filterRarity = (data, selectedOption) => {
  return data.filter((item) => {
    return item.rarity == selectedOption;
  });
};

export const alphabeticOrder = (data, selectedOption) => {
  if (selectedOption === "number") {
    return data.sort((a, b) => (a.num > b.num ? 1 : -1));
  }
  if (selectedOption === "name-az") {
    return data.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (selectedOption === "name-za") {
    return data.sort((a, b) => (a.name > b.name ? -1 : 1));
  }
};

export const orderOfWeakness = (data, selectedOrder) => {
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

export const percentagePerFilter = (resultOfFilters, totalOfPokemons) => {
  const percentageOfPokemons = (resultOfFilters / totalOfPokemons) * 100;
  const roundedNumber = Math.round(percentageOfPokemons * 100) / 100;
  return roundedNumber;
};