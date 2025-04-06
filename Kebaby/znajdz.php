<?php

   
     $miasto=$_GET["miasto"];
    

     $link=mysqli_connect("localhost", "root", "", "zadanieKebab");
     $miasto = $link->real_escape_string($_GET["miasto"]);

    // Zapytanie do bazy danych
    $sql = "SELECT nazwa, ocena, miasto FROM Kebaby WHERE miasto = '$miasto'";
    $result = $link->query($sql);

if ($result->num_rows > 0) {
    // Wyjście danych z każdego wiersza
    while($row = $result->fetch_assoc()) {
        echo htmlspecialchars($row["nazwa"]) . " - Ocena: " . htmlspecialchars($row["ocena"]) . " - Miasto: " . htmlspecialchars($row["miasto"]) . "<br>";
    }
} else {
    echo "0 wyników";
}
$link->close();
     
     ?>