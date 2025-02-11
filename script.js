const images = [
  {
    src: "image1.jpg",
    text: "(GSA) means any Person to whom a Member of IATA or non-IATA air carrier has delegated general authority to represent it for purposes of sales of passenger and/or cargo air transportation in a defined territory and who is remunerated accordingly.",
    heading: "General Sales Agent",
  },
  {
    src: "image2.jpg",
    text: " sales representative or agent for the cargo division of an airline or shipping line. In summary, a Cargo Sales Agency specializes in promoting and selling cargo transportation services. They actively engage with customers, secure cargo bookings, and facilitate the movement of goods.",
    heading: "Cargo Sales Agent",
  },
  {
    src: "image3.jpg",
    text: "Blocked Space Agreement: Agreement of purchasing a number of passenger seats / cargo space by a carrier (the Marketing Carrier) for the carriage of its traffic on an aircraft of a second carrier (the Operating Carrier)",
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
