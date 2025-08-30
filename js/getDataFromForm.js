import { data } from "../data/data.js";

export function getDataFromForm(valueAllPages, valueBookletSize) {
  data.allPages = Number(valueAllPages.value);
  data.bookletSize = Number(valueBookletSize.value);

  console.log("Установлены значения:", {
    allPages: data.allPages,
    bookletSize: data.bookletSize,
    bookletPages: data.bookletPages,
    pagesForPrint: data.pagesForPrint,   
  });
}
