<html>
<head><link rel="stylesheet" href="Admin.css">
<meta charset="UTF-8">
<title>Panel admina</title>
</head>
<body>
<h1>Panel Admina</h1>
<a href="glowna.php">Strona główna</a><br>
<?php
session_start();
$con=mysqli_connect("localhost", "root", "", "dane");

if($con){
	$sql = "SELECT * FROM pociagi";	
		$otherTrainsResult  = $con->query($sql);
	
	if(isset($_POST["dataWp"]) && isset($_POST["numer"]) && isset($_POST["nazwisko"]) && isset($_POST["dataOd"]) && isset($_POST["czas"]) && isset($_POST["opoznienie"]) && isset($_POST["nazwa"]) )
	{
		
		$dataWp=$_POST["dataWp"];
		$numer=$_POST["numer"];
		$nazwisko=$_POST["nazwisko"];
		$dataOd=$_POST["dataOd"];
		$czas=$_POST["czas"];
		$opoznienie=$_POST["opoznienie"];
		$nazwa=$_POST["nazwa"];
		
		if (empty($dataWp) || empty($numer) || empty($nazwisko) || empty($dataOd) || empty($czas) || empty($opoznienie) || empty($nazwa)) {
        echo "Wszystkie pola formularza muszą być wypełnione.";
    } else {
		if($opoznienie<0){
			echo"Opóźnienie nie może być na minusie";
		}else{
			 if (preg_match('/\d/', $nazwisko)) {
        echo "nazwiska nie zawiera cyfr!";
        
    }else{
		$con=mysqli_connect("localhost", "root", "", "dane");
		$res=mysqli_query($con, "SELECT* FROM pociagi where numer='$numer'");
		if (mysqli_num_rows($res) > 0){
				echo "ktos juz wpisal ten pociag";
			}
		else{
		if ($con){
		$res=mysqli_query($con, "INSERT INTO pociagi (dataWp, numer, nazwisko, dataOd, czas, opoznienie, nazwa) VALUES('$dataWp', '$numer', '$nazwisko', '$dataOd', '$czas', '$opoznienie' ,'$nazwa')");
				header("Location: panel.php");				
			}	
		}
		}
	}
}
	}

}
if (isset($_POST["zatwierdz"])){
	echo"test";
		$dataWp=$_POST["dataWp"];
		$numer=$_POST["numer"];
		$nazwisko=$_POST["nazwisko"];
		$dataOd=$_POST["dataOd"];
		$czas=$_POST["czas"];
		$opoznienie=$_POST["opoznienie"];
		$nazwa=$_POST["nazwa"];
		
		$id=$_POST["idWp"];
		
		$sql = "UPDATE pociagi SET
            dataWp = '$dataWp',
            numer = '$numer',
            nazwisko = '$nazwisko',
            dataOd = '$dataOd',
            czas = '$czas',
            opoznienie = '$opoznienie',
            nazwa = '$nazwa'
            WHERE id = $id";
			mysqli_query($con,$sql);
			
	}

if (isset($_POST["site_name"])){
	$conn=mysqli_connect("localhost", "root", "", "dane");
	

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $newSiteName = $_POST['site_name'];

    $updateQuery = "UPDATE settings SET site_name = '$newSiteName' WHERE id = 1";
    $conn->query($updateQuery);
}
}

if(isset($_POST["submit"])) {
$target_dir = "uploads/";
$target_file = $target_dir ."logo.jpg";
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image

  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }


// Check if file already exists


// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" ) {
  echo "Sorry, only JPG, JPEG, PNG files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}
}

?>
<h2>Dodaj wpis</h2>
<form action="panel.php" method="post">
		Data wpisu: <input type="date" name="dataWp"><br>
		Numer pociągu: <input type="number" name="numer"><br>
		Nazwisko maszynisty: <input type="text" name="nazwisko"><br>
		Data odjazdu: <input type="datetime-local" name="dataOd"><br>
		Szacunkowy czas odjazdu: <input type="time" name="czas"><br>
		Opóźnienie (w minutach): <input type="number" name="opoznienie"><br>
		Nazwa przewoźnika: <input type="text" name="nazwa"><br>
		<input type="submit" value="Wyśli">
		<input type="reset" value="Reset">
</form>


