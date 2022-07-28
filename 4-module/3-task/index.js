function highlight(table) {
  for (let i of table.querySelectorAll("tbody > tr")) {
    console.log(i);
    console.log(i.querySelectorAll("td"));
    let nullAvailable = 0;

    for (let j of i.children) {
      console.log(j);
      if (j.innerHTML === "m") i.classList.add("male");
      if (j.innerHTML === "f") i.classList.add("female");
      if (j.innerHTML < 18) i.style = "text-decoration: line-through";
      if (j.dataset.available === "true") {
        i.classList.add("available");
        continue;
      }
      if (j.dataset.available === "false") {
        i.classList.add("unavailable");
        continue;
      }
      nullAvailable += 1;
      if (nullAvailable == i.children.length) i.hidden = true;
    }
  }
}
