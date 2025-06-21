const slides = document.querySelectorAll(".carousel img");
let current = 0;
slides[current].classList.add("active");

document.getElementById("next").onclick = () => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
};

document.getElementById("prev").onclick = () => {
  slides[current].classList.remove("active");
  current = (current - 1 + slides.length) % slides.length;
  slides[current].classList.add("active");
};
