import { data } from "../../../data/data.js";

export function getDataFromForm(valueAllPages, valueBookletSize) {
  data.allPages = Number(valueAllPages.value);
  data.bookletSize = Number(valueBookletSize.value);
}
