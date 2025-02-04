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

// $email = $_SESSION['email'];
$email = "ila@ila";

$authSql = "SELECT * FROM `user` where email = '".$email."'";
$res = $conn->query($authSql);

$user = $res->fetch(PDO::FETCH_ASSOC);

echo json_encode($user);

?>