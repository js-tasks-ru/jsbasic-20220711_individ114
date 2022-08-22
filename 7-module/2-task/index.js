import createElement from "../../assets/lib/create-element.js";

export default class Modal {
  constructor() {
    this.title;
    this.body;
    this.html;
    this.modalHTML();
    this.closeButtons();
  }

  setTitle(value) {
    document.querySelector(".modal__title").append(value);
  }

  setBody(value) {
    document.querySelector(".modal__body").append(value);
  }

  modalHTML() {
    let code = createElement(`
    <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
        </h3>
      </div>

      <div class="modal__body">
      </div>
    </div>

  </div>

`);
    this.html = code;
    document.body.prepend(this.html);
  }

  open() {
    document.body.classList.add("is-modal-open");
  }

  close() {
    document.body.classList.remove("is-modal-open");
    if (document.querySelector(".modal")) {
      document.body.querySelector(".modal").remove();
    }
  }

  closeButtons = () => {
    let clickXkey = function (event) {
      console.log("ok");
      if (event.target.closest(".modal__close") || event.code === "Escape") {
        document.body.classList.remove("is-modal-open");
        if (document.querySelector(".modal")) {
          document.body.querySelector(".modal").remove();
        }
        document.body.removeEventListener("click", clickXkey);
        document.body.removeEventListener("keydown", clickXkey);
      }
      return;
    };

    document.body.addEventListener("click", clickXkey);
    document.body.addEventListener("keydown", clickXkey);
  };
}