<?php
if (isset($_POST["Usun"])){
	
	$id=$_POST["idWp"];
	
	$con=mysqli_connect("localhost", "root", "", "dane");
	
	$res=mysqli_query($con, "SELECT* FROM pociagi where id='$id'");
		
				
			
	
	 $sql = "DELETE FROM pociagi WHERE id = $id";

    if ($con->query($sql) === TRUE) {
        echo "Wpis został usunięty.";
		header("Location: panel.php");
    } else {
        echo "Błąd podczas usuwania wpisu: " . $con->error;
    }
	
}
if (isset($_POST["UsunUz"])){
	
	$id=$_POST["idUs"];
	
	$con=mysqli_connect("localhost", "root", "", "dane");
	
	
		
				
			
	
	 $sql = "DELETE FROM users WHERE id = $id";

    if ($con->query($sql) === TRUE) {
        echo "użytkownik został usunięty.";
    } else {
        echo "Błąd podczas usuwania użytkownik: " . $con->error;
    }
	


}
if (isset($_POST["AwansujUz"])){
	
	$id=$_POST["idUp"];
	
	
	$sql = "UPDATE users SET role = 'admin' WHERE id = '$id'";
	mysqli_query($con, $sql);		
	
	
}
if (isset($_POST["DegradujUs"])){
	
	$id=$_POST["idDg"];
	
	
	$sql = "UPDATE users SET role = 'user' WHERE id = '$id'";
	mysqli_query($con, $sql);		
	
	
}
?>
<h2>Zmień nazwe strony</h2>
<form action="panel.php" method="post">
        Podaj nową nazwe strony<input type="text" name="site_name">
<input type="submit" value="Wyśli">
</form>
<h2>Zmień logo strony</h2>
<form action="panel.php" method="post" enctype="multipart/form-data">
  Wybierz plik do przesłania:
  <input type="file" name="fileToUpload" id="fileToUpload">
  <input type="submit" value="Upload Image" name="submit">
</form>
<h2>Edytuj wpis</h4>

	<table>
	
        <tr>
            <th>Data wpisu</th>
            <th>Numer pociągu</th>
            <th>Nazwisko maszynisty</th>
            <th>Data odjazdu</th>
            <th>Szacunkowy czas odjazdu</th>
            <th>Opóźnienie</th>
            <th>Nazwa przewoźnika</th>
			<th>modyfikuj</th>
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
			<td><form action="panel.php" method="post"><button type="submit" name="edytuj">Edytuj wpis</button><input type="hidden" value="<?php echo $row['id']; ?>" name="idWp"></form><br>
			<form action="panel.php" method="post"><button type="submit" name="Usun">usuń wpis</button><input type="hidden" value="<?php echo $row['id']; ?>" name="idWp"></form></td>
        </tr>
		<?php endwhile;
		if (isset($_POST["edytuj"])){
		$id=$_POST["idWp"];
		$rez=mysqli_query($con, "SELECT* FROM pociagi where id=$id");
		$row = $rez ->fetch_assoc();
		echo '<form action="panel.php" method="post">
		Data wpisu: <input type="date" name="dataWp" value="'.$row['dataWp'].'"><br>
		Numer pociągu: <input type="number" name="numer" value="'.$row['numer'].'"><br>
		Nazwisko maszynisty: <input type="text" name="nazwisko" value="'.$row['nazwisko'].'"><br>
		Data odjazdu: <input type="datetime-local" name="dataOd" value="'.$row['dataOd'].'"><br>
		Szacunkowy czas odjazdu: <input type="time" name="czas" value="'.$row['czas'].'"><br>
		Opóźnienie (w minutach): <input type="number" name="opoznienie" value="'.$row['opoznienie'].'"><br>
		Nazwa przewoźnika: <input type="text" name="nazwa" value="'.$row['nazwa'].'"><br>
		<input type="hidden" value="'.$row['id'].'" name="idWp">
		<input type="submit" value="zatwierdz" name="zatwierdz">
		<input type="reset" value="Reset">
</form>';

	}
	    $username = $_SESSION['username'];
	    $us = "SELECT * FROM users WHERE username !='$username'";	
		$userResult  = $con->query($us);
		
		
		
?>
</table><br>
<h2>Modyfikuj użytkowników<h2>
<table>
	
        <tr>
            <th>Nazwa użytkownika</th>
            <th>rola użytkownika</th>
			<th>modyfikuj</th>
        </tr>
		<?php while ($row = $userResult ->fetch_assoc()): ?>
		<tr>
            <td><?php echo $row['username']; ?></td>
            <td><?php echo $row['role']; ?></td>
			<td><form action="panel.php" method="post"><button type="submit" name="UsunUz">usuń użytkownika</button><input type="hidden" value="<?php echo $row['id']; ?>" name="idUs"></form><br>
			<?php $rola= $row ['role']; if($rola =='user'){?><form action="panel.php" method="post"><button type="submit" name="AwansujUz">awansuj</button><input type="hidden" value="<?php echo $row['id']; ?>" name="idUp"><?php }else{?>
			<form action="panel.php" method="post"><button type="submit" name="DegradujUs">Degraduj</button><input type="hidden" value="<?php echo $row['id']; ?>" name="idDg"><?php } ?></td>
        </tr>
		<?php endwhile;?>
		</table>
</body>
</html>

		