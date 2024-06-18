document.addEventListener("DOMContentLoaded", function () {
  const topbar = document.getElementById("topbar");
  const topnav = document.getElementById("topnav");

  // Mimicking the email from the last <a> element in topbar
  const allowedEmail = "CarmenSanchezREI@gmail.com";

  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for now

    // Basic email validation
    if (!isValidEmail(emailInput.value.trim())) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return false;
    }

    // Password validation (just checking it's not empty here)
    if (passwordInput.value.trim() === "") {
      alert("Please enter your password.");
      passwordInput.focus();
      return false;
    }

    // Additional check: Only allow login if email matches the allowedEmail
    if (emailInput.value.trim() !== allowedEmail) {
      alert("Access denied. You are not authorized to sign in.");
      return false;
    }

    // If all validations pass, you can proceed with form submission
    alert("Login successful!"); // Replace with actual form submission logic
    loginForm.reset(); // Optional: Clear form inputs after successful login
  });

  // Function to validate email format
  function isValidEmail(email) {
    // Basic email regex pattern for demonstration
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

      // Part 4: For Login.html validation (not used in index.html)
    // This is an example and would be implemented separately in login.js for Login.html
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            // Basic validation example
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email === 'CarmenSanchezREI@gmail.com' && password === 'password') {
                alert('Login successful!');
                loginForm.reset();
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }
});
