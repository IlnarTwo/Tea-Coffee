<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
header("Access-Control-Allow-Credentials: true");

// Если вы используете только JWT, просто возвращаем успешный ответ
echo json_encode([
    'success' => true,
    'message' => 'Logout successful'
]);
?>