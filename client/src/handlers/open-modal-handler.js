import emailForm from "../components/email-modal.js";

const openModalHandler = () => {
  const modal = document.querySelector(".modal");
  modal.classList.add("modal-active");
  modal.appendChild(emailForm("Email", "Name", "Message"));
};

export default openModalHandler;
