export const debounce = (cb, delay) => {
  let timer = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(cb, delay);
  };
};
