//PAGE NAVIGATION
const menuIcon = document.getElementById("menu-icon");
const navContainer = document.getElementById("nav-container");
const navItem = document.querySelectorAll(".nav-items li");

menuIcon.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});

// IMAGE VIEWER
const OwnerImage = document.getElementById("owner-image");
const imageViewer = document.getElementById("image-viewer");
const fullImage = document.querySelector(".owner-image");

OwnerImage.addEventListener("click", (e) => {
  e.stopPropagation();

  imageViewer.classList.toggle("active");
  document.body.classList.toggle("modal-open");
  fullImage.classList.toggle("active");
});
