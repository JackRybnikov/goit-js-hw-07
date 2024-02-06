const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const isWhitespaceString = str => !str.trim().length;

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "" || isWhitespaceString(event.currentTarget.value)) {
    output.textContent = "Anonymous";
  } else{
    output.textContent = event.currentTarget.value;
  }
});
