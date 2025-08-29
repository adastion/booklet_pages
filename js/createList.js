import { data } from "../data/data.js";
import { correctingLastPage } from "./correctingLastPage.js";

const { resultArray, bookletPages } = data;

export function createList(pagesForPrint, firstPageCount, lastPageCount) {
  for (let i = 0; i < pagesForPrint; i++) {
    resultArray.push(`${firstPageCount} - ${lastPageCount}`);
    firstPageCount = lastPageCount + 1;
    lastPageCount = firstPageCount + (bookletPages - 1);
  }

  correctingLastPage(resultArray[pagesForPrint - 1], pagesForPrint);

  console.log(resultArray);
  return resultArray;
}
