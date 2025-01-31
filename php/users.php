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

$authSql ="SELECT * FROM `user`";
$res = $conn->query($authSql);

$users = $res->fetch(PDO::FETCH_ASSOC);

var_dump($users);

var_dump($res);

echo json_encode($users);
?>