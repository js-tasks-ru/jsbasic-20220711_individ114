export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.html = document.createElement("div");
    this.spans();
    this.rootHTML();
    this.clicks();
  }

  // Создаю массив span'ов по заданному количеству
  spans() {
    let arr = [];
    for (let i = 0; i < this.steps; i += 1) {
      arr.push(`<span></span>`);
    }
    this.span = arr;
  }

  rootHTML() {
    this.html.classList.add("slider");
    let code = `
  <!--Ползунок слайдера с активным значением-->
  <div class="slider__thumb">
    <span class="slider__value">0</span>
  </div>

  <!--Полоска слайдера-->
  <div class="slider__progress"></div>

  <!-- Шаги слайдера (вертикальные чёрточки) -->
  <div class="slider__steps">
    <!-- текущий выбранный шаг выделен этим классом -->
    ${this.span.join("")}
    
</div>`;
    this.html.innerHTML = code;
  }

  clicks() {
    // Берём полосу прокрутки(ставим на 0), а так же наxодим спаны и присваиваем класс первой(нулевой) риске
    let progress = this.elem.querySelector(".slider__progress");
    progress.style.width = "0%";
    let spans = this.elem
      .querySelector(".slider__steps")
      .querySelectorAll("span");
    spans[0].classList.add("slider__step-active");

    // Определяю номер сегмента слайдера
    let numItem = this.elem.querySelector(".slider__value");

    // Создаём делегированный обработчик событий
    this.html.addEventListener("click", (event) => {
      // Определяем местоположение элемента и берём координаты его начала
      let rect = this.html.getBoundingClientRect();
      let x = rect.x;

      // Делаем удаление классов предыдущих активных рисок(спанов)
      for (let i = 0; i < spans.length; i += 1) {
        spans[i].classList.remove("slider__step-active");
      }

      // Находим ползунок
      let thumb = this.elem.querySelector(".slider__thumb");

      // Вычисляем расстояние от начала элемента до клика
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      // Вычисляем клик по шкале от 0 до 1
      let leftRelative = left / this.elem.offsetWidth;
      // Вычисляем клик на шкале сегментов
      let approximateValue = leftRelative * (this.steps - 1);
      // Получаем сегмент
      this.value = Math.round(approximateValue);
      let valuePercents = (this.value / (this.steps - 1)) * 100;

      // Полученное расстояние переносим в стили линии прогресса и ползунка
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

      if (valuePercents === 0) {
        spans[0].classList.add("slider__step-active");
        numItem.innerHTML = "0";
      }
      if (valuePercents === 25) {
        spans[1].classList.add("slider__step-active");
        numItem.innerHTML = "1";
      }
      if (valuePercents === 50) {
        spans[2].classList.add("slider__step-active");
        numItem.innerHTML = "2";
      }
      if (valuePercents === 75) {
        spans[3].classList.add("slider__step-active");
        numItem.innerHTML = "3";
      }
      if (valuePercents === 100) {
        spans[4].classList.add("slider__step-active");
        numItem.innerHTML = "4";
      }

      // Создаю пользовательское событие
      let userEvent = new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true,
      });
      this.elem.dispatchEvent(userEvent);

      // Ниже моё решение до прочтения подсказки. При нём тест не проходили перемещение ползунка и прогресса по клику, хотя всё работало исправно

      /*
      // Высчитываем расстояние от начала шкалы до места клика с переводом в проценты
      let leftPercents = (event.clientX - x) / (this.html.clientWidth / 100);

      // Полученное расстояние переносим в стили линии прогресса и ползунка
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;

      // Задаю условия переключения
      if (leftPercents < 13) {
        thumb.style.left = `0%`;
        progress.style.width = `0%`;
        spans[0].classList.add("slider__step-active");
        numItem.innerHTML = "0";
        this.value = 0;
      }
      if (leftPercents > 13 && leftPercents < 38) {
        thumb.style.left = `25%`;
        progress.style.width = `25%`;
        spans[1].classList.add("slider__step-active");
        numItem.innerHTML = "1";
        this.value = 1;
      }
      if (leftPercents > 38 && leftPercents < 63) {
        thumb.style.left = `50%`;
        progress.style.width = `50%`;
        spans[2].classList.add("slider__step-active");
        numItem.innerHTML = "2";
        this.value = 2;
      }
      if (leftPercents > 63 && leftPercents < 87) {
        thumb.style.left = `75%`;
        progress.style.width = `75%`;
        spans[3].classList.add("slider__step-active");
        numItem.innerHTML = "3";
        this.value = 3;
      }
      if (leftPercents > 87) {
        thumb.style.left = `100%`;
        progress.style.width = `100%`;
        spans[4].classList.add("slider__step-active");
        numItem.innerHTML = "4";
        this.value = 4;
      }

      // Создаю пользовательское событие
      let userEvent = new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true,
      });
      this.elem.dispatchEvent(userEvent);
      */
    });
  }

  get elem() {
    return this.html;
  }
}
