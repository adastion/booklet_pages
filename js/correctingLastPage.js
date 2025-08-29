import { data } from "../data/data.js";

const { allPages } = data;

export function correctingLastPage(lastElement, pagesForPrint) {
  const newStringElement = `${lastElement.split(" - ")[0]} - ${allPages}`;
  data.resultArray[pagesForPrint - 1] = newStringElement;
}
