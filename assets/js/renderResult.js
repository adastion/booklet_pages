import { ButtonForCopy } from "./../../assets/js/buttonComponent.js";

export function renderResult(parentElement, arrayData) {
  const listItemElement = document.createElement("li");
  listItemElement.classList.add("result__item");

  const contentElement = document.createElement("code");
  contentElement.classList.add("result__content");

  const buttonForCopyElement = ButtonForCopy(
    arrayData,
    "./assets/icons/copy-svgrepo-com.svg"
  );

  contentElement.textContent = arrayData.join(", ");

  listItemElement.append(contentElement, buttonForCopyElement);
  parentElement.append(listItemElement);
}
