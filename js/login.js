function login() {
    var username = document.getElementById("form3Example1cg").value;
    var password = document.getElementById("form3Example4cg").value;
    if (username == "admin" && password == "admin") {
        alert("Bienvenido!");
        window.location = "indexSignup.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}