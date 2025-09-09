import { data } from "../../../data/data.js";

export function initialFormValues(fieldAllPages, fieldBookletSize) {
  fieldAllPages.value = data.allPages;
  fieldBookletSize.value = data.bookletSize;
}
