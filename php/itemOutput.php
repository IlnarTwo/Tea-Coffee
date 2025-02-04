<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Password');

require_once("db.php");

$output = [];

// Проверяем, есть ли данные в запросе
$json = file_get_contents('php://input');
$obj = json_decode($json, true);

// Подготовка SQL-запроса
$sql = "SELECT * FROM `item`";

// Выполнение запроса
try {
    $stmt = $conn->query($sql);
    $items = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($items as $value) {
        $output[] = $value;
    }
} catch (PDOException $e) {
    // Обработка ошибок
    $output = ['error' => $e->getMessage()];
}

echo json_encode($output);
?>