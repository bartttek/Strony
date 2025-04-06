<!DOCTYPE html>
<html lang="pl">
<head>
    <link rel="stylesheet" href="stylPociagi.css">
    <meta charset="UTF-8">
	<link rel="icon" href="uploads/logo.jpg">
    <title><?php 
$conn=mysqli_connect("localhost", "root", "", "dane");
if($conn){

$query = "SELECT site_name FROM settings WHERE id = 1";
$result = $conn->query($query);
$row = $result->fetch_assoc();
$siteName = $row['site_name'];
if(empty($siteName)){$tyt=mysqli_query($conn, "INSERT INTO settings (site_name) VALUES('Opóźnienia pociagów')");}
            echo "$siteName";
}?></title>		
</head>
<body>
<img src="uploads/logo.jpg" alt="logo" style="height:100px; width:auto; float: right;">
    <header>
	<?php
    session_start();
	
	if (empty($_SESSION['username'])) {
        
    } else {
	if ($_SESSION['role'] !== 'admin'){
	$conn=mysqli_connect("localhost", "root", "", "dane");
	
	$sql = "SELECT * FROM users WHERE role = 'admin' LIMIT 1";
$result = $conn->query($sql);


// Jeśli nie ma jeszcze administratora, ustaw pierwszego zalogowanego użytkownika jako administratora
if ($result->num_rows === 0) {
    if (isset($_SESSION['username'])) {
        $username = $_SESSION['username'];

        // Aktualizacja roli użytkownika na administratora
        $sql = "UPDATE users SET role = 'admin' WHERE username = '$username'";
        if ($conn->query($sql) === TRUE) {
            echo "Użytkownik '$username' został ustawiony jako administrator.";
        } else {
            echo "Błąd podczas ustawiania użytkownika '$username' jako administratora: " . $conn->error;
        }
    }
} else {
	
    echo "Administrator już istnieje w systemie.";
	
}
	}
    $username = $_SESSION['username'];
	$us = "SELECT * FROM users WHERE username = '$username' ";	
		$userResult  = $conn->query($us);
		$ak = $userResult ->fetch_assoc();
		$rola= $ak['role'];
	if ($rola == 'admin'){
		?>
		<a href="panel.php"><button id="pan" type="submit">Panel admina</button></a>
		<?php
	}
	}
	if (empty($_SESSION['username'])) {
        echo"Jestes zalogowany jako gość <a href='login.php'>zaloguj się</a>";
    } else {
	?>
	<a href="logout.php"><button id="pan" type="submit">wyloguj sie</button></a>
	<?php
	}
	if (isset($_POST['kom'])) {
    $komentarz = $_POST['komentarz'];
    $username = $_SESSION['username'];
	$aktualnaData = date('Y-m-d H:i:s');
    $res=mysqli_query($conn, "INSERT INTO komentarze (autor, tresc, data_komentarza) VALUES( '$username', '$komentarz','$aktualnaData')");
  
}
if(isset($_POST["usunKom"])){
	
	$id=$_POST["idKom"];

	
	$res=mysqli_query($conn, "SELECT* FROM komentarze where id='$id'");

	 $sql = "DELETE FROM komentarze WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
         header("Location: glowna.php");			
    } else {
        echo "Błąd podczas usuwania wpisu: " . $con->error;
    }
	
}
	?>
	</header>
	<h1>Opóźnienia pociagów</h1>
	<?php
	$con=mysqli_connect("localhost", "root", "", "dane");
	if ($con->connect_error) {
    die("Błąd połączenia z bazą danych: " . $conn->connect_error);
}else{
		$date = date('Y-m-d');
		$sql = "SELECT * FROM pociagi WHERE dataWp = '$date' ORDER BY opoznienie DESC LIMIT 1";
		$result = $con->query($sql);
		$row = $result->fetch_assoc();
		$sql = "SELECT * FROM pociagi";	
		$otherTrainsResult  = $con->query($sql);

	?>
	
	 <h2>Pociąg o największym opóźnieniu dzisiejszego dnia</h2>
	 <?php if ($result->num_rows > 0): ?>
    <table>
        <tr>
            <th>Data wpisu</th>
            <th>Numer pociągu</th>
            <th>Nazwisko maszynisty</th>
            <th>Data odjazdu</th>
            <th>Szacunkowy czas odjazdu</th>
            <th>Opóźnienie</th>
            <th>Nazwa przewoźnika</th>
        </tr>
        <tr>
            <td><?php echo $row['dataWp']; ?></td>
            <td><?php echo $row['numer']; ?></td>
            <td><?php echo $row['nazwisko']; ?></td>
            <td><?php echo $row['dataOd']; ?></td>
            <td><?php echo $row['czas']; ?></td>
            <td><?php echo $row['opoznienie']; ?></td>
            <td><?php echo $row['nazwa']; ?></td>
        </tr>
    </table>
    <?php else: ?>
    <p>Brak wpisów dla dzisiejszej daty.</p>
    <?php endif; ?>
	<h2>Wpisy</h2>
	<table>
	
        <tr>
            <th>Data wpisu</th>
            <th>Numer pociągu</th>
            <th>Nazwisko maszynisty</th>
            <th>Data odjazdu</th>
            <th>Szacunkowy czas odjazdu</th>
            <th>Opóźnienie</th>
            <th>Nazwa przewoźnika</th>
        </tr>
		<?php while ($row = $otherTrainsResult ->fetch_assoc()): ?>
		<tr>
            <td><?php echo $row['dataWp']; ?></td>
            <td><?php echo $row['numer']; ?></td>
            <td><?php echo $row['nazwisko']; ?></td>
            <td><?php echo $row['dataOd']; ?></td>
            <td><?php echo $row['czas']; ?></td>
            <td><?php echo $row['opoznienie']; ?></td>
            <td><?php echo $row['nazwa']; ?></td>
        </tr>
		<?php endwhile;
}?>
 
</table>
<div class="comment-form">
    <?php if (isset($_SESSION["username"])): ?>
        <h3>Dodaj komentarz</h3>
        <form method="post" action="glowna.php">
            <textarea name="komentarz" placeholder="Treść komentarza" required></textarea>
            <input type="submit" value="Dodaj komentarz" name="kom">
        </form>
    <?php endif; 
	

$komentarzeQuery = "SELECT * FROM komentarze ORDER BY data_komentarza DESC";
$komentarzeResult = $conn->query($komentarzeQuery);

if ($komentarzeResult->num_rows > 0) {
    echo '<h2>Komentarze</h2>';
    while ($komentarzRow = $komentarzeResult->fetch_assoc()) {
        $autor = $komentarzRow['autor'];
        $tresc = $komentarzRow['tresc'];
        $data = $komentarzRow['data_komentarza'];

        echo '<div class="comment">';
        echo '<span class="author">' . $autor . '</span>';
        echo ' - ';
        echo '<span class="timestamp">' . $data . '</span>';
        echo '<div class="content">' . $tresc . '</div>';
		if ($rola == 'admin'){
			?>
		
		<form action="glowna.php" method="post"><button id="usun" type="submit" name="usunKom">Usuń komentarz</button><input type="hidden" value="<?php echo $komentarzRow['id']; ?>" name="idKom"></form>
		<?php
		}
        echo '</div>';
    }
} else {
    echo '<p>Brak komentarzy.</p>';
}
?>
</div>
</body>
</html>