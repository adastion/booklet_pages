import { ButtonForCopy } from "./../../assets/js/buttonComponent.js";

export function renderResult(parentElement, dataItem) {
  const listItemElement = document.createElement("li");
  listItemElement.classList.add("result__item");

  const contentElement = document.createElement("code");
  contentElement.classList.add("result__content");

  const buttonForCopyElement = ButtonForCopy(
    dataItem,
    "./assets/icons/copy-svgrepo-com.svg"
  );

  contentElement.textContent = dataItem;

  listItemElement.append(contentElement, buttonForCopyElement);
  parentElement.append(listItemElement);
}
