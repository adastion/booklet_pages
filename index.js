import { renderResult } from "./assets/js/renderResult.js";
import { createList } from "./assets/js/utils/createList.js";
import { getDataFromForm } from "./assets/js/utils/getDataFromForm.js";
import { sliceData } from "./assets/js/utils/sliceData.js";

const buttonCalc = document.getElementById("btn-calculate");
const resultList = document.querySelector(".result__list");
const fieldForAllPages = document.getElementById("allPages");
const fieldForBooklet = document.getElementById("bookletPages");

buttonCalc.addEventListener("click", (e) => {
  e.preventDefault();
  resultList.innerHTML = "";

  getDataFromForm(fieldForAllPages, fieldForBooklet);

  createList();

  sliceData(resultList, renderResult);
});
