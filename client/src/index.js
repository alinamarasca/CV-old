// const body = document.querySelector("body");
const sendEmail = document.getElementById("send-email");

import closeModalHandler from "./handlers/close-modal-handler.js";
import openModalHandler from "./handlers/open-modal-handler.js";

const cvPage = () => {
  sendEmail.addEventListener("click", openModalHandler);
  document.addEventListener("click", (e) => {
    if (e.target.className === "modal-bg") {
      closeModalHandler();
    }
  });
};

cvPage();
