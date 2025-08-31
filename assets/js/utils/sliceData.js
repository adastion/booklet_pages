import { data } from "../../../data/data.js";

export function sliceData(parentElement, methodRender) {
  for (let i = 0; i < data.resultArray.length; i += 1) {
    const subArray = data.resultArray.slice(i, i + 1);
    methodRender(parentElement, subArray);
  }
}
