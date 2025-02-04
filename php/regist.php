<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Password');
// header("Access-Control-Allow-Credentials: true");

require '../vendor/autoload.php'; // Подключаем автозагрузчик Composer
use Firebase\JWT\JWT;

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

require_once("db.php");

$login = test_input($obj["login"]);
$email = test_input($obj["email"]);
$passw = sha1(test_input($obj["passw"])); // Хэшируем пароль
$role = "user";
$group = "users";

// Проверяем, существует ли пользователь с таким email
$authSql = "SELECT * FROM `user` WHERE email = '".$email."'";
$res = $conn->query($authSql);

$user = $res->fetch(PDO::FETCH_ASSOC);

if (empty($user)) {
    // Если пользователь не существует, регистрируем его
    $registSql = "INSERT INTO `user`(`login`, `email`, `passw`, `roleUser`, `roleGroup`) 
                  VALUES ('".$login."','".$email."','".$passw."', '".$role."', '".$group."')";
    $regRes = $conn->query($registSql);

    if ($regRes) {
        // Генерация JWT после успешной регистрации
        $secretKey = "ilia_shurygin"; // Замените на ваш секретный ключ
        $issuedAt = time();
        $expirationTime = $issuedAt + 3600; // Токен будет действителен 1 час

        $payload = [
            'iat' => $issuedAt,
            'exp' => $expirationTime,
            'data' => [
                'email' => $email,
                'role' => $role,
                'group' => $group
            ]
        ];

        $jwt = JWT::encode($payload, $secretKey, 'HS256');

        // Отправляем JWT на фронтенд
        echo json_encode([
            'auth' => true,
            'role' => $role,
            'token' => $jwt
        ]);
    } else {
        // Ошибка при регистрации
        echo json_encode([
            'auth' => false,
            'message' => 'Registration failed'
        ]);
    }
} else {
    // Пользователь уже существует
    echo json_encode([
        'auth' => false,
        'message' => 'User already exists'
    ]);
}

function test_input($data) {
    $data = trim($data); // Удаляем лишние пробелы
    $data = stripslashes($data); // Удаляем обратные слэши
    $data = htmlspecialchars($data); // Преобразуем специальные символы
    return $data;
}
?>