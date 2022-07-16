/**
 * Эту функцию трогать не нужно`
 */
function print(text) {
  console.log(text);
}

/*
  Эту функцию нужно поменять так,
  чтобы функция sayHello работала корректно
  @param {string | null} name
  @returns {boolean}
 */
function isValid(name) {
  if (name && name.length >= 4) {
    for (let i = 0; i < name.length; i += 1) {
      if (name[i] === " ") {
        return false;
      }
    }
    return true;
  }
  return false;
}

/**
 * Эту функцию трогать не нужно
 */
function sayHello() {
  let userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}

sayHello();