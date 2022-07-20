let calculator = {
  read(a, b) {
    calculator.numOne = a;
    calculator.numTwo = b;
  },
  sum() {
    return calculator.numOne + calculator.numTwo;
  },
  mul() {
    return calculator.numOne * calculator.numTwo;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
