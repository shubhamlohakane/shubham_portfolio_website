// JavaScript for form submission and message display
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate form
    if (name && email && message) {
        // Simulate sending a message (you can integrate this with a real backend later)
        document.getElementById("responseMessage").innerHTML = "Thank you for your message, " + name + ". I will get back to you soon!";
        document.getElementById("responseMessage").style.color = "green";

        // Clear form fields
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").innerHTML = "Please fill in all fields!";
        document.getElementById("responseMessage").style.color = "red";
    }
});
