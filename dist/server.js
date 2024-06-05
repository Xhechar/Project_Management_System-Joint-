"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegisterButton = document.getElementById('show-register');
    const showLoginButton = document.getElementById('show-login');
    const registrationForm = document.getElementById('registration-form');
    const errorMessage = document.getElementById('error-message');
    showRegisterButton.addEventListener('click', () => {
        loginForm.classList.remove('active');
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        registerForm.classList.add('active');
    });
    showLoginButton.addEventListener('click', () => {
        registerForm.classList.remove('active');
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        loginForm.classList.add('active');
    });
    registrationForm.addEventListener('submit', (event) => {
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        if (password !== confirmPassword) {
            event.preventDefault();
            errorMessage.classList.remove('hidden');
        }
        else {
            errorMessage.classList.add('hidden');
        }
    });
}); // Closing 'DOMContentLoaded' event listener
