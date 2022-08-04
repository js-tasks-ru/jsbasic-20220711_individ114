function toggleText() {
  let click = document.querySelector(".toggle-text-button");
  click.addEventListener(
    "click",
    () => (text.hidden = !text.hasAttribute("hidden"))
  );
}
