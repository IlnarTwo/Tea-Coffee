<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Password');
// header("Access-Control-Allow-Credentials: true");
session_start();

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

require_once("db.php");

$userEmail = "ila@ila"; // надо достать email из токена если я правильно понимаю как это работает

$authSql = "SELECT * FROM `user` WHERE `email` = '".$userEmail."'";
$res = $conn->query($authSql);

$user = $res->fetch(PDO::FETCH_ASSOC);

$date= date('y-m-d');

if (isset($obj['listItem']) || isset($obj['price'])){
    $listItem = json_encode($obj['listItem']);
    $price = $obj['price'];
     
    $sqlInsert = "INSERT INTO `orderitem`(`userid`, `itemsid`, `price`, `dateOrder`) VALUES ('".$user['iduser']."','".$listItem."','".$price."','".$date."')";
    $res = $conn->query($sqlInsert);
}

if ($res){
    echo json_encode(
        ["output" => "Товар оплачен"]
    );
}else{
    echo json_encode(
        ["output" => "Ошибка при оплате товара"]
    );
}
?>