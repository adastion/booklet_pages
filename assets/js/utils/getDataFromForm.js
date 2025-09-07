import { data } from "../../../data/data.js";

export function getDataFromForm(valueAllPages, valueBookletSize) {
  data.setData(Number(valueAllPages.value), Number(valueBookletSize.value));
}
