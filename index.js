let btn = document.querySelector("#show");
let pass = document.querySelector("#pass");


btn.addEventListener("click", () => {
    if (pass.type === "password") {
        pass.type = "text";
    }
    else {
        pass.type = "password";
    }
})