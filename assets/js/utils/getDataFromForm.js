import { data } from "../../../data/data.js";

export function getDataFromForm(valueAllPages, valueBookletSize) {
  if (
    Number(valueAllPages.value) <= 6000 &&
    Number(valueBookletSize.value) <= 100
  ) {
    data.setData(Number(valueAllPages.value), Number(valueBookletSize.value));
  } else {
    return alert(
      "Слишкаом большое значение. Страниц в книге максиму - 6000, cтраниц в , буклете максиму -"
    );
  }
}
