const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.querySelectorAll(".item").length}`);

const counter = list.querySelectorAll(".item");

counter.forEach((count) => {
    console.log(`Category: ${count.querySelector("h2").textContent}`);
    console.log(`Elements: ${count.querySelectorAll("li").length}`);
});