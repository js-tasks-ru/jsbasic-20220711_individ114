function filterRange(arr, a, b) {
  let filter = arr.filter((num) => num >= a && num <= b);
  return filter;
}

// function filterRange(arr, a, b) {
//   let filter = arr.filter((num) => num >= a && num <= b).map((elem) => elem);
//   return filter;
// }
