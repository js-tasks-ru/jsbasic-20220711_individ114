import createElement from "../../assets/lib/create-element.js";
export default class ProductCard {
  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.image = product.image;
    this.id = product.id;
    this.elem;
    this.html();
    this.click();
  }

  html() {
    let table = createElement(`<div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${
          this.image
        }" class="card__image" alt="product">
        <span class="card__price">€${this.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>`);
    this.card = table;
  }

  button() {
    return this.card.querySelector(".card__button");
  }

  click() {
    this.button().addEventListener("click", this.eventPlus);
  }

  eventPlus = () => {
    let userEvent = new CustomEvent("product-add", {
      detail: this.id,
      bubbles: true,
    });
    console.log(this);
    this.card.dispatchEvent(userEvent);
  };

  get elem() {
    return this.card;
  }
}
