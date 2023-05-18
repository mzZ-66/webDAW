function validarForm() {
    var form = document.forms["form"];
    var username = form["username"].value;
    var email = form["email"].value;
    var password = form["password"].value;

    if (username == "" || username.length > 30) {
        error1 = "Por favor, ingresa un nombre de usuario válido (no vacío y máximo 30 caracteres).";
        document.getElementById("error1").innerHTML = error1;
        return false;
    } else document.getElementById("error1").innerHTML = "";

    if (email == "" || email.length > 80 || !email.includes('@') || !email.includes('.')) {
        error2 = "Por favor, ingresa una dirección de correo electrónico válida (no vacía, máximo 80 caracteres y debe incluir '@' y '.').";
        document.getElementById("error2").innerHTML = error2;
        return false;
    } else document.getElementById("error2").innerHTML = "";

    if (password == "" || password.length > 10) {
        error3 = "Por favor, ingresa una contraseña válida (no vacía y máximo 10 caracteres).";
        document.getElementById("error3").innerHTML = error3;
        return false;
    } else document.getElementById("error3").innerHTML = "";

    return true;
}