
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn') as HTMLButtonElement;

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = "../authentication/login/log.html";
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const welcomeSection = document.querySelector('.welcome-section') as HTMLElement | null;
        if (welcomeSection) {
            welcomeSection.classList.add('show-welcome-section');
        }
    }, 3000);
});

const loginButton = document.getElementById('login-btn') as HTMLButtonElement | null;
if (loginButton) {
    loginButton.addEventListener('click', () => {
        window.location.href = '/login/login.html';
    });
}
