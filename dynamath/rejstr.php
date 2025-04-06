<?php
	session_start();
	if (isset($_POST["username"]) && isset($_POST["password"]))
	{
		
		
		
		$conn=mysqli_connect("localhost", "root", "", "dane");
		if ($conn){
			if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    
    $username = $conn->real_escape_string($username);
    $password = $conn->real_escape_string($password);

    
    $checkQuery = "SELECT * FROM users WHERE username = '$username' LIMIT 1";
    $checkResult = $conn->query($checkQuery);

    if ($checkResult->num_rows > 0) {
        echo "Użytkownik o podanej nazwie już istnieje.";
    } else {
        // Haszowanie hasła
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Dodanie użytkownika do bazy danych
        $insertQuery = "INSERT INTO users (username, password) VALUES ('$username', '$hashedPassword')";
        if ($conn->query($insertQuery) === TRUE) {
			$res=mysqli_query($conn,"UPDATE users SET role = 'user' WHERE username = '$username';");
            echo "Użytkownik został zarejestrowany. Możesz się zalogować.";
        } else {
            echo "Błąd rejestracji użytkownika: " . $conn->error;
        }
    }
}
}
}
?>
<html>
<head><link rel="stylesheet" href="Admin.css">
<meta charset="UTF-8">
<title>Rejstrowanie</title></head>
<body>
	<form action="rejstr.php" method="post">
		podaj login: <input type="text" name="username"><br>
		podaj haslo: <input type="password" name="password"><br>
		<input type="submit" value="Zarejstruj sie">
		<input type="reset" value="Reset">
		
	</form><br>
	<a href="login.php">Zaloguj się</a><br>
</body>
</html>