const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

registerForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    console.log("Register button clicked!");

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    message.textContent = "Creating your account...";

    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password
    });

    console.log("Supabase response:", data);

    if (error) {
        console.error("Registration error:", error);
        message.textContent = "Error: " + error.message;
        return;
    }

    console.log("User registered successfully!");

    message.textContent =
        "Registration successful! 🎉 Please check your email.";
});