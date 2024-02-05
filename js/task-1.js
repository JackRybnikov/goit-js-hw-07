const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.querySelectorAll(".item").length}`);

list.style.listStyle = "none";
list.style.color = "rgba(46, 47, 66, 1)";

let counter = list.querySelector(".item");

while (counter != null) {
    counter.style.padding = "16px";
    counter.style.width = "320px";
    counter.style.backgroundColor = "rgb(246, 246, 254)";
    counter.style.marginBottom = "24px";

    console.log(`Category: ${counter.querySelector("h2").textContent}`);
    console.log(`Elements: ${counter.querySelectorAll("li").length}`);
    
    counter.querySelector("ul").style.listStyle = "none";
    counter.querySelector("ul").style.paddingLeft = "0px";

    let a = counter.querySelector("li");
    while (a != null) {
        a.style.padding = "8px 0px 8px 16px";
        a.style.border = "1px solid black";
        a.style.borderRadius = "4px";
        a.style.marginBottom = "8px";

        a = a.nextElementSibling;
    }
    counter = counter.nextElementSibling;
}