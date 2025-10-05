// ====== GALLERY SHOW MORE / HIDE ======
const showMoreButton = document.getElementById("show-more-button");
const hideButton = document.getElementById("hide-button");
const galleryItems = document.querySelectorAll(".gallery-item");

let itemsToShow = 3;
let currentlyShown = itemsToShow;

// Başlanğıcda yalnız ilk 3 şəkil göstərilsin
galleryItems.forEach((item, index) => {
  item.style.display = index < itemsToShow ? "block" : "none";
});

// Başlanğıcda gizlət düyməsi görünməsin
hideButton.style.display = "none";

// "Davamını göstər" düyməsi
showMoreButton.addEventListener("click", () => {
  const nextItems = currentlyShown + 3;
  for (let i = currentlyShown; i < nextItems && i < galleryItems.length; i++) {
    galleryItems[i].style.display = "block";
  }
  currentlyShown = Math.min(nextItems, galleryItems.length);

  if (currentlyShown >= galleryItems.length) {
    showMoreButton.style.display = "none";
  }
  hideButton.style.display = "inline-block";
});

// "Gizlət" düyməsi
hideButton.addEventListener("click", () => {
  galleryItems.forEach((item, index) => {
    item.style.display = index < itemsToShow ? "block" : "none";
  });
  currentlyShown = itemsToShow;
  showMoreButton.style.display = "inline-block";
  hideButton.style.display = "none";
});

// ===== MENU FILTER & SEARCH =====
const menuItems = document.querySelectorAll(".menu-item");
const filterButtons = document.querySelectorAll(".menu-filters button");
const searchInput = document.querySelector("#menu-search");

// Filter button-ları
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filterMenu();
  });
});

// Search input
searchInput.addEventListener("input", filterMenu);

function filterMenu() {
  const searchText = searchInput.value.trim().toLowerCase();
  const activeBtn = document.querySelector(".menu-filters button.active");
  const category = activeBtn ? activeBtn.dataset.filter.toLowerCase() : "all";

  menuItems.forEach(item => {
    const itemCategory = item.dataset.category.toLowerCase();
    const itemName = item.dataset.name.toLowerCase();

    const matchesCategory = category === "all" || category === itemCategory;
    const matchesSearch = itemName.includes(searchText);

    item.style.display = (matchesCategory && matchesSearch) ? "flex" : "none";
  });
}
// ===== MODAL =====
const modal = document.getElementById("menu-modal");
const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalCategory = document.getElementById("modal-category");
const modalDescription = document.getElementById("modal-description");
const modalClose = document.querySelector(".menu-modal-close");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    if (window.getComputedStyle(item).display !== "none") { // yalnız görünənlər
      modal.style.display = "flex";
      modalImage.src = item.querySelector(".menu-image").src;
      modalName.textContent = item.dataset.name;
      modalCategory.textContent = "Category: " + item.dataset.category;
      modalDescription.textContent = item.querySelector(".text").textContent;
    }
  });
});

// Close modal
modalClose.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// ===== MOBILE MENU =====
const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");
const body = document.body;

menuOpenButton.addEventListener("click", () => {
  body.classList.add("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
  body.classList.remove("show-mobile-menu");
});

const menuShowMore = document.getElementById("menu-show-more");
const menuHide = document.getElementById("menu-hide");
const menuItemsList = document.querySelectorAll(".menu-item");

let menuItemsToShow = 3; // başlanğıcda neçə item göstərilsin
let menuCurrentlyShown = menuItemsToShow;

// Başlanğıcda yalnız ilk 3 menu item göstərilsin
menuItemsList.forEach((item, index) => {
  item.style.display = index < menuItemsToShow ? "flex" : "none";
});

menuShowMore.addEventListener("click", () => {
  const nextItems = menuCurrentlyShown + 3;
  for (let i = menuCurrentlyShown; i < nextItems && i < menuItemsList.length; i++) {
    menuItemsList[i].style.display = "flex";
  }
  menuCurrentlyShown = Math.min(nextItems, menuItemsList.length);

  if (menuCurrentlyShown >= menuItemsList.length) menuShowMore.style.display = "none";
  menuHide.style.display = "inline-block";
});

menuHide.addEventListener("click", () => {
  menuItemsList.forEach((item, index) => {
    item.style.display = index < menuItemsToShow ? "flex" : "none";
  });
  menuCurrentlyShown = menuItemsToShow;
  menuShowMore.style.display = "inline-block";
  menuHide.style.display = "none";
});

