function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + 10*i}px`;
    box.style.height = `${30 + 10*i}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    boxes.appendChild(box);
  }
};

function destroyBoxes() {
  boxes.innerHTML = '';
};

const form = document.querySelector("#controls");
const textInput = form.firstElementChild;
const create = textInput.nextElementSibling;
const destroy = create.nextElementSibling;
const boxes = document.querySelector("#boxes");

create.addEventListener("click", (event) => {
  destroyBoxes();
  const a = parseInt(textInput.value, 10);
  if (a > 0 && a <= 100) {
    createBoxes(a);
    textInput.value = "";
  };
});

destroy.addEventListener("click", (event) => {
  destroyBoxes();
});
