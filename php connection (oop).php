<?php

$servername = "localhost";
$username = "root";
$password = "";
$dname= "my_class";
$conn = new mysqli($servername, $username, $password,$dname);


if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";



?>