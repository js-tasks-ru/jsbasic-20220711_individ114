// Переделал на includes

function checkSpam(str) {
  let spamWords = ["XXX", "1xBet", "QwErTy"];
  for (let i = 0; i < spamWords.length; i += 1) {
    let result = str.toLowerCase().includes(spamWords[i].toLowerCase());
    if (result) {
      return true;
    }
  }
  return false;
}

// Ниже закомментирован код, который написал сам по имеющимся знаниям,
// но, очевидно, он не актуальный. Нашёл более подходящий. https://learn.javascript.ru/regexp-methods

// function checkSpam(str) {
//   let spamWords = ["XXX", "1xBet", "QwErTy"];
//   for (let i = 0; i < spamWords.length; i += 1) {
//     let result = str.toLowerCase().match(spamWords[i].toLowerCase(), "g");
//     if (result) {
//       return true;
//     }
//   }
//   return false;
// }

// //////////////////////////////////////////////////////////////////
// Спам лист
// let spamWords = ["xxx", "1xBet"];

// function checkSpam(str) {
//       for (let i = 0; i < str.length; i += 1) {

// Создаём пустой массив для складирования в нём комбинаций/вариаций букв str
// на проверку
//             let yyy = [];

//В этом цикле поочерёдно добавляем/проверяем буквы из str на совпадение по спам листу
//             for (
//                   let j = 0;
//                   j < spamWords.join("").length;
//                   j += 1
//             ) {

// Переменная zzz объявлена для передачи значения из yyy, потому-что yyy сбивается при .join("")
//                   let zzz = null;

//                   yyy.push(str[i + j]);
//                   zzz = yyy.join("");

// Здесь было третье вложение цикла for, но перенёс его в отдельную функцию
//                   if (getSpam(spamWords, zzz)) {
//                         return true;
//                   }
//             }
//       }

//       return false;
// }

// В этом цикле проверяются собранные буквы в zzz на соответствие спам листу
// function getSpam(spamWords, zzz) {
//       for (let t = 0; t < spamWords.length; t += 1) {
//             if (
//                   spamWords[t].toUpperCase() ==
//                   zzz.toUpperCase()
//             ) {
//                   return true;
//             }
//       }
// }
