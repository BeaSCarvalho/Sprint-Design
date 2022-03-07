export const alphabeticOrder = (data, selectOption) => {
  const orderNames = data.pokemon.sort((a, b) => a.name.localeCompare(b.name));
  switch (selectOption) {
    case "name-az":
      return orderNames;
    case "name-za":
      return orderNames.reverse();
  }
};
