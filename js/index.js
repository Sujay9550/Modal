`use strict`;

// DOM Element Selections

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");

// Open Modal Function

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Close Modal Function

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Looping through multiple buttons and adding an Event Listener to both Open & Close Modal with Overlay

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Adding Event Listener to Keyboard Esc Key to Close a Modal

document.addEventListener("keydown", function (e) {
  console.log(e);
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
