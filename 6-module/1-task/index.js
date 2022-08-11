/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.mans = rows;
    this.tableHTML = document.createElement("table");
    this.elem;
    this.removed();
    this.div();
  }

  div() {
    let html = `<thead>
    <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
    </tr>
</thead>
<tbody>
        ${this.mans
          .map(
            (key) => `<tr data-component="tr">
          <td>${key.name}</td>
          <td>${key.age}</td>
          <td>${key.salary}</td>
          <td>${key.city}</td>
          <td><button data-action="remove">X</button></td>
          </tr>`
          )
          .join("")}
</tbody>`;
    this.tableHTML.innerHTML = html;
  }

  removed() {
    this.tableHTML.addEventListener("click", (event) => {
      let target = event.target;
      if (target.dataset.action !== "remove") {
        return;
      }
      let tr = target.closest("[data-component='tr']");
      if (!tr) {
        return;
      }
      tr.remove();
    });
  }

  get elem() {
    return this.tableHTML;
  }
}

///////////////////////////////  Ниже вариант другого участника курса.

// export default class UserTable {
//   constructor(rows) {
//     this.mans = rows;
//     this.elem = document.createElement("table");
//     this.makeHTML();
//   }

//   makeHTML() {
//     let cell = `<thead>
//     <tr>
//         <th>Имя</th>
//         <th>Возраст</th>
//         <th>Зарплата</th>
//         <th>Город</th>
//         <th></th>
//     </tr>
// </thead>
// <tbody>
//         ${this.mans
//           .map(
//             (key) => `<tr data-component="tr">
//           <td>${key.name}</td>
//           <td>${key.age}</td>
//           <td>${key.salary}</td>
//           <td>${key.city}</td>
//           <td><button data-action="remove">X</button></td>
//           </tr>`
//           )
//           .join("")}
// </tbody>`;
//     this.elem.innerHTML = cell;
//     for (let btnlist of this.elem.querySelectorAll("button"))
//       btnlist.addEventListener("click", this);
//   }

//   handleEvent(event) {
//     let row = event.target.parentElement.parentElement;
//     row.remove();
//   }
// }
