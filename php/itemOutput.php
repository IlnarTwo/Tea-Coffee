<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

require_once("db.php");

$selectTitle = $obj['title'];
$selectCategory = $obj['categoru'];
$selectDiscript = $obj['discript'];
$selectPrice = $obj['price'];

$allItem = "SELECT * FROM `item` where `title` like '%".$selectTitle."%' or `category` like '%".$selectCategory."%' or `discrip` like '%".$selectDiscript."%' or `price` like '%".$selectPrice."%'";
$res = $conn->query($allItem);

// надо посмотреть и подумать как мен с помощью foreach вывести все item
?>