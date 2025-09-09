import { ButtonForCopy } from './buttonComponent.js';

export function renderResult(parentElement, dataItem) {
  const listItemElement = document.createElement("li");
  listItemElement.classList.add("result__item");

  const contentElement = document.createElement("code");
  contentElement.classList.add("result__content");

  const buttonForCopyElement = ButtonForCopy(
    dataItem,
    "#icon-copy"
  );

  contentElement.textContent = dataItem;

  listItemElement.append(contentElement, buttonForCopyElement);
  parentElement.append(listItemElement);
}
