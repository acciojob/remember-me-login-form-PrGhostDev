//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('rememberedUser')) {
        var existingUserButton = document.createElement('button');
        existingUserButton.setAttribute('id', 'existing');
        existingUserButton.textContent = 'Login as existing user';
        existingUserButton.addEventListener('click', function () {
            var savedUsername = localStorage.getItem('rememberedUser');
            alert('Logged in as ' + savedUsername);
        });

        document.body.appendChild(existingUserButton);
    }

    // Add event listener to the login form
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); 
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var rememberCheckbox = document.getElementById('checkbox');
        if (rememberCheckbox.checked) {
            localStorage.setItem('rememberedUser', username);
            localStorage.setItem('rememberedPassword', password);
        } else {
            localStorage.removeItem('rememberedUser');
            localStorage.removeItem('rememberedPassword');
        }
        alert('Logged in as ' + username);
    });
});