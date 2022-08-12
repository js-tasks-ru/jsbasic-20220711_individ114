import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.html();
    this.clickArrows();
    this.UserClickEvent();
  }

  html() {
    let carusel1 = createElement(`
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
${this.slides
  .map(
    (slide) => `<div class="carousel__slide" data-id="${slide.id}">
  <img src="/assets/images/carousel/${
    slide.image
  }" class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€${slide.price.toFixed(2)}</span>
    <div class="carousel__title">${slide.name}</div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>`
  )
  .join("")}
      </div>
    </div>
    `);
    this.carusel2 = carusel1;
  }

  clickArrows = () => {
    let right = this.carusel2.querySelector(".carousel__arrow_right");
    let left = this.carusel2.querySelector(".carousel__arrow_left");
    let carusel = this.carusel2.querySelector(".carousel__inner");
    let caruselWidth = getComputedStyle(
      this.carusel2.querySelector(".carousel__slide")
    );
    let transCount = 0;
    left.style.display = "none";

    right.addEventListener("click", () => {
      transCount += -parseInt(caruselWidth.width);
      carusel.style.transform = `translateX(${transCount}px)`;
      if (
        transCount ===
        -(parseInt(caruselWidth.width) * (this.slides.length - 1))
      )
        right.style.display = "none";
      left.style.display = "";
    });

    left.addEventListener("click", () => {
      transCount += parseInt(caruselWidth.width);
      carusel.style.transform = `translateX(${transCount}px)`;
      if (transCount === 0) left.style.display = "none";
      right.style.display = "";
    });
  };

  UserClickEvent() {
    this.carusel2.addEventListener("click", (event) => {
      let target = event.target;
      if (target.closest(".carousel__button")) {
        let slide = event.target.closest(".carousel__slide");
        let userEvent = new CustomEvent("product-add", {
          detail: slide.dataset.id,
          bubbles: true,
        });
        console.log(slide.dataset.id);
        this.carusel2.dispatchEvent(userEvent);
      }
      return;
    });
  }

  get elem() {
    return this.carusel2;
  }
}
