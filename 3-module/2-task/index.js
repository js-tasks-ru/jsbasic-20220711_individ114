function filterRange(arr, a, b) {
  let filter = [];
  for (let key of arr) {
    if (key >= a && key <= b) {
      filter.push(key);
    }
  }
  return filter;
}
