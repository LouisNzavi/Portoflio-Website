export const className = (...classes) => {
  return classes.filter(Boolean).join("");
};

//The filter(Boolean) trick: https://michaeluloth.com/filter-boolean
