import closeModalHandler from "../handlers/close-modal-handler.js";

const emailForm = (...labels) => {
  //modal
  const modalBg = document.createElement("div");
  modalBg.className = "modal-bg";
  const modal = document.createElement("div");
  modal.className = "modal-body";
  const closeModal = document.createElement("i");
  closeModal.className = "fas fa-times";
  closeModal.id = "close-modal";
  closeModal.addEventListener("click", closeModalHandler);
  modal.appendChild(closeModal);
  //form
  const form = document.createElement("form");
  form.action = `https://formsubmit.co/alinamarasca@gmail.com`;
  form.method = "POST";

  // console.log(labels);
  labels.forEach((label) => {
    const inputControl = document.createElement("div");
    inputControl.className = "input-control";
    // form submit settings
    // after sending, go to this page
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "_next";
    input.value = "http://127.0.0.1:5500/";
    inputControl.appendChild(input);
    // end //
    const labelEl = document.createElement("label");
    labelEl.innerText = `${label}:`;
    inputControl.appendChild(labelEl);

    if (label.toLowerCase().trim() === "message") {
      const textarea = document.createElement("textarea");
      textarea.id = `${label.toLowerCase()}`;
      textarea.name = `${label.toLowerCase()}`;
      textarea.required = true;
      inputControl.appendChild(textarea);
    } else {
      const inputEl = document.createElement("input");
      inputEl.required = true;
      inputControl.appendChild(inputEl);
      inputEl.id = `${label.toLowerCase()}`;
      if (label.toLowerCase() === "email" || label.toLowerCase() === "name") {
        inputEl.type = label.toLowerCase();
        inputEl.name = label.toLowerCase();
      }
    }
    form.appendChild(inputControl);
  });
  const button = document.createElement("button");
  button.id = "submit";
  button.type = "submit";
  button.innerText = "Send";
  button.addEventListener("click", closeModalHandler);
  form.appendChild(button);
  //append
  modalBg.appendChild(modal);
  modal.appendChild(form);
  return modalBg;
};

export default emailForm;
