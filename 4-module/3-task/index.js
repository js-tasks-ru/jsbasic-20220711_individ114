function highlight(table) {
  for (let listTr of table.querySelectorAll("tbody > tr")) {
    if (listTr.children[2].innerHTML === "m") listTr.classList.add("male");
    if (listTr.children[2].innerHTML === "f") listTr.classList.add("female");
    if (listTr.children[1].innerHTML < 18)
      listTr.style = "text-decoration: line-through";
    if (listTr.children[3].dataset.available === "true") {
      listTr.classList.add("available");
      continue;
    }
    if (listTr.children[3].dataset.available === "false") {
      listTr.classList.add("unavailable");
      continue;
    }

    if (listTr.children[3].dataset.available === undefined)
      listTr.hidden = true;
  }
}
// function highlight(table) {
//   for (let listTr of table.querySelectorAll("tbody > tr")) {
//     let nullAvailable = 0;

//     for (let j of listTr.children) {
//       if (j.innerHTML === "m") listTr.classList.add("male");
//       if (j.innerHTML === "f") listTr.classList.add("female");
//       if (j.innerHTML < 18) listTr.style = "text-decoration: line-through";
//       if (j.dataset.available === "true") {
//         listTr.classList.add("available");
//         continue;
//       }
//       if (j.dataset.available === "false") {
//         listTr.classList.add("unavailable");
//         continue;
//       }
//       nullAvailable += 1;
//       if (nullAvailable == listTr.children.length) listTr.hidden = true;
//     }
//   }
// }
