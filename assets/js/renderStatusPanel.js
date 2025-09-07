import { data } from "../../data/data.js";

export function renderStatusPanel() {
  const listInfo = [
    {
      name: "Всего буклетов",
      value: data.resultArray.length,
    },
    {
      name: "Cтраниц в буклете",
      value: data.bookletPages,
    },
    {
      name: "Из сколька страниц состоит книга",
      value: data.allPages,
    },
  ];

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
