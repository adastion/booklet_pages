import { data } from "../../../data/data.js";

export function sliceData(parentElement, methodRender) {
  const listOfRanges = data.resultArray;

  listOfRanges.map((item) => {
    methodRender(parentElement, item);
  });
}
