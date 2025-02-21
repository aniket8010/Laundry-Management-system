<?php
$conn = new mysqli('localhost', 'root', '', 'Laundry_Management_System');
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}
?>