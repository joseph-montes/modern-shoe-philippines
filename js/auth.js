// --- Form Switching Logic ---
const loginSection = document.getElementById("login-form-section");
const signupSection = document.getElementById("signup-form-section");
const conditionSection = document.getElementById("condition-section");
const showSignupLink = document.getElementById("show-signup");
const showLoginLink = document.getElementById("show-login");

// Initially only show login form
loginSection.classList.add("active-form");
signupSection.classList.remove("active-form");
conditionSection.classList.remove("active-form");

showSignupLink.addEventListener("click", function(event) {
    event.preventDefault();
    loginSection.classList.remove("active-form");
    signupSection.classList.add("active-form");
});

showLoginLink.addEventListener("click", function(event) {
    event.preventDefault();
    signupSection.classList.remove("active-form");
    loginSection.classList.add("active-form");
});


// --- Password Toggle Function (Unified) ---
function togglePassword(fieldId) {
    const passwordField = document.getElementById(fieldId);
    if (passwordField) {
        passwordField.type = passwordField.type === "password" ? "text" : "password";
    }
}

// Attach the unified toggle function to the window so it can be called from onclick in HTML
window.togglePassword = togglePassword;


// --- Signup Form Submission Logic ---
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (fullname && email && username && password) {
        // Simulating successful registration and switch to conditions
        alert("Sign-up successful! Please accept the Terms & Conditions.");
        loginSection.classList.remove("active-form");
        signupSection.classList.remove("active-form");
        conditionSection.classList.add("active-form");
        
        // Store user data (for demonstration purposes only, not secure)
        localStorage.setItem("userRegistered", "true"); 
    } else {
        alert("Please fill in all fields.");
    }
});


// --- Login Button Logic (For Demonstration) ---
document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;

    if (username && password) {
        // Simulating successful login and switch to conditions
        alert("Login successful! Please accept the Terms & Conditions.");
        loginSection.classList.remove("active-form");
        signupSection.classList.remove("active-form");
        conditionSection.classList.add("active-form");
        
        // Store login state (for demonstration purposes only)
        localStorage.setItem("isLoggedIn", "true"); 
    } else {
        alert("Please enter both username/email and password.");
    }
});


// --- Terms and Conditions Modal Logic ---
const modal = document.getElementById("agreementModal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const acceptTerms = document.getElementById("acceptTerms");
const checkbox = document.getElementById("agreeCheckbox");
const continueButton = document.getElementById("continueButton");
const confirmation = document.getElementById("confirmation");

openModal.addEventListener("click", function() {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

acceptTerms.addEventListener("click", function() {
    checkbox.disabled = false;
    checkbox.checked = true;
    modal.style.display = "none";
    continueButton.disabled = false;
    continueButton.classList.add("active");
    openModal.classList.add("active");
});

continueButton.addEventListener("click", function() {
    confirmation.style.display = "block";
    
    // Simulating redirection after a short delay
    setTimeout(function() {
        window.location.href = "product.html";
    }, 3000);
});
