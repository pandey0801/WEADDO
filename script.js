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
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1100s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    heading: "General Sales Agent",
  },
  {
    src: "image2.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1200s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    heading: "Cargo Sales Agent",
  },
  {
    src: "image3.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1300s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
