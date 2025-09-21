import { data } from "../../../data/data.js";

export function correctingLastPage() {
  const { pagesForPrint, allPages, resultArray } = data;

  if (resultArray.length === 0) return;

  const lastElementIndex = pagesForPrint - 1;
  const lastElement = resultArray[lastElementIndex].value;

  const newStringElement = `${lastElement.split(" - ")[0]} - ${allPages}`;
  resultArray[lastElementIndex].value = newStringElement;
}
