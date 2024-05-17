document.addEventListener('DOMContentLoaded', () => {
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');

    showRegisterLink.addEventListener('click', () => {
        loginFormContainer.classList.add('hidden');
        registerFormContainer.classList.remove('hidden');
    });

    showLoginLink.addEventListener('click', () => {
        registerFormContainer.classList.add('hidden');
        loginFormContainer.classList.remove('hidden');
    });

    document.getElementById('login-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Login form submitted');
        event.target.reset();
        // Here you can add your login logic
    });

    document.getElementById('register-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Register form submitted');
        event.target.reset();
        // Here you can add your register logic
    });
});
