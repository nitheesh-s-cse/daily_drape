const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const deliveryLogin = document.getElementById("deliveryLogin");
const forgotPassword = document.getElementById("forgotPassword");


/* Show / Hide Password */

togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        togglePassword.textContent = "🙈";

    } else {

        passwordInput.type = "password";
        togglePassword.textContent = "👁";

    }

});


/* Customer Login - Supabase */

loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    console.log("Login button clicked!");

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {

        console.error("Login error:", error);

        alert("Login failed:\n\n" + error.message);

        return;
    }

    console.log("Login successful!");
    console.log("User:", data.user);

    alert("Login successful! 🎉");

    // Change this later to your actual home page
    window.location.href = "index.html";

});


/* Delivery Login - temporary */

deliveryLogin.addEventListener("click", () => {

    alert(
        "Delivery Person Login\n\n" +
        "The delivery dashboard will be connected later."
    );

});


/* Forgot Password */

forgotPassword.addEventListener("click", async (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (!email) {

        alert("Please enter your email first.");

        return;
    }

    const { error } = await supabaseClient.auth.resetPasswordForEmail(
        email,
        {
            redirectTo: window.location.origin + "/reset-password.html"
        }
    );

    if (error) {

        console.error("Password reset error:", error);

        alert("Password reset failed:\n\n" + error.message);

        return;
    }

    alert(
        "Password reset email sent! 📧\n\n" +
        "Please check your email."
    );

});