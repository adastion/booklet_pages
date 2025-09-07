import { data } from "../../data/data.js";

export function renderStatusPanel() {
  const listInfo = data.listInfo

  const statusElement = document.createElement("ul");
  statusElement.classList.add("app__info-list");

  listInfo.map((item) => {
    const itemElement = document.createElement("li");

    const nameElement = document.createElement("h2");
    nameElement.textContent = item.name;

    const valueElement = document.createElement("span");
    valueElement.textContent = item.value;

    itemElement.append(nameElement, " - ", valueElement);

    statusElement.append(itemElement);
  });
  
  return statusElement;
}
