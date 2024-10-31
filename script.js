function validateEmail() {
    const emailInput = document.getElementById('email-input');
    const errorText = document.getElementById('error-text');
    const errorIcon = document.getElementById('error-icon');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        emailInput.classList.add('error');
        errorText.classList.add('active');
        errorIcon.classList.add('active');
    }
    else {
        emailInput.classList.remove('error');
        errorText.classList.remove('active');
        errorIcon.classList.remove('active');
    }
}