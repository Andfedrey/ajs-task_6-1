export default getHeroSort = (hero, arr) => {
  const result = [];
  const notKeyArr = [];
  let index = 0;
  for (const key in hero) {
    if (key === arr[index]) {
      result.push({ key, value: hero[key] });
      index++;
    } else {
      notKeyArr.push({ key, value: hero[key] });
    }
  }

  const sortingAll = notKeyArr.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    if (a.key < b.key) {
      return -1;
    }
    return 0;
  });
  return result.concat(sortingAll);
};
