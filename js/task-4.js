const registerForm = document.querySelector(".login-form");
const emailForm = registerForm.querySelector("label");
const passForm = emailForm.nextElementSibling;
const butt = passForm.nextElementSibling;

registerForm.style.maxWidth = "360px";
registerForm.style.padding = "24px";
registerForm.style.color = "rgba(46, 47, 66, 1)";

emailForm.style.display = "flex";
emailForm.style.flexDirection = "column";
emailForm.style.gap = "8px";

emailForm.querySelector("input").style.height = "40px";

passForm.style.display = "flex";
passForm.style.flexDirection = "column";
passForm.style.gap = "8px";
passForm.style.marginBottom = "16px";

passForm.querySelector("input").style.height = "40px";

butt.style.padding = "8px 16px";
butt.style.border = "none";
butt.style.borderRadius = "4px";
butt.style.backgroundColor = "rgba(78, 117, 255, 1)";
butt.style.color = "rgba(255, 255, 255, 1)";

butt.addEventListener("mouseenter", (event) => {
    butt.style.backgroundColor = "rgba(108, 140, 255, 1)";
});

butt.addEventListener("mouseleave", (event) => {
    butt.style.backgroundColor = "rgba(78, 117, 255, 1)";
});


registerForm.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    
    if (email === "" || password === "") {
        window.alert('All form fields must be filled in');
    } else{
        console.log({email, password});
        registerForm.reset();
    };
});


