export function ButtonForCopy(data, src, name) {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("btn");

  if (name) {
    buttonElement.textContent = name;
  }

  if (src) {
    const imageElement = document.createElement("img");
    imageElement.alt = "icon";
    imageElement.src = src;
    imageElement.style = "width: 25px;";

    buttonElement.append(imageElement);
  }

  buttonElement.addEventListener("click", (e) => {
    e.preventDefault();

    navigator.clipboard
      .writeText(data)
      .then(() => alert("Результат скапирован👌"))
      .catch((err) => console.error("Ошибка копирования: ", err));
  });

  return buttonElement;
}
