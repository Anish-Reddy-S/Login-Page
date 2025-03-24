let users = {};

document.getElementById('create-account-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (validatePassword(password)) {
        users[username] = password;
        alert('Account created successfully!');
        document.getElementById('create-account-form').reset();
    } else {
        alert('Password must be strong! (Include at least 1 lowercase, 1 uppercase, 1 number, and 1 special character)');
    }
});

document.addEventListener('submit', (e) => {
    if (e.target.id === 'login-form') {
        e.preventDefault();
        let username = document.getElementById('username-login').value;
        let password = document.getElementById('password-login').value;

        if (users[username] && users[username] === password) {
            document.querySelector('.container').innerHTML = `<h1>Work in Progress</h1>`;
        } else {
            alert('Invalid username or password!');
        }
    }
});


function validatePassword(password) {
    let strongPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])');
    return strongPassword.test(password);
}


document.getElementById('login-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('create-account-form').style.display = 'none'; 
    document.getElementById('create-link').style.display = 'none';  
    showLoginForm();
});

document.getElementById('create-account-link').addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none'; 
    document.getElementById('create-account-form').style.display = 'block'; 
});

function showLoginForm() {
    let loginFormHTML = `
        <form id="login-form">
            <label for="username-login">Username:</label>
            <input type="text" id="username-login" required><br><br>
            <label for="password-login">Password:</label>
            <input type="password" id="password-login" required><br><br>
            <button type="submit">Login</button>
        </form>
    `;
    document.querySelector('.container').innerHTML = loginFormHTML;
}
