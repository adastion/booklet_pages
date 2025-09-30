import { data } from "../../../data/data.js";
import { callMessage } from "./callMessage.js";

export function getDataFromForm(valueAllPages, valueBookletSize) {
  if (
    Number(valueAllPages.value) <= 6000 &&
    Number(valueBookletSize.value) <= 100
  ) {
    data.setData(Number(valueAllPages.value), Number(valueBookletSize.value));
    return true;
  } else {
    callMessage({
      parentElement: document.querySelector(".form"),
      message: "🤔 Страниц в книге максиму - 6000, Листов А4 максимум - 100",
      time: null,
      isWarning: true,
    });

    return false;
  }
}
