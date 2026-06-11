let images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg"
];

let currentIndex = 0;
let slideshow;

/* Lightbox */
function openLightbox(index) {
  document.getElementById("lightbox").style.display = "block";
  currentIndex = index;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  stopSlideshow();
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  document.getElementById("lightbox-img").src = images[currentIndex];
}

/* Keyboard Controls */
document.addEventListener("keydown", function(e) {
  if (document.getElementById("lightbox").style.display === "block") {
    if (e.key === "ArrowRight") changeImage(1);
    if (e.key === "ArrowLeft") changeImage(-1);
    if (e.key === "Escape") closeLightbox();
  }
});

/* Filter */
function filterImages(category) {
  let boxes = document.querySelectorAll('.img-box');

  boxes.forEach(box => {
    if (category === 'all' || box.classList.contains(category)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
}

/* Dark Mode */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

/* Slideshow */
function startSlideshow() {
  slideshow = setInterval(() => {
    changeImage(1);
  }, 2000);
}

function stopSlideshow() {
  clearInterval(slideshow);
}

/* Like Button */
function likeImage(el) {
  el.style.color = el.style.color === "red" ? "white" : "red";
}