import { createList } from "./js/createList.js";
import { data } from "./data/data.js";

const { pagesForPrint, firstPageCount, lastPageCount } = data;

const result = createList(pagesForPrint, firstPageCount, lastPageCount);
const resultStr = result.join(",");

console.log(result);
console.log(resultStr);
