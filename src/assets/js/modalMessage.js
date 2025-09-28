export function modalMessage({ message, isWarning }) {
  const modalElement = document.createElement("div");
  modalElement.classList.add("modal", "modal--animate");

  const contentElement = document.createElement("p");
  contentElement.classList.add("result__content");
  
  if (isWarning) {
    modalElement.classList.remove("modal--animate");
    modalElement.classList.add("modal--animate-warning");
    contentElement.classList.add("modal--warning");

    const closeElement = document.createElement("button");
    closeElement.classList.add("btn", "btn--theme");
    closeElement.textContent = "X";
    
    
    closeElement.addEventListener("click", ()=> {
      modalElement.remove();
    }, {once: true});
    
    contentElement.textContent = message;
    
    modalElement.append(contentElement, closeElement);
    return modalElement;
  };

  contentElement.textContent = message;

  modalElement.append(contentElement);
  return modalElement;
}
