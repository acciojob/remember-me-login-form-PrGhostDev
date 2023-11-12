//your JS code here. If required.
// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Check if there are saved details
    if (localStorage.getItem('rememberedUser')) {
        // Show the "Login as existing user" button
        var existingUserButton = document.createElement('button');
        existingUserButton.setAttribute('id', 'existing');
        existingUserButton.textContent = 'Login as existing user';
        existingUserButton.addEventListener('click', function () {
            // Retrieve and display the saved username
            var savedUsername = localStorage.getItem('rememberedUser');
            alert('Logged in as ' + savedUsername);
        });

        document.body.appendChild(existingUserButton);
    }

    // Add event listener to the login form
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var rememberCheckbox = document.getElementById('checkbox');

        // Save details to local storage if the checkbox is checked
        if (rememberCheckbox.checked) {
            localStorage.setItem('rememberedUser', username);
            localStorage.setItem('rememberedPassword', password);
        } else {
            // Remove stored details if the checkbox is not checked
            localStorage.removeItem('rememberedUser');
            localStorage.removeItem('rememberedPassword');
        }
        alert(username);
    });
});
