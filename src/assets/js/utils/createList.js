import { data } from "../../../data/data.js";
import { correctingLastPage } from "./correctingLastPage.js";

export function createList() {
  data.clearResultArray();

  const { pagesForPrint, bookletPages} = data;
  let firstPageCount = 1;
  let lastPageCount = bookletPages;

  for (let i = 0; i < pagesForPrint; i++) {
    data.addToResultArray(`${firstPageCount} - ${lastPageCount}`);
    firstPageCount = lastPageCount + 1;
    lastPageCount = firstPageCount + (bookletPages - 1);
  }

  correctingLastPage();
  data.initPagesA4();
}
