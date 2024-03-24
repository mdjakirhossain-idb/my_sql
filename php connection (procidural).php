<?php
$servername = "localhost";
$username = "root";
$password = "";

$dname= "my_portal";
$conn = mysqli_connect($servername, $username, $password,$dname);


if (!$conn) {
  die("Connection failed: " . $conn);
}
echo "Connected successfully";
?>