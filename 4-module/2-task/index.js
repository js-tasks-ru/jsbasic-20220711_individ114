function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i += 1) {
    table.rows[i].cells[i].style.background = "red";
    table.rows[i].cells[table.rows.length - 1 - i].style.background = "red";
  }
}
