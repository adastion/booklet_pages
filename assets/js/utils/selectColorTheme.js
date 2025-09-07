export function selectColorTheme() {
  const bodyElement = document.querySelector("body");
  const triggerElement = document.getElementById("theme-trigger");

  const colrorThemeList = ["dark", "light"];

  let currentTheme = localStorage.getItem("theme");
  const nameForTheElement =
    currentTheme === "dark" ? "Включить светлю тему" : "Включить тёмную тему";

  if (currentTheme === null) {
    currentTheme = colrorThemeList[0];
    bodyElement.dataset.theme = currentTheme;
  }
  bodyElement.dataset.theme = currentTheme;
  triggerElement.textContent = nameForTheElement;

  triggerElement.addEventListener("click", (e) => {
    if (currentTheme === colrorThemeList[0]) {
      currentTheme = colrorThemeList[1];
    } else {
      currentTheme = colrorThemeList[0];
    }

    localStorage.setItem("theme", currentTheme);
    bodyElement.dataset.theme = currentTheme;
    e.currentTarget.textContent = nameForTheElement;
  });
}
