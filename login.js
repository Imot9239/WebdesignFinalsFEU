document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (username === "Feutech" && password === "feutech123") {
        
        window.location.href = "Title.html";  
    } else {
        alert("Invalid username or password");
    }
});
