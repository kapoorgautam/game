const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password');
    }
    
})

function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}



function authentication (username,password) {
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password');
    }
}