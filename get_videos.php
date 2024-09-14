<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root"; // Замените вашим именем пользователя
$password = "acer"; // Замените вашим паролем
$dbname = "osamu";

// Создаем соединение
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем соединение
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, title, description, athor, year, poster FROM videos";
$result = $conn->query($sql);

$videos = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $videos[] = $row;
    }
}

$conn->close();

echo json_encode($videos);
?>