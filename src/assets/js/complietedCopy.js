export function completedCopy(currentElement) {
  currentElement.classList.add("btn__animate");

  setTimeout(() => {
    currentElement.classList.remove("btn__animate");
  }, 1000);
}
