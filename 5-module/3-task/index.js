function initCarousel() {
  let right = document.querySelector(".carousel__arrow_right");
  let left = document.querySelector(".carousel__arrow_left");
  let slides = document.querySelectorAll(".carousel__slide");
  let carusel = document.querySelector(".carousel__inner");
  let caruselWidth = getComputedStyle(
    document.querySelector(".carousel__slide")
  );
  let transCount = 0;
  left.style.display = "none";

  right.addEventListener("click", () => {
    transCount += -parseInt(caruselWidth.width);
    if (transCount === transCount)
      carusel.style.transform = `translateX(${transCount}px)`;
    if (transCount === -(parseInt(caruselWidth.width) * 3))
      right.style.display = "none";
    left.style.display = "";
  });

  left.addEventListener("click", () => {
    transCount += parseInt(caruselWidth.width);
    if (transCount === transCount)
      carusel.style.transform = `translateX(${transCount}px)`;
    console.log(transCount);
    if (transCount === 0) left.style.display = "none";
    right.style.display = "";
  });
}
