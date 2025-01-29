<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
header("Access-Control-Allow-Credentials: true");
session_start();

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

require_once("db.php");

$email = test_input($obj["email"]);
$passw = sha1(test_input($obj["passw"]));

$authSql ="SELECT * FROM `user` where email = '".$email."' and passw = '".$passw."'";
$res = $conn->query($authSql);

$user = $res->fetch(PDO::FETCH_ASSOC);

if ($user){
    $_SESSION["auth"] = true;
    $_SESSION["email"] = $email;
    $_SESSION["role"] = $user["roleUser"];
    $_SESSION["group"] = $user["roleGroup"];
    var_dump($_SESSION);
    echo json_encode(['auth' => true]);    
}else{
    echo json_encode(['auth' => false]);
}



function test_input($data) {
    $data = trim($data); //удалим ненужные символы (лишние пробелы, табуляции, переходы на новую строку)
    $data = stripslashes($data);  //удалим обратную косую черту (\)
    $data = htmlspecialchars($data);  //преобразует специальные символы (в нашем случае угловые скобки < и >) в объекты HTML для защиты от эксплойта
    return $data;
}
?>