const modalWindowElement = document.querySelector(".modal-window");
const overlayElement = document.querySelector(".overlay");
const btnsShowModalWindowElement =
  document.querySelectorAll(".show-modal-window");
const btnCloseModalWindowElement = document.querySelector(
  ".close-modal-window"
);

const showModalWindow = () => {
  modalWindowElement.classList.remove("hidden");
  overlayElement.classList.remove("hidden");
};

const closeModalWindow = () => {
  modalWindowElement.classList.add("hidden");
  overlayElement.classList.add("hidden");
};

for (let i = 0; i < btnsShowModalWindowElement.length; i++) {
  btnsShowModalWindowElement[i].addEventListener("click", showModalWindow);
}

btnCloseModalWindowElement.addEventListener("click", closeModalWindow);
overlayElement.addEventListener("click", closeModalWindow);

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    !modalWindowElement.classList.contains("hidden")
  ) {
    closeModalWindow();
  }
});
