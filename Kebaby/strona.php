<?php
if(isset($_GET['nazwa'])){
    $nazwa=$_GET["nazwa"];  
     $ocena=$_GET["ocena"];
     $miasto=$_GET["miasto"];
     echo"nazwa kebaba: $nazwa ocena kebaba: $ocena miasto kebaba: $miasto";
$link=mysqli_connect("localhost", "root", "", "zadanieKebab");
mysqli_query($link, "INSERT INTO Kebaby VALUE(
    '$nazwa',
    $ocena,
    '$miasto'
)");
mysqli_close($link);
}

if(isset($_GET['znajdz'])){
    $link=mysqli_connect("localhost", "root", "", "zadanieKebab");
   
    $sql = "SELECT * FROM Kebaby";
    $result = mysqli_query($link, $sql);
    $rows = array();

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $rows[] = $row;
        }
    }

    echo json_encode($rows);
    mysqli_close($link);
}

?>
