const timeToString = t => {
  const d =
    t.slice(8, 10) +
    "/" +
    t.slice(5, 7) +
    "/" +
    t.slice(0, 4) +
    " à " +
    t.slice(11, 16);
  return d;
};

export default timeToString;
