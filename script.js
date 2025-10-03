const searchIcon2 = document.querySelector(".search-icon-2");
const searchIcon3 = document.querySelector(".search-icon-3");
const searchInput = document.querySelector(".search-input");
const navBtn = document.querySelector(".nav-btn-mid");
const searchCon = document.querySelector(".search-container");
const iconClose = document.querySelector(".close-icon");

searchIcon2.addEventListener("click", () => {
  searchInput.style.display = "flex";
  searchIcon3.style.display = "flex";
  searchIcon2.style.display = "none";
  navBtn.style.display = "none";
  searchCon.style.display = "flex";
  iconClose.style.display = "flex";
  searchInput.focus();
});

iconClose.addEventListener("click", () => {
  searchInput.style.display = "none";
  searchIcon3.style.display = "none";
  searchIcon2.style.display = "flex";
  navBtn.style.display = "flex";
  searchCon.style.display = "none";
  iconClose.style.display = "none";
});
