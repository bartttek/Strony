<?php
	session_start();
	if (isset($_SESSION['username'])) {
    header("Location: glowna.php"); // Przekierowanie do strony głównej
    exit();
}
	if (isset($_POST["username"]) && isset($_POST["password"]))
	{
		
		
		$conn=mysqli_connect("localhost", "root", "", "dane");
		if ($conn){
			if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Zabezpieczenie przed atakami SQL Injection
    $username = $conn->real_escape_string($username);
    $password = $conn->real_escape_string($password);

    // Wyszukanie użytkownika w bazie danych
    $sql = "SELECT * FROM users WHERE username = '$username' LIMIT 1";
    $result = $conn->query($sql);

    if ($result->num_rows === 1) {
        $row = $result->fetch_assoc();
        $hashedPassword = $row['password'];

        // Sprawdzenie poprawności hasła
        if (password_verify($password, $hashedPassword)) {
            $_SESSION['username'] = $username;
            $_SESSION['role'] = $row['role'];
            header("Location: glowna.php"); // Przekierowanie do strony głównej po zalogowaniu
            exit();
        } else {
            echo "Nieprawidłowy login lub hasło.";
        }
    } else {
        echo "Nieprawidłowy login lub hasło.";
    }
		}
	}
	}
?>
<html>
<head><link rel="stylesheet" href="Admin.css">
<meta charset="UTF-8">
<title>Logowanie</title></head>
<body>
	<form action="login.php" method="post">
		podaj login: <input type="text" name="username"><br>
		podaj haslo: <input type="password" name="password"><br>
		<input type="submit" value="Zaloguj sie">
		<input type="reset" value="Reset">
		
	</form><br>
	<a href="rejstr.php">Zarejstruj się</a><br>
	<a href="glowna.php">Kontynuuj jako gość</a><br>
</body>
</html>