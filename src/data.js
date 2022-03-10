export const filterByType = (data, activeFilter) => {
  return data.filter((item) => {
    return item.type[0] === activeFilter || item.type[1] === activeFilter;
  });
};

export const filterByWeakness = (data, activeFilter) => {
  return data.filter((item) => {
    return (
      item.weaknesses[0] === activeFilter ||
      item.weaknesses[1] === activeFilter ||
      item.weaknesses[2] === activeFilter
    );
  });
};

export const alphabeticOrder = (filterByType, selectedOption) => {
  const alphabeticalOrder = filterByType.sort((a, b) => {
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
  });
  if (selectedOption === "name-az") {
    return alphabeticalOrder;
  } else if (selectedOption === "name-za") {
    return alphabeticalOrder.reverse();
  }
};

//export const calcLessWeaknesses = () => {}

//export const calcMoreWeaknesses = () => {}
