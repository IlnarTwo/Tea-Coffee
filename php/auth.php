<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Password');
header("Access-Control-Allow-Credentials: true");
session_start();

require '../vendor/autoload.php'; // Подключаем автозагрузчик Composer
use Firebase\JWT\JWT;

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

require_once("db.php");

$email = test_input($obj["email"]);
$passw = sha1(test_input($obj["passw"]));

$authSql = "SELECT * FROM `user` where email = '".$email."' and passw = '".$passw."'";
$res = $conn->query($authSql);

$user = $res->fetch(PDO::FETCH_ASSOC);

if ($user) {
    // Генерация JWT
    $secretKey = "ilia_shurygin"; // Замените на ваш секретный ключ
    $issuedAt = time();
    $expirationTime = $issuedAt + 3600; // Токен будет действителен 1 час

    $payload = [
        'iat' => $issuedAt,
        'exp' => $expirationTime,
        'data' => [
            'email' => $email,
            'role' => $user["roleUser"],
            'group' => $user["roleGroup"]
        ]
    ];

    $jwt = JWT::encode($payload, $secretKey, 'HS256');

    // Отправляем JWT на фронтенд
    echo json_encode([
        'auth' => true,
        'token' => $jwt
    ]);
} else {
    echo json_encode(['auth' => false]);
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>