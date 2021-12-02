const modal = document.querySelector(".modal");

const closeModalHandler = () => {
  modal.classList.remove("modal-active");
  modal.innerHTML = "";
};

export default closeModalHandler;
