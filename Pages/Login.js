document.addEventListener("DOMContentLoaded", function () {
  // Select and cache the <main> element
  const mainEl = document.querySelector("main");

  // Set the background color of mainEl using CSS custom property
  mainEl.style.backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--main-bg");

  // Mimicking the email from the last <a> element in topbar
  const allowedEmail = "CarmenSanchezREI@gmail.com";
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // Function to validate email format
  function isValidEmail(email) {
    // Basic email regex pattern for demonstration
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for now

    // Basic email validation
    const enteredEmail = emailInput.value.trim().toLowerCase(); // Normalize email to lowercase
    if (!isValidEmail(enteredEmail)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return false;
    }

       if (enteredEmail !== allowedEmail.toLowerCase()) {
      alert("Access denied. You are not authorized to sign in.");
      loginForm.reset(); // Clear form inputs after successful login
      return false;
    }

    // Password validation (just checking it's not empty here)
    if (passwordInput.value.trim() === "") {
      alert("Please enter your password.");
      passwordInput.focus();
      return false;
    }

    // If all validations pass, you can proceed with form submission
    alert("Login successful!");

    // Change sub-menu item to "Sign Out" after successful login
    const signInLink = document.querySelector(
      "#sub-menu a[href='/Pages/Login.html']"
    );
    console.log(signInLink)
    if (signInLink) {
      signInLink.textContent = "Sign Out";
      signInLink.setAttribute("href", "/Pages/Login.html"); // Replace with sign-out action if needed
    }

    loginForm.reset(); // Clear form inputs after successful login
  });
});
