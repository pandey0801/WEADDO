// document.addEventListener("DOMContentLoaded", () => {
//   let slides = document.querySelectorAll(".slide");
//   let currentIndex = 0;

//   function showNextSlide() {
//     slides[currentIndex].classList.remove("active");
//     currentIndex = (currentIndex + 1) % slides.length;
//     slides[currentIndex].classList.add("active");
//   }

//   setInterval(showNextSlide, 300); // Change slide every 3 seconds
// });

const images = [
  {
    src: "image1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    heading: "General Sales Agent",
  },
  {
    src: "image2.jpg",
    text: "Phasellus malesuada lectus et ex vestibulum semper vitae et dolor.",
    heading: "Cargo Sales Agent",
  },
  {
    src: "image3.jpg",
    text: "Vivamus egestas sit amet eros eget congue.",
    heading: "Block Space Agreement",
  },
];

let currentIndex = 0;

function updateCarousel() {
  document.getElementById("main-image").src = images[currentIndex].src;
  document.getElementById("carousel-text").innerText =
    images[currentIndex].text;
  document.querySelector(".carousel-heading").innerText =
    images[currentIndex].heading;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
}

function changeSlide(index) {
  currentIndex = index;
  updateCarousel();
}
