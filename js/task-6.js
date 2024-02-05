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
    boxes.append(box);
  }
};

function destroyBoxes() {
  const a = boxes.querySelectorAll("div");
  for (const i of a) {
    boxes.querySelector("div").remove();
  }
};

let counter = 0;
const form = document.querySelector("#controls");
const textInput = form.firstElementChild;
const create = textInput.nextElementSibling;
const destroy = create.nextElementSibling;
const boxes = document.querySelector("#boxes");

textInput.addEventListener("input", (event) => {
  counter = event.currentTarget.value;
});

create.addEventListener("click", (event) => {
  if (counter > 0 && counter <= 100) {
    destroyBoxes();
    createBoxes(counter);
    textInput.value = "";
    counter = 0;
  };
});

destroy.addEventListener("click", (event) => {
  destroyBoxes();
});
