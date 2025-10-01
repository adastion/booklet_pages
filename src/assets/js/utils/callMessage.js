import { modalMessage } from "../modalMessage.js";

export function callMessage({ parentElement, message, time, isWarning }) {
  parentElement.classList.add("relative");
  const prevModal = parentElement.querySelector(".modal");
  if (prevModal) prevModal.remove();

  const modalElement = modalMessage({ message: message, isWarning: isWarning });
  parentElement.append(modalElement);

  setTimeout(
    () => {
      if (modalElement && isWarning === false) modalElement.remove();
    },
    time ? time : 3000
  );
}
