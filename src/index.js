import "./style.css";
import { renderResult } from "./assets/js/renderResult.js";
import { renderStatusPanel } from "./assets/js/renderStatusPanel.js";
import { createList } from "./assets/js/utils/createList.js";
import { getDataFromForm } from "./assets/js/utils/getDataFromForm.js";
import { selectColorTheme } from "./assets/js/utils/selectColorTheme.js";
import { sliceData } from "./assets/js/utils/sliceData.js";
import { data } from "./data/data.js";
import { initialFormValues } from './assets/js/utils/initialFormValues.js';

const buttonCalcElement = document.getElementById("btn-calculate");
const dataPanelElement = document.querySelector(".app__info");
const resultListElement = document.querySelector(".result__list");
const fieldForAllPagesElement = document.getElementById("allPages");
const fieldForBookletElement = document.getElementById("bookletPages");

initialFormValues(fieldForAllPagesElement, fieldForBookletElement);

buttonCalcElement.addEventListener("click", (e) => {
  e.preventDefault();
  resultListElement.innerHTML = "";

  getDataFromForm(fieldForAllPagesElement, fieldForBookletElement);

  createList();

  sliceData(resultListElement, renderResult);
});

dataPanelElement.append(renderStatusPanel());

data.subscribe(() => {
  dataPanelElement.innerHTML = "";
  dataPanelElement.append(renderStatusPanel());
});

selectColorTheme();
