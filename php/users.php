<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Password');
session_start();

require_once("db.php");

$authSql = "SELECT * FROM `user`";
$res = $conn->query($authSql);

// Используем fetchAll для получения всех строк
$users = $res->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(["users" => $users]); // Возвращаем данные в формате { "users": [...] }
?>