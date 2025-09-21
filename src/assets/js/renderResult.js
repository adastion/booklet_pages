import { ButtonForCopy } from './buttonComponent.js';

export function renderResult(parentElement, dataItem) {
  console.log(dataItem)
  
  
  const listItemElement = document.createElement("li");
  listItemElement.classList.add("result__item");
  
  if (!dataItem.isActive) {
    listItemElement.classList.add("result__item--disabled");
  }
  
  const contentElement = document.createElement("code");
  contentElement.classList.add("result__content");
  
  const buttonForCopyElement = ButtonForCopy(
    dataItem.value,
    "#icon-copy"
  );
  
  contentElement.textContent = dataItem.value;
  
  listItemElement.append(contentElement, buttonForCopyElement);
  parentElement.append(listItemElement);
  
  
}
