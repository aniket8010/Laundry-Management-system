<?php
include('./config.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Get data from request
$data = json_decode(file_get_contents("php://input"), true);
$name = $data["name"];
$phone = $data["phone"];
$address = $data["address"];

// Insert data into database
$stmt = $conn->prepare("INSERT INTO orders (name, phone, address) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $phone, $address);
$stmt->execute();
echo json_encode(["status" => "success", "message" => "Order placed successfully"]);

$conn->close();
?>
