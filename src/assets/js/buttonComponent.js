export function ButtonForCopy(data, src, name) {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("btn");

  if (name) {
    buttonElement.textContent = name;
  }

  if (src) {
    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const useElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "use"
    );

    useElement.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      src
    );

    svgElement.classList.add("icon");

    svgElement.append(useElement);
    buttonElement.append(svgElement);
  }

  buttonElement.addEventListener("click", (e) => {
    e.preventDefault();

    if (!data.isActive) {
      const resultItemElement = e.currentTarget.parentElement;
      resultItemElement.classList.add("result__item--disabled");

      const resultContentElement = resultItemElement.querySelector(".result__content");
      resultContentElement.addEventListener("click", (e) => {
        e.currentTarget.parentElement.classList.remove("result__item--disabled");
      });
    }

    navigator.clipboard
      .writeText(data.value)
      .then(() => alert("Результат скапирован👌"))
      .catch((err) => console.error("Ошибка копирования: ", err));
  });

  return buttonElement;
}
