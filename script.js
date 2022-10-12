const modalWindowElement = document.querySelector(".modal-window");
const overlayElement = document.querySelector(".overlay");
const btnsShowModalWindowElement =
  document.querySelectorAll(".show-modal-window");
const btnCloseModalWindowElement = document.querySelector(
  ".close-modal-window"
);

console.log(modalWindowElement);
console.log(overlayElement);
console.log(btnsShowModalWindowElement);
console.log(btnCloseModalWindowElement );

for (let i = 0; i < btnsShowModalWindowElement.length; i++) {
  btnsShowModalWindowElement[i].addEventListener("click", () => {});
}
