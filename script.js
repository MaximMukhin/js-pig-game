const modalWindowElement = document.querySelector(".modal-window");
const overlayElement = document.querySelector(".overlay");
const btnsShowModalWindowElement =
  document.querySelectorAll(".show-modal-window");
const btnCloseModalWindowElement = document.querySelector(
  ".close-modal-window"
);

for (let i = 0; i < btnsShowModalWindowElement.length; i++) {
  btnsShowModalWindowElement[i].addEventListener("click", () => {
    console.log(btnsShowModalWindowElement[i].textContent);
    modalWindowElement.classList.remove("hidden");
    overlayElement.classList.remove("hidden");
  });
}

btnCloseModalWindowElement.addEventListener("click", () => {
  modalWindowElement.classList.add("hidden");
  overlayElement.classList.add("hidden");
});