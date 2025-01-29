<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
header("Access-Control-Allow-Credentials: true");
session_start();

var_dump($_SESSION);

if(isset($_SESSION['auth'])){
    echo json_encode(['auth' => true, 'role' => $_SESSION['role']]);
}else{
    echo json_encode(['auth' => false]);
}
?>