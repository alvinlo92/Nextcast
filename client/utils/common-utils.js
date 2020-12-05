const debounce = (cb, time) => {
  let id = null;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => cb(...args), time);
  };
};

export default debounce;
