const slides = [
  {
    title: "John",
    description:
      '"The packaging is beautifully understated, with a sleek, minimalist design that feels elegant and timeless. The bottle itself has a weighty feel, giving it a luxurious touch."',
    image: "./images/photo1.jpg",
  },
  {
    title: "Alice",
    description:
      '"A perfect blend of style and functionality, delivering on all fronts."',
    image: "./images/photo2.jpg",
  },
];

let currentIndex = 0;

const titleElement = document.getElementById("slider-title");
const descriptionElement = document.getElementById("slider-description");
const imageElement = document.getElementById("slider-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function updateSlide() {
  titleElement.classList.add("hidden");
  descriptionElement.classList.add("hidden");
  imageElement.classList.add("hidden");

  setTimeout(() => {
    const currentSlide = slides[currentIndex];
    titleElement.textContent = currentSlide.title;
    descriptionElement.textContent = currentSlide.description;
    imageElement.src = currentSlide.image;

    titleElement.classList.remove("hidden");
    descriptionElement.classList.remove("hidden");
    imageElement.classList.remove("hidden");
  }, 500);
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
});

updateSlide();
