import { data } from "./data/data.js";
import { createList } from "./js/createList.js";
import { getDataFromForm } from "./js/getDataFromForm.js";

const buttonCalc = document.getElementById("btn-calculate");
const resultList = document.querySelector(".result__list");
const fieldForAllPages = document.getElementById("allPages");
const fieldForBooklet = document.getElementById("bookletPages");

function renderResult() {
  const listItemElement = document.createElement("li");
  listItemElement.classList.add("result__item");

  const contentElement = document.createElement("code");
  contentElement.classList.add("result__content");

  const buttonForCopyElement = ButtonForCopy("Скопировать в буфер");

  contentElement.textContent = data.resultArray.join(", ");
  console.log("Текущий resultArray:", data.resultArray);

  listItemElement.append(contentElement, buttonForCopyElement);
  resultList.append(listItemElement);
}

export function ButtonForCopy(name) {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("btn");
  buttonElement.textContent = name;

  buttonElement.addEventListener("click", (e) => {
    e.preventDefault();

    navigator.clipboard
      .writeText(data.resultArray.join(", "))
      .then(() => alert("Результат скапирован👌"))
      .catch((err) => console.error("Ошибка копирования: ", err));
  });

  return buttonElement;
}

buttonCalc.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("--- Начало расчета ---");

  getDataFromForm(fieldForAllPages, fieldForBooklet);

  createList();

  renderResult();

  console.log("--- Расчет завершен ---");
  console.log("Итоговые данные:", {
    allPages: data.allPages,
    bookletSize: data.bookletSize,
    bookletPages: data.bookletPages,
    pagesForPrint: data.pagesForPrint,
    resultArray: data.resultArray,
  });
});
