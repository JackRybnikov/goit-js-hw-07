function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divWidget = document.querySelector(".widget");
const text = divWidget.firstElementChild;
const spanText = text.firstElementChild;
const button = text.nextElementSibling;

button.addEventListener("click", (event) =>{
  const color = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = `${color}`;
  spanText.innerHTML = `- ${color}`;
});
