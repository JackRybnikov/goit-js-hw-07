const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

document.querySelector("body").style.color = "rgba(46, 47, 66, 1)";

textInput.style.width = "360px";
textInput.style.height = "40px";
textInput.style.bordeer = "1px solid rgba(128, 128, 128, 1)";
textInput.style.bordeerRadius = "4px";
textInput.style.padding = "8px 16px";

const isWhitespaceString = str => !str.replace(/\s/g, '').length

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value === "" || isWhitespaceString(event.currentTarget.value)) {
    output.textContent = "Anonymous";
  } else{
    output.textContent = event.currentTarget.value;
  }
});
