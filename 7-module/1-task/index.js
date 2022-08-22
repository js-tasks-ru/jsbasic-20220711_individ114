import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.html();
    this.buttons();
    this.UserClickEvent();
  }

  html() {
    let template = createElement(
      `<div class="ribbon">
<button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
  <img src="/assets/images/icons/angle-icon.svg" alt="icon">
</button>


<nav class="ribbon__inner">
${this.categories
  .map(
    (elem) =>
      `<a href="#" class="ribbon__item" data-id=${elem.id}>${elem.name}</a>`
  )
  .join("")}
</nav>

<button class="ribbon__arrow ribbon__arrow_right">
  <img src="/assets/images/icons/angle-icon.svg" alt="icon">
</button>
</div>`
    );
    this.ribbon = template;
  }

  buttons = () => {
    let ribbonInner = this.ribbon.querySelector(".ribbon__inner");
    let scrollLeft = ribbonInner.scrollLeft;

    let left = this.ribbon.querySelector(".ribbon__arrow_left");
    let right = this.ribbon.querySelector(".ribbon__arrow_right");

    if (scrollLeft === 0) {
      left.classList.remove("ribbon__arrow_visible");
      right.classList.add("ribbon__arrow_visible");
    }

    left.addEventListener("click", () => {
      ribbonInner.scrollBy(-350, 0);
    });

    right.addEventListener("click", () => {
      ribbonInner.scrollBy(350, 0);
    });

    ribbonInner.addEventListener("scroll", function (event) {
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      if (ribbonInner.scrollLeft === 0) {
        left.classList.remove("ribbon__arrow_visible");
      }
      if (
        ribbonInner.scrollLeft > 0 &&
        ribbonInner.scrollLeft < scrollWidth - clientWidth
      ) {
        left.classList.add("ribbon__arrow_visible");
        right.classList.add("ribbon__arrow_visible");
      }
      if (ribbonInner.scrollLeft === scrollWidth - clientWidth) {
        right.classList.remove("ribbon__arrow_visible");
      }
    });
  };

  UserClickEvent() {
    this.ribbon.addEventListener("click", (event) => {
      let target = event.target;
      if (target.closest(".ribbon__item")) {
        let item = event.target.closest("a");
        let userEvent = new CustomEvent("ribbon-select", {
          detail: item.dataset.id,
          bubbles: true,
        });
        this.ribbon.dispatchEvent(userEvent);
      }
      return;
    });
  }

  get elem() {
    return this.ribbon;
  }
}
