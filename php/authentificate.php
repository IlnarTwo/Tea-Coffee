<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Password');
// header("Access-Control-Allow-Credentials: true");

require '../vendor/autoload.php'; // Подключаем автозагрузчик Composer
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$secretKey = "ilia_shurygin"; // Тот же ключ, что и при генерации JWT

$authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';

if (preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
    $jwt = $matches[1];

    try {
        $decoded = JWT::decode($jwt, new Key($secretKey, 'HS256'));
        // Токен валиден, возвращаем данные пользователя
        echo json_encode([
            'auth' => true,
            'role' => $decoded->data->role // Роль пользователя из JWT
        ]);
    } catch (Exception $e) {
        // Токен невалиден
        http_response_code(401);
        echo json_encode([
            'auth' => false,
            'role' => null
        ]);
    }
} else {
    // Токен отсутствует
    http_response_code(401);
    echo json_encode([
        'auth' => false,
        'role' => null
    ]);
}
?>