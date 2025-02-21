<?php
include('./config.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

// Validate input
if (empty($email) || empty($password)) {
    echo json_encode(['message' => 'Email and password are required']);
    exit();
}

// Prepare and execute the query
$stmt = $conn->prepare("SELECT id, password FROM users WHERE email = ?");
if (!$stmt) {
    echo json_encode(['message' => 'Database error: ' . $conn->error]);
    exit();
}

$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

// Check if a user with the given email exists
if ($stmt->num_rows > 0) {
    $stmt->bind_result($id, $storedPassword);
    $stmt->fetch();

    // Debugging log
    error_log("Stored Password: " . $storedPassword);

    // Compare passwords directly
    if ($password === $storedPassword) {
        echo json_encode(['message' => 'Login successful']);
    } else {
        echo json_encode(['message' => 'Invalid credentials - Password mismatch']);
    }
} else {
    echo json_encode(['message' => 'Invalid credentials - User not found']);
}

$stmt->close();
$conn->close();
?>
