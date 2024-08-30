document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('error-msg');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic validation
        if (username === '' || password === '') {
            errorMsg.textContent = 'Please enter both username and password.';
            return;
        }

        // Simulate login logic (replace this with actual authentication in a real application)
        if (username === 'user' && password === 'password') {
            // Simulate successful login
            alert('Login successful!');
            // Redirect to a different page or dashboard
            window.location.href = 'twitter.html';
        } else {
            errorMsg.textContent = 'Invalid username or password.';
        }
    });
});