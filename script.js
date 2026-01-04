// THEME SWITCHER
document.getElementById("themeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// CHANGE TEXT BUTTON
document.getElementById("changeBtn").addEventListener("click", function () {
    let text = document.getElementById("message");
    text.innerText = "You clicked the button!";
    text.style.color = "blue";
});

// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("formMessage");

    if (name === "" || email === "") {
        msg.innerText = "Please fill in all fields.";
        msg.style.color = "red";
    } else if (!email.includes("@")) {
        msg.innerText = "Enter a valid email.";
        msg.style.color = "red";
    } else {
        msg.innerText = "Form submitted successfully!";
        msg.style.color = "green";
    }
});
