const loginForm = document.querySelector(".login-form");
const passForm = loginForm.elements.password;

passForm.style.marginBottom = "16px";

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    
    if (email === "" || password === "") {
        alert('All form fields must be filled in');
    } else{
        console.log({email, password});
        loginForm.reset();
    };
});


