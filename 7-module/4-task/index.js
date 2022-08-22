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
    // Находим ползунок
    let thumb = this.elem.querySelector(".slider__thumb");
    thumb.style.position = "absolute";

    // Убираем браузерное событие
    thumb.ondragstart = function (event) {
      event.preventDefault();
    };

    ////////////////////////////////////
    ////////////////////////////////////
    // Обработчик на клик по шкале
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
      let value2 = this.value; // Это для функции metki
      // Процент
      let valuePercents = (this.value / (this.steps - 1)) * 100;

      // Полученное расстояние переносим в стили линии прогресса и ползунка
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

      // Функция за обозначения меток ползунка(активная риска и номер сегмента)
      let metki = function (value2) {
        spans[value2].classList.add("slider__step-active");
        numItem.innerHTML = `${value2}`;
      };

      metki(value2);

      // Создаю пользовательское событие
      let userEvent = new CustomEvent("slider-change", {
        detail: this.value,
        bubbles: true,
      });
      this.elem.dispatchEvent(userEvent);
    });
    ////////////////////////////////////
    ////////////////////////////////////

    // Обработчик события движение ползунка
    thumb.addEventListener("pointerdown", (event) => {
      let onMove = (event) => {
        let rectElemX = this.elem.getBoundingClientRect().left;

        // Добавляю класс в корневой элемент
        this.elem.classList.add("slider_dragging");

        // Задаю координату движения ползунка
        thumb.style.left = `${
          ((event.pageX - rectElemX) / this.elem.clientWidth) * 100
        }%`;
        // Незнаю почему, но ползунок при клике смещается на расстояние от левого края окна до корневого элемента, пришлось исправить так
        // Это нулевая отметка
        let thumbMove = rectElemX - rectElemX;

        // Если координата мышки уходит за нулевую отметку корневого элемента - ползунок остаётся на нуле
        if (event.pageX < rectElemX) {
          thumb.style.left = `${thumbMove}px`;
        }
        // Если координата мышки уходит за корневой элемент - ползунок остаётся на крайней точке корневого элемента
        if (event.pageX > rectElemX + this.elem.clientWidth) {
          thumb.style.left = `${thumbMove + this.elem.clientWidth}px`;
        }

        // Вычисляем расстояние от начала элемента до ползунка
        let left = ((event.pageX - rectElemX) / this.elem.offsetWidth) * 100;

        // Вычисляем месторасположение ползука по шкале от 0(начало шкалы) до 1(конец шкалы)
        let leftRelative = left / 100;

        // Вычисляем местоположение ползунка на шкале сегментов
        let approximateValue = leftRelative * (this.steps - 1);

        // Получаем сегмент
        this.value = Math.round(approximateValue);
        let value3 = this.value; // Это для функции metki2
        // let valuePercents = (this.value / (this.steps - 1)) * 100;
        if (this.value < 0) this.value = 0;
        if (this.value > this.steps - 1) this.value = this.steps - 1;

        // Полученное расстояние переносим в стили линии прогресса и ползунка
        // thumb.style.left = `${valuePercents}%`;
        // progress.style.width = `${left}%`;
        progress.style.width = `${
          ((event.pageX - rectElemX) / this.elem.clientWidth) * 100
        }%`;
        if (event.pageX > rectElemX + this.elem.clientWidth) {
          progress.style.width = `100%`;
        }

        // Цикл удаляющий класс с spans
        let cycle = function () {
          for (let i = 0; i < spans.length; i += 1) {
            spans[i].classList.remove("slider__step-active");
          }
        };

        // Функция за обозначения меток ползунка(активная риска и номер сегмента)
        let metki2 = function (value3) {
          cycle();
          spans[value3].classList.add("slider__step-active");
          numItem.innerHTML = `${value3}`;
        };

        // Условие для функции выше metki2
        if (value3 >= 0 && value3 <= this.steps - 1) {
          metki2(value3);
        }
      };

      // События на перемещение курсора
      document.addEventListener("pointermove", onMove);

      // События на подъём левой кнопки мыши
      document.addEventListener(
        "pointerup",
        () => {
          // Назначаю ползунок и линию на ближайшую позицию
          if (
            (this.value / (this.steps - 1)) * 100 <= 100 &&
            (this.value / (this.steps - 1)) * 100 >= 0
          ) {
            progress.style.width = `${(this.value / (this.steps - 1)) * 100}%`;
            thumb.style.left = `${(this.value / (this.steps - 1)) * 100}%`;
          }

          // Создаю пользовательское событие
          let userEvent = new CustomEvent("slider-change", {
            detail: this.value,
            bubbles: true,
          });
          this.elem.dispatchEvent(userEvent);

          document.removeEventListener("pointermove", onMove);

          this.elem.classList.remove("slider_dragging");
        },
        { once: true }
      );
    });
  }

  get elem() {
    return this.html;
  }
}
