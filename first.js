document.addEventListener('DOMContentLoaded', function() {
    var password = document.getElementById('password');
    var passwordRepeat = document.getElementById('password-repeat');
    var errorMessage = document.getElementById('error-message');

    passwordRepeat.addEventListener('input', function() {
        if (password.value !== passwordRepeat.value) {
            password.style.borderColor = 'red';
            passwordRepeat.style.borderColor = 'red';
            errorMessage.style.display = 'block';
        } else {
            password.style.borderColor = '#ccc';
            passwordRepeat.style.borderColor = '#ccc';
            errorMessage.style.display = 'none';
        }
    });
});
