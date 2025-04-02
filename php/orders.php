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

$userIdSql = "SELECT * FROM `user` where email = '".$obj['email']."'";
$user = $conn->query($userIdSql);
$id = $user->fetchAll(PDO::FETCH_ASSOC);

$ordersSql ="SELECT * FROM `orderitem` where userid = '".$id['iduser']."'";
$res = $conn->query($ordersSql);

$orders = $res->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(["orders" => $orders]); 
?>