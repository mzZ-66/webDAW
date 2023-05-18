<?php
if (isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST["email"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $email = $_POST["email"];
} else {
    header("Location: index.html");
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Datos en PHP</title>
	<link rel="stylesheet" type="text/css" href="../CSS/stylePHP.css"/>
</head>
<body>
	<?php
	if (isset($_POST["username"]) && isset($_POST["password"]) && isset($_POST["email"])) {
		echo "<table>";
		echo "<tr><th>Nombre de usuario</th><th>Contraseña</th><th>e-mail</th></tr>";
		echo "<tr><td>$username</td><td>$password</td><td>$email</td></tr>";
		echo "</table>";
	}
	?>
</body>
</html>