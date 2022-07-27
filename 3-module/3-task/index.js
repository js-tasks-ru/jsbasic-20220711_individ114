// function camelize(str) {
//   let strCamel = [];
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === "-") {
//       strCamel.push(str[i + 1].toUpperCase());
//       i += 1;
//     } else {
//       strCamel.push(str[i]);
//     }
//   }
//   return strCamel.join("");
// }

// ======================================== // Решение чере split и цикл:
// function camelize(str) {
//   let strCamel = [];
//   let arr = str.split("-");
//   for (let i = 0; i < arr.length; i += 1) {
//     i > 0
//       ? strCamel.push(arr[i][0].toUpperCase() + arr[i].slice(1))
//       : strCamel.push(arr[i]);
//   }
//   return strCamel.join("");
// }

// ==========================================// Решение через split and map:
function camelize(str) {
  let strCamel = [];
  let arr = str
    .split("-")
    .map((elem, pos) =>
      pos > 0
        ? strCamel.push(elem[0].toUpperCase() + elem.slice(1))
        : strCamel.push(elem)
    );
  return strCamel.join("");
}
