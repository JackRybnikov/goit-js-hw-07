function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");
const text = widget.firstElementChild;
const bonusText = text.firstElementChild;
const butt = text.nextElementSibling;

butt.style.padding = "8px 16px";
butt.style.border = "none";
butt.style.borderRadius = "4px";
butt.style.backgroundColor = "rgba(78, 117, 255, 1)";
butt.style.color = "rgba(255, 255, 255, 1)";

const newButt = document.createElement("button");
widget.append(newButt);

newButt.textContent = "Change color White";
newButt.classList.add("change-color-white");

newButt.style.padding = "8px 16px";
newButt.style.border = "none";
newButt.style.borderRadius = "4px";
newButt.style.backgroundColor = "rgba(255, 255, 255, 1)";
newButt.style.color = "rgba(255, 255, 255, 1)";

butt.addEventListener("click", (event) =>{
  const color = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = `${color}`;
  bonusText.innerHTML = `- ${color}`;
  newButt.style.color = "rgba(0, 0, 0, 1)";
});

butt.addEventListener("mouseenter", (event) => {
  butt.style.backgroundColor = "rgba(108, 140, 255, 1)";
});

butt.addEventListener("mouseleave", (event) => {
  butt.style.backgroundColor = "rgba(78, 117, 255, 1)";
});

newButt.addEventListener("click", (event) =>{
  document.querySelector("body").style.backgroundColor = `#ffffff`;
  bonusText.innerHTML = `-`;
  newButt.style.color = "rgba(255, 255, 255, 1)";
});