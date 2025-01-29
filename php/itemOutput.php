<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

require_once("db.php");

$output = [];

if (isset($obj['title']) || isset($obj['category']) || isset($obj['discript']) || isset($obj['price'])){
    $titleItem = $obj['title'];
    $categoryItem = $obj['category'];
    $discripItem = $obj['discript'];
    $priceItem = $obj['price'];
    
    $allItem = "SELECT * FROM `item` where `title` like '%".$selectTitle."%' or `category` like '%".$selectCategory."%' or `discrip` like '%".$selectDiscript."%' or `price` like '%".$selectPrice."%'";
    $res = $conn->query($allItem);
    $items = $res->fetchAll(PDO::FETCH_ASSOC);

    foreach ($items as $value){
        $output [] = $value;
    }

}else{

    $allItem = "SELECT * FROM `item`";
    $res = $conn->query($allItem);
    $items = $res->fetchAll(PDO::FETCH_ASSOC);

    foreach ($items as $value){
        $output [] = $value;
    }

}

echo json_encode(["data" => $output]);
?>